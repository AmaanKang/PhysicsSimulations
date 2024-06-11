var canvas;
var cradles;

document.addEventListener("DOMContentLoaded", function(){
    // The canvas for the cradle
    canvas = document.createElement("div");
    canvas.className = "canvas";
    document.body.appendChild(canvas);
});

// This starts the simulation by swinging the cradles
function startSimulation(){
    // Clear everything on the canvas first
    canvas.innerHTML = "";

    // Drawing the cradles inside canvas
    for (var i = 0; i < document.getElementById('balls').value; i++) {
        // Drawing the cradle inside the canvas
        var cradle = document.createElement("div");
        cradle.className = "cradle";
        cradle.style.position = "absolute";
        cradle.style.backgroundColor = "black";
        cradle.style.width = "1%";
        cradle.style.height = "50%";
        cradle.style.top = "0";
        cradle.style.left = 20 + i * 6 + "%";
        cradle.style.transformOrigin = "top";
        cradle.style.transition = "transform 1s";

        // Drawing balls
        var ball = document.createElement("div");
        ball.className = "ball";
        ball.style.position = "absolute";
        ball.style.backgroundColor = "black";
        ball.style.width = "200%";
        ball.style.height = "7%";
        ball.style.borderRadius = "50%";
        ball.style.top = "98%";
        ball.style.left = "10%";
        ball.style.transform = "translateX(-25%)";
        cradle.appendChild(ball);

        canvas.appendChild(cradle);
    }

    // Start swinging the cradle
    cradles = document.querySelectorAll('.cradle');
    startNextCradle(0);
}

// This moves the next cradle when the first one touches it
function startNextCradle(index) {
    var angle = index == 0 ? 30 : 20;
    var interval = 1000;
    var swingInterval = setInterval(function() {
        // In case of first cradle, it will go to left first and then right. In case of the next cradles, it will go to right first and then left
        cradles[index].style.transform = index == 0 ? `rotate(${angle}deg)` : `rotate(${-angle}deg)`;
        if(index + 1 < document.getElementById('balls').value){
            startNextCradle(index + 1);
        }
        setTimeout(function() {
            cradles[index].style.transform = index == 0 ? `rotate(${-angle}deg)` : `rotate(${angle}deg)`;
        }, interval/2);
        angle -= 10;
        if (angle <= 0) {
            clearInterval(swingInterval);
        }
    }, interval);
}