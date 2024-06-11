var pendulum;

document.addEventListener("DOMContentLoaded", function(){
    // The canvas for the pendulum
    var canvas = document.createElement("div");
    canvas.className = "canvas";
    document.body.appendChild(canvas);

    // Drawing pendulum inside the canvas box
    pendulum = document.createElement("div");
    pendulum.className = "pendulum";
    pendulum.style.position = "absolute";
    pendulum.style.backgroundColor = "black";
    pendulum.style.width = "0.8%";
    pendulum.style.height = document.getElementById('length').value + "%";
    pendulum.style.top = "0";
    pendulum.style.left = "50%";

    // TransformOrigin CSS property can be used to set up a part of the pendulum to be fixed at one spot. If TransformOrigin is set to top, the top of the pendulum is fixed and the rest of the body will move. This means that when the pendulum is rotated, it will rotate around the top.
    pendulum.style.transformOrigin = "top";

    // Transition CSS property helps in setting up the pendulum's fixed motion. This means that when the transform property is changed, instead of the change happening instantly, it will smoothly transition over 1 second.
    pendulum.style.transition = "transform 1s";

    // Drawing ball at bottom of the pendulum
    var ball = document.createElement("div");
    ball.className = "ball";
    ball.style.position = "absolute";
    ball.style.backgroundColor = "black";
    ball.style.width = "300%";
    ball.style.height = "7%";
    ball.style.borderRadius = "50%";
    ball.style.top = "98%";
    ball.style.transform = "translateX(-30%)";
    pendulum.appendChild(ball);

    canvas.appendChild(pendulum);
});

function startSwing(){
    pendulum.style.height = document.getElementById('length').value + "%";
    var angle = document.getElementById("angle").value;
    var interval = 1000;
    /**
     * I was able to implement the two swings of the pendulum by using angle and -angle rotations. But then I had to look into building multiple swings up 
     * until the pendulum comes to a stopping point. I tried muliple setTimeout functions one after the other but since they all had same multi seconds value,
     * they ran at once and the simulation could not be built. Then tried setInterval but this function would swing the bob only once. Hence, I used a 
     * combination of setInterval and setTimeout which would lead perfect flow of the swings. The clearInterval can be used to stop the swinging.
     */
    var swingInterval = setInterval(function() {
        // Transform property helps in setting the rotation angle of the pendulum. This also rotates it based transformOrigin and transition properties setup in there.
        pendulum.style.transform = `rotate(${angle}deg)`;
        setTimeout(function() {
            pendulum.style.transform = `rotate(${-angle}deg)`;
        }, interval/2);
        angle -= 10;
        if (angle <= 0) {
            clearInterval(swingInterval);
        }
    }, interval);
}
