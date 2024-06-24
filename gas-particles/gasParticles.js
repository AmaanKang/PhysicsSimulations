document.addEventListener("DOMContentLoaded", function(){
    // Canvas
    var canvas = document.createElement("canvas");
    canvas.className = "canvas";
    document.body.appendChild(canvas);
    let ctx = canvas.getContext("2d");

    // Add particles to box
    let particles = [];
    let colors = ["pink", "purple", "blue", "green", "yellow", "orange", "red", "maroon", "brown", "gray"];
    for(let i = 0; i < 100; i++){
        let radius = 5;
        let x = Math.random() * (canvas.width - 2 * radius) + radius;
        let y = Math.random() * (canvas.height - 2 * radius) + radius;
        let dx = (Math.random() - 0.5) * 2;
        let dy = (Math.random() - 0.5) * 2;
        particles.push(new Particle(x, y, radius, dx, dy, colors[Math.floor(Math.random() * colors.length)]));
    }

    // Animate the particles moving in the box
    animate(ctx, canvas, particles);
    
});

// Animate the particles moving inside the box
function animate(ctx, canvas, particles){
    // Request animation frame to add the motion to animations
    requestAnimationFrame(() => animate(ctx, canvas, particles));
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    for(let particle of particles){
        particle.update(canvas);
        particle.draw(ctx);
    }
}

class Particle{
    constructor(x, y, radius, dx, dy, color){
        this.x = x;
        this.y = y;
        this.radius = radius;
        this.dx = dx; // Velocity in x direction
        this.dy = dy; // Velocity in y direction
        this.color = color;
    }

    // Updates the particle position
    update(canvas){
        // If the particle hits the edges, move it in opposite direction
        if(this.x + this.radius > canvas.width || this.x - this.radius < 0){
            this.dx = -this.dx;
        }
        if(this.y + this.radius > canvas.height || this.y - this.radius < 0){
            this.dy = -this.dy;
        }
        // Add up the velocity to the position of the particles, this gives an impression of the particles moving. The last instance of the particle is 
        // cleared and the new instance is based on the below positions        
        this.x += this.dx;
        this.y += this.dy;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = this.color;
        ctx.fill();
    }
}

