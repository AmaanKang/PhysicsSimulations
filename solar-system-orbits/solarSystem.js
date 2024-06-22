document.addEventListener("DOMContentLoaded", function() {
    // The canvas for the solar system
    var canvas = document.createElement("canvas");
    canvas.className = "canvas";
    document.body.appendChild(canvas);
    var ctx = canvas.getContext("2d");

    let planets = [
        new Planet(50, 6, 0.01, "orange"),
        new Planet(70, 8, 0.02, "blue"),
        new Planet(80, 6, 0.03, "red"),
        new Planet(60, 10, 0.04, "green"),
        new Planet(40, 6, 0.05, "maroon"),
        new Planet(70, 8, 0.06, "purple"),
        new Planet(90, 6, 0.07, "brown"),
        new Planet(50, 10, 0.08, "pink"),
        new Planet(60, 6, 0.09, "gray")
    ];

    animate(canvas, ctx, planets);
});

function animate(canvas, ctx, planets){
    requestAnimationFrame(() => animate(canvas, ctx, planets));
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw the sun
    var sun = new Planet(0, 30, 0, "yellow");
    sun.update();
    sun.draw(ctx, canvas.width / 2, canvas.height / 2);

    // Draw the rest of the planets and create orbitting motion
    for(var i = 0; i < planets.length; i++){
        planets[i].update();
        planets[i].draw(ctx, canvas.width / 2, canvas.height / 2);
    }
    
}

// Planet class
class Planet{
    constructor(distance, radius, speed, color){
        this.distance = distance;
        this.radius = radius;
        this.speed = speed;
        // If it is sun, then angle is 0, else the angle is calculated randomly
        if(distance != 0){
            this.angle = Math.random() * 2 * Math.PI;
        }else{
            this.angle = 0;
        }
        this.color = color;
    }

    update(){
        this.angle += this.speed;
    }

    draw(ctx, sunX, sunY){
        var x = sunX + this.distance * Math.cos(this.angle);
        var y = sunY + this.distance * Math.sin(this.angle);
        ctx.beginPath();
        ctx.arc(x, y, this.radius, 0, 2 * Math.PI);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}