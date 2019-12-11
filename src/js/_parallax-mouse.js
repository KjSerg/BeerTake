
$.fn.parallax = function() {
    const $elements = $(this);
    $elements.each(function (index) {
        const $this = $(this);
        let i = (index + 1) * 2;
        $(window).scroll(function () {
            const $window = $(window);
            let scrollTop = $window.scrollTop() / i;
            $this.css('transform', `translateY(${scrollTop}px)`);
        });
    });
};

$('.banner-parallax img').parallax();