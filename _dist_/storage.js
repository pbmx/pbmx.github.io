import {PrivateKey} from "/web_modules/pbmx-web.js";
let db;
function init() {
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
export default init;
