var canvas;
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
    var balls = [];
    for (var i = 0; i < document.getElementById('balls').value; i++) {
        // Drawing the cradle inside the canvas
        var cradle = document.createElement("div");
        cradle.className = "cradle";
        cradle.style.position = "absolute";
        cradle.style.backgroundColor = "black";
        cradle.style.width = "1%";
        cradle.style.height = "50%";
        cradle.style.top = "0";
        cradle.style.left = 20 + i * 10 + "%";
        cradle.style.transformOrigin = "top";
        cradle.style.transition = "transform 1s";
        canvas.appendChild(cradle);
        
        // Drawing balls
        var ball = document.createElement("div");
        ball.className = "ball";
        ball.style.position = "absolute";
        ball.style.backgroundColor = "black";
        ball.style.width = "5%";
        ball.style.height = "5%";
        ball.style.borderRadius = "50%";
        ball.style.top = "50%";
        ball.style.left = 18 + i * 10 + "%";
        canvas.appendChild(ball);
        balls.push(ball);
        
    }

    // Start swinging the cradles
    var cradles = document.querySelectorAll('.cradle');
    cradles.forEach(c => {
        var angle = 30;
        var interval = 1000;
        var swingInterval = setInterval(function() {
            c.style.transform = `rotate(${angle}deg)`;
            setTimeout(function() {
                c.style.transform = `rotate(${-angle}deg)`;
            }, interval/2);
            angle -= 10;
            
            if (angle <= 0) {
                clearInterval(swingInterval);
            }
        }, interval);
    });
    
}