document.addEventListener("DOMContentLoaded", function(){
    // The canvas for the cradle
    var canvas = document.createElement("div");
    canvas.className = "canvas";
    document.body.appendChild(canvas);

    // Drawing the balls inside the cradle
    var balls = [];
    var colors = ["red", "blue", "green", "yellow", "purple"];
    for (var i = 0; i < document.getElementById('balls').value; i++) {
        // Drawing the cradle inside the canvas
        var cradle = document.createElement("div");
        cradle.className = "cradle";
        cradle.style.position = "absolute";
        cradle.style.backgroundColor = "black";
        cradle.style.width = "1%";
        cradle.style.height = "50%";
        cradle.style.top = "0";
        cradle.style.left = 30 + i * 10 + "%";
        canvas.appendChild(cradle);

        var ball = document.createElement("div");
        ball.className = "ball";
        ball.style.position = "absolute";
        ball.style.backgroundColor = colors[i];
        ball.style.width = "5%";
        ball.style.height = "5%";
        ball.style.borderRadius = "50%";
        ball.style.top = "50%";
        ball.style.left = 28 + i * 10 + "%";

        // Add animation to the first and last balls
        if(i === 0 || i === document.getElementById('balls').value - 1){
            cradle.style.transformOrigin = "top";
            cradle.style.animation = "swing 2s infinite ease-in-out";
        }

        canvas.appendChild(ball);
        balls.push(ball);
    }
});