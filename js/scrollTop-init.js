!function () {
    let view = $('.top-wrapper')
    let controller = Controller({
        $nav_dis: null,
        init: function () {
            this.$nav_dis = $('.nav-distance')
        },
        bindEvent: function () {
            $(window).on('scroll',()=>{
                if($(window).scrollTop()>20){
                    this.view.addClass('none')
                    this.$nav_dis.removeClass('none')
                }else{
                    this.view.removeClass('none')
                    this.$nav_dis.addClass('none')
                }
            })
        }
    })
    controller.init.call(controller,view)
}.call()