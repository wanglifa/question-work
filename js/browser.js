/**
 * Created by Administrator on 2017/12/29.
 */
var login = document.getElementById('login');
var clientW = document.documentElement.clientWidth;
var clientH = document.documentElement.clientHeight;
login.style.left = (clientW - 400)/2 + 'px';//document.documentElement.clientWidth -loginWidth/2 + 'px';
login.style.top = (clientH - 300)/2 + 'px';
window.onresize = function () {
    login.style.left = (clientW - 400)/2 + 'px';//document.documentElement.clientWidth -loginWidth/2 + 'px';
    login.style.top = (clientH - 300)/2 + 'px';
}