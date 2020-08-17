import {Game} from "/web_modules/pbmx-web.js";
import {reactive} from "/web_modules/vue.js";
import {getPrivateKey, loadBlocks} from "./storage.js";
import {arrayToHex} from "./display.js";
let game;
const react = reactive({
  tick: true
});
export default async function(id) {
  game = Game.new(getPrivateKey());
  if (!id) {
    id = new Uint8Array(16);
    window.crypto.getRandomValues(id);
    id = arrayToHex(id);
  }
  game.id = id;
  await asyncMutGame(loadBlocks);
}
export function hasGame() {
  react.tick;
  if (game) {
    return true;
  } else {
    return false;
  }
}
export function getGame() {
  react.tick;
  return game;
}
export function mutGame(fun) {
  let result = fun(game);
  react.tick = !react.tick;
  return result;
}
export async function asyncMutGame(fun) {
  let result = await fun(game);
  react.tick = !react.tick;
  return result;
}
