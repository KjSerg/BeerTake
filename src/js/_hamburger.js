

export const hamburger = () => {

    const $nav = $('.header-nav');

    $('.hamburger').on('click', function (e) {
        e.preventDefault();

        const $ths = $(this);

        const is_show = $ths.hasClass('show');

        if(is_show) {
            $ths.removeClass('show');
            $nav.removeClass('show');
        }else {
            $ths.addClass('show');
            $nav.addClass('show');
        }
    });


};
