import {PrivateKey, Block} from "/web_modules/pbmx-web.js";
let db;
export default function() {
  return new Promise((resolve, reject) => {
    const existing = localStorage.getItem("privateKey");
    if (!existing) {
      localStorage.setItem("privateKey", PrivateKey.random().export());
    } else {
      PrivateKey.import(existing);
    }
    const req = window.indexedDB.open("pbmx", 1);
    req.onupgradeneeded = function() {
      const db2 = req.result;
      if (!db2.objectStoreNames.contains("games")) {
        db2.createObjectStore("games", {
          keyPath: "name"
        });
      }
      if (!db2.objectStoreNames.contains("blocks")) {
        const blocks = db2.createObjectStore("blocks", {
          keyPath: "id"
        });
        blocks.createIndex("game", "game");
      }
    };
    req.onsuccess = function() {
      db = req.result;
      resolve(db);
    };
    req.onerror = function() {
      reject(req.error);
    };
  });
}
export function getPrivateKey() {
  const base64 = window.localStorage.getItem("privateKey");
  return PrivateKey.import(base64);
}
export function saveBlock(block, game) {
  return new Promise((resolve, reject) => {
    if (!game) {
      game = "default";
    }
    const obj = {
      id: block.id().export(),
      data: block.export(),
      game
    };
    const tx = db.transaction("blocks", "readwrite");
    const req = tx.objectStore("blocks").add(obj);
    req.onsuccess = function() {
      resolve();
    };
    req.onerror = function() {
      reject(req.error);
    };
  });
}
function getBlocksFor(game) {
  return new Promise((resolve, reject) => {
    if (!game) {
      game = "default";
    }
    const tx = db.transaction("blocks");
    const idx = tx.objectStore("blocks").index("game");
    const req = idx.getAll(game);
    req.onsuccess = function() {
      resolve(req.result);
    };
    req.onerror = function() {
      reject(req.error);
    };
  });
}
export async function loadBlocks(game) {
  let blocks = await getBlocksFor(game.name);
  for (const b of blocks) {
    game.addBlock(Block.import(b.data));
  }
}
