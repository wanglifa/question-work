!function(){
    var view = $('.banner .swiper-container')
    var controller = Controller({
        swiper: null,
        init: function(){
            this.swiper = new Swiper('.banner .swiper-container', {
                pagination: '.banner .swiper-pagination',
                nextButton: '.banner .swiper-button-next',
                prevButton: '.banner .swiper-button-prev',
                paginationClickable: true,
                autoplay: 5000,
                autoplayDisableOnInteraction: false,
                loop:true
            })
        },
        bindEvent: function(){
            this.view.mouseenter(
                function(){
                    this.swiper.stopAutoplay();
                }
            ).mouseleave(
                function(){
                    this.swiper.startAutoplay();
                }
            )
        }
    })
    controller.init.call(controller,view)
}.call()