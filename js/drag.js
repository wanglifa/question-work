function drag(tag) {
    tag.onmousedown = function (e) {
        var _this = this.parentNode;
        var diffX = e.clientX - _this.offsetLeft;
        var diffY = e.clientY - _this.offsetTop;
        document.onmousemove = function (ev) {
            var left = ev.clientX - diffX;
            var top = ev.clientY - diffY;
            var clinew = document.documentElement.clientWidth;
            var clineh = document.documentElement.clientHeight;
            _this.style.left = left + 'px';
            _this.style.top = top + 'px';
            if(left < 0){
                _this.style.left = 0;
            }else if(left > clinew - _this.offsetWidth){
                _this.style.left = (clinew - _this.offsetWidth)+ 'px';
            }
            if(top<0){
                _this.style.top = 0;
            }else if(top> clineh - _this.offsetHeight){
                _this.style.top = (clineh - _this.offsetHeight)+ 'px';
            }
        }
        document.onmouseup = function (ev) {
            this.onmousemove = null;
        }
    }
}
