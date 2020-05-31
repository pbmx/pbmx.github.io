
import init, * as pbmx from './pkg/pbmx_web.js';


async function run() {
    await init();

    let app = new Vue({ 
        el: '#app',
        data: {
            message: pbmx.PrivateKey.random().export()
        }
    });
}

run();
