export default class ProductFilter {
    constructor() {
        this.init();
    }

    switcher(id, $this) {
        const _this = this;
        if(id) {

            const $wrapper = $this.closest('.products-tabs-container');
            const $items = $wrapper.find('.products-content-wrap');
            const $this_tabs = $wrapper.find('.products-tabs__item');

            $this_tabs.removeClass('active');
            $wrapper.find(`.products-tabs__item[data-products="${id}"]`).addClass('active');
            $items.removeClass('active');
            $wrapper.find(`.products-content-wrap[data-product="${id}"]`).addClass('active').find('.products-content').slick('setPosition');
        }
    }

    init(){
        const _this = this;
        $('.products-tabs__item').on('click', function (e) {
            e.preventDefault();
            const id = $(this).attr('data-products');
            _this.switcher(id, $(this));
        });
    };
}