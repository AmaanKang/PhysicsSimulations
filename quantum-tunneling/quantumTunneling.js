document.addEventListener("DOMContentLoaded", function(){
    // Canvas
    var canvas = document.createElement("canvas");
    canvas.className = "canvas";
    document.body.appendChild(canvas);
    let ctx = canvas.getContext("2d");

    // Parameters
    let amplitude = 50;
    let wavelength = 20;
    let speed = 2;
    let barrierX = canvas.width / 2;
    let barrierWidth = 10;
    let barrierHeight = 80;

    // Animation
    function animate() {
        requestAnimationFrame(animate);
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        // Draw wave
        for (let x = 0; x < canvas.width; x++) {
            let y = canvas.height / 2 + amplitude * Math.sin((x - speed * Date.now() / 1000) * 2 * Math.PI / wavelength);
            ctx.fillRect(x, y, 1, 1);
        }

        // Draw barrier
        ctx.fillRect(barrierX, canvas.height / 2 - barrierHeight / 2, barrierWidth, barrierHeight);
    }

    animate();

});