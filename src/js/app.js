import { detectBrowser } from './_helpers';
import './_svg';
import './_parallax-mouse';

class Application {
    constructor() {
        Application.init();
    }

    static initializePlugins() {
        // INIT YOUR PLUGINS
    };

    static initializeModules() {
        // INIT YOUR MODULES
    };

    static detectBrowser() {
        document.body.setAttribute('data-browser', detectBrowser());
    }

    static init() {
        this.detectBrowser();
        this.initializePlugins();
        this.initializeModules();
    }
};

const App = new Application();