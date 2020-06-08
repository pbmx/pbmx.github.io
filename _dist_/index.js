import initPbmx, {Game} from "/web_modules/pbmx-web.js";
import {createApp} from "/web_modules/vue.js";
import App2 from "./App.js";
import initDB, {getPrivateKey} from "./storage.js";
(async function() {
  await initPbmx();
  window.db = await initDB();
  window.game = Game.new(getPrivateKey());
  const app = createApp(App2);
  app.mount("#app");
})();
