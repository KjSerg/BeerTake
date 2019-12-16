
import { detectBrowser } from './_helpers';
import { hamburger } from './_hamburger';
import './_svg';
import './_parallax';
import './_validation';

import Sliders from './Sliders';

import ProductFilter from './ProductFilter';

import AOS from 'aos';
import '@fancyapps/fancybox';
import 'jquery.maskedinput/src/jquery.maskedinput';


class Application {
    constructor() {
        Application.init();
    }

    static initializePlugins() {
        const sliders = new Sliders();

        AOS.init({
            once: true,
        });

        $('.fancybox').fancybox();

        $('input[type="tel"]').mask("+7(999) 999-9999");
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