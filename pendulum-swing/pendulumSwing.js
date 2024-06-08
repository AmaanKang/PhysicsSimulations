var pendulum;

document.addEventListener("DOMContentLoaded", function(){
    // The canvas for the pendulum
    document.body.style.height = "100vh";
    var canvas = document.createElement("div");
    canvas.className = "canvas";
    canvas.style.position = "relative";
    canvas.style.backgroundColor = "lightblue";
    canvas.style.width = "100%";
    canvas.style.height = "80%";
    canvas.style.border = "1px solid black";
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

    // Setting up the properties that help the pendulum to swing
    pendulum.style.transformOrigin = "top";
    pendulum.style.transition = "transform 1s";

    canvas.appendChild(pendulum);
});

function startSwing(){
    pendulum.style.height = document.getElementById('length').value + "%";
    var angle = document.getElementById("angle").value;
    var interval = 1000;
    var swingInterval = setInterval(function() {
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
