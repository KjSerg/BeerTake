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

                const options = arg;

                if($left.length > 0 && $right.length > 0) {
                    options.prevArrow = $left;
                    options.nextArrow = $right;
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
            responsive: [
                {
                    breakpoint: 701,
                    settings: {
                        slidesToShow: 3,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 600,
                    settings: {
                        slidesToShow: 2,
                    }
                },
                {
                    breakpoint: 441,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });

        _this.initSliders($('.news-slider'), {
            slidesToShow: 3,
            slidesToScroll: 1,
            responsive: [
                {
                    breakpoint: 701,
                    settings: {
                        slidesToShow: 2,
                        slidesToScroll: 1,
                    }
                },
                {
                    breakpoint: 501,
                    settings: {
                        slidesToShow: 1,
                    }
                },
            ]
        });
    }
}

