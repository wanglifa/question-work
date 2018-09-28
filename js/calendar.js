!function () {
    var view = $('.data-day .current')
    var controller = Controller({
        $int: null,
        init: function(view){
            this.$int = $('.current .int')
        },
        bindEvent: function(){
            var _this = this;
            this.view.mouseenter(
                function(){
                    //$(this).append('<div class="dis"><strong class="text"></strong></div>')
                    /*if($(this).text() == 4){
                        $(".dis").css({"left":0});
                        $(".text").text('【考试】').after('雅思考试');
                    }else if($(this).text() == 24){
                        $(".dis").css({"right":0});
                        $(".text").text('【讲座】').after('招生说明会');
                    }*/
                    $(this).append('<div class="int"><strong></strong></div>')
                    if($(this).text() === '4'){
                        $(this).find('.int').css({"left":0});
                    }else if($(this).text() === '24'){
                        $(this).find('.int').css({"right":0});
                    }
                    var arr=[];
                    arr[0]='【考试】'+' '+'雅思考试';
                    arr[1]='【说明会】'+' '+'招生说明会';
                    arr[2]='【考试】'+' '+'啥子考试';
                    for(var i =0;i<arr.length;i++){
                        _this.view.eq(i).find("strong").text(arr[i]);
                    }
                }
            ).mouseleave(
                function(){
                    $(this).find('.int').remove()
                }
            )
        }
    })
    controller.init.call(controller,view)
}.call()