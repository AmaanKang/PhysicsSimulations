var canvas;

document.addEventListener("DOMContentLoaded", function() {
    canvas = document.createElement("div");
    canvas.className = "canvas";
    document.body.appendChild(canvas);
});

// Draws the trajectory as per Speed and Angle entered in
function simulateProjectile(){
    // Constants
    var g = 9.81; // Gravity
    var k = 0.1; // Air resistance
    // Initial conditions
    var speed = document.getElementById('speed').value; // Initial speed
    var angle = document.getElementById('angle').value; // Launch angle in degrees
    angle = angle * Math.PI / 180; // Convert to radians

    // Calculate the initial velocities. Velocity is measured by using speed and angle here. If we would have distance and time calculated, it could be distance / Time
    var vx = speed * Math.cos(angle);
    var vy = speed * Math.sin(angle);

    // Initial position
    var x = 0;
    var y = 0;

    // Time step
    var dt = 0.01;

    // Array to store the trajectory
    var trajectory = [];

    // While the projectile is still in the air
    while (y >= 0) {
        // Calculate the new velocities. k is dependent on the distance of the projectile, thus k * vx * dt
        var vx_new = vx - k * vx * dt;
        var vy_new = vy - g * dt - k * vy * dt;

        // Calculate the new positions. Distance is Velocity * time, which will the distance travelled and x/y will be current distance
        var x_new = x + vx * dt;
        var y_new = y + vy * dt;

        // Update the velocities and positions
        vx = vx_new;
        vy = vy_new;
        x = x_new;
        y = y_new;

        // Store the new position
        trajectory.push({ x: x, y: y });

        // If the projectile has hit the ground, break the loop
        if (y < 0) {
            break;
        }
    }

    delay = 0;
    var canvasWidth = canvas.offsetWidth;
    var canvasHeight = canvas.offsetHeight;
    trajectory.forEach(function(point) {
        // Use timeout function to give visual effects
        setTimeout(function() {
            var x = point.x;
            var y = canvasHeight - point.y;
            // Draw the trajectory points only if it lies within the canvas area, if it is outside, do not draw the outside points
            if(x >=0 && y >=0 && x <= canvasWidth && y <= canvasHeight){
                var div = document.createElement("div");
                div.className = "trajectory";
                div.style.position = "absolute";
                div.style.width = "1%";
                div.style.height = "1%";
                div.style.backgroundColor = "green";
                div.style.left = x + "px";
                div.style.top = y + "px";

                canvas.appendChild(div);
            }
        }, delay);
        delay += 1;
    });

}

// Clears all trajectory points within the canvas
function clearAll(){
    var elements = document.querySelectorAll(".trajectory");
    elements.forEach(function(element){
        element.remove();
    });
}