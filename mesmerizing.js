window.requestAnimFrame = (function(callback) {
    return window.requestAnimationFrame ||
           window.webkitRequestAnimationFrame ||
           window.mozRequestAnimationFrame ||
           window.oRequestAnimationFrame ||
           window.msRequestAnimationFrame ||
           function(callback) {
               window.setTimeout(callback, 1000 / 60);
           };
})();

var NUM_BALL = 20;
var BALL_HEIGHT = 50;
var timeStep = 0;
var radius = 4;
var color = '#00B800';
var c, ctx;

function draw() {
    c = document.getElementById('screen');
    if (c.getContext) {
        ctx = c.getContext('2d');
        requestAnimFrame(animateBalls);
    }
}

function animateBalls() {
    ctx.clearRect(0, 0, c.width, c.height);
    for (var i = 0; i < NUM_BALL; i++) {
        ctx.beginPath();
        ctx.arc(8+16*i, getY(i, timeStep), radius, 0, Math.PI*2, true);
        ctx.fillStyle = color;
        ctx.fill();
    }
    timeStep++;
    requestAnimFrame(animateBalls);
}

function getY(i, t) {
    return 15 + BALL_HEIGHT/2 * (1 + Math.sin((timeStep * (i/500 + 0.02)) % 2*Math.PI));
}

window.addEventListener('load', draw);