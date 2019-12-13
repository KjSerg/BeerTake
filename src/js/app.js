
import { detectBrowser } from './_helpers';
import { hamburger } from './_hamburger';
import './_svg';
import './_parallax';

import Sliders from './Sliders';

import ProductFilter from './ProductFilter';

import AOS from 'aos';

class Application {
    constructor() {
        Application.init();
    }

    static initializePlugins() {
        const sliders = new Sliders();

        AOS.init({
            once: true,
        });
    };

    static initializeModules() {
        const filter = new ProductFilter();

        hamburger();
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