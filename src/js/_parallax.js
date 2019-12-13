$.fn.parallax = function() {
    const $elements = $(this);
    $elements.each(function () {
        const $this = $(this);
        let i = $this.offset().top;
        $(window).scroll(function () {
            const $window = $(window);
            let position = ($window.scrollTop() - i) / 10;
            $this.css('transform', `translateY(${position}px)`);

        });
    });
};

$('.banner-parallax img, .products-decor img, .news-decoration img').parallax();