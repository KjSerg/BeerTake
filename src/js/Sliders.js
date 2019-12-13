import 'slick-carousel';

export default class Sliders {
    constructor() {
        this.init();
    }

    initSliders($selector, arg) {
        if($selector) {

            $selector.each(function () {

                const $this = $(this);

                if($this.hasClass('slick-initialized')) {
                    return;
                }

                const $left = $this.closest('.slider-wrapper').find('.slider-prev');
                const $right = $this.closest('.slider-wrapper').find('.slider-next');

                const options = {};

                if($left.length > 0 && $right.length > 0) {
                    options.prevArrow = $left;
                    options.nextArrow = $right;
                }

                if(arg.slidesToShow) {
                    options.slidesToShow = arg.slidesToShow;
                }

                if(arg.slidesToScroll) {
                    options.slidesToScroll = arg.slidesToScroll;
                }

                if(arg.infinite) {
                    options.infinite = arg.infinite;
                }else {
                    options.infinite = true;
                }

                $this.slick(options);

            });

        }
    }

    init(){

        const _this = this;

        _this.initSliders($('.products-content'), {
            slidesToShow: 4,
            slidesToScroll: 2,
        });

        _this.initSliders($('.news-slider'), {
            slidesToShow: 3,
            slidesToScroll: 1,
        });
    }
}

