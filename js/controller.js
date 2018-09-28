!function () {
    window.Controller=function (options) {
        var init = options.init;
        var object = {
            view: null,
            init: function (view) {
                this.view = view;
                init.call(this)
                this.bindEvent.call(this)
            }
        }
        for(var key in options){
            if(key !== 'init'){
                object[key] = options[key];
            }
        }
        return object;
    }
}.call()