import { detectBrowser } from './_helpers';
import './_svg';
import './_parallax-mouse';

import Sliders from './Sliders';

import ProductFilter from './ProductFilter';


class Application {
    constructor() {
        Application.init();
    }

    static initializePlugins() {
        const sliders = new Sliders();
    };

    static initializeModules() {
        const filter = new ProductFilter();
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