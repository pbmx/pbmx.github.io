import initPbmx from "/web_modules/pbmx-web.js";
import {createApp} from "/web_modules/vue.js";
import App2 from "./App.js";
import initDB from "./storage.js";
import initGame from "./state.js";
(async function() {
  await initPbmx();
  await initDB();
  await initGame();
  const app = createApp(App2);
  app.mount("#app");
})();
