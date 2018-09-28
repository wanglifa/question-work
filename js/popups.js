!function () {
    function ClickEvent(tagA, tagBox) {
        $(tagA).click(function () {
            $(tagBox).css({'display':'block'})
        })
    }
    ClickEvent('.line-list a.signUp','.signUp-box')
    ClickEvent('.line-list a.signIn','.signIn-box')


    $('.close').click(
        function () {
            $('.opc-bg').css({'display':'none'})
        }
    )
    var control =$('.inpBox .control');
    control.focus(
        function () {
            $('.btn .left').addClass('bgBlueS');
        }
    ).blur(
        function () {
            if (control.val() == ''){
                $('.btn .left').removeClass('bgBlueS');
            }
        }
    )
}.call()