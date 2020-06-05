import __SNOWPACK_ENV__ from '/__snowpack__/env.js';
import.meta.env = __SNOWPACK_ENV__;

import initPbmx, * as pbmx from "/web_modules/pbmx-web.js";
import {createApp} from "/web_modules/vue.js";
import App2 from "./App.js";
(async function() {
  await initPbmx();
  const app2 = createApp(App2);
  app2.mount("#app");
})();
if (import.meta.hot) {
  import.meta.hot.accept();
  import.meta.hot.dispose(() => {
    app.unmount();
  });
}
