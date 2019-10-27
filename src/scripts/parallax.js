var parallax = (function () {

    var bg = document.querySelector('.first');
    var user = document.querySelector('.first__user-about');
    var bg2 = document.querySelector('.aboutme__bg');

    return {
        move: function (block, windowScroll, strafeAmount) {
            var strafe = windowScroll / -strafeAmount + "%";
            var transformString = 'translate3d(0,' + strafe + ', 0)';
            var style = block.style;
            style.transform = transformString;
            style.webkitTransform = transformString;
        },
        init: function (wScroll) {
            this.move(bg, wScroll, 45);
            this.move(user, wScroll, 20);
            this.move(bg2, wScroll, 15);
        }
    }
}())

window.onscroll = function () {
    var wScroll = window.pageYOffset;
    parallax.init(wScroll);

}