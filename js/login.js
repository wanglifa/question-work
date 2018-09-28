!function () {
    var view = $('.login');
    var controller = Controller({
        clientW: null,
        clientH: null,
        $offWi: null,
        $offHi: null,
        left: null,
        marginT: null,
        init: function (view) {
            this.$offWi = this.view.width();
            this.$offHi = this.view.height();
            this.getStyle()
        },
        bindEvent: function () {
            var _this = this;
            $(window).resize(function () {
                _this.getStyle()
            })
        },
        getStyle: function () {
            this.clientW = document.documentElement.clientWidth;
            this.clientH = document.documentElement.clientHeight;
            this.left = (this.clientW-this.$offWi)/2+ 'px';
            this.marginT = (this.clientH-this.$offHi)/2+ 'px';
            this.view.css({'left':this.left,'top':this.marginT})
        }

    })
    controller.init.call(controller,view)
}.call()