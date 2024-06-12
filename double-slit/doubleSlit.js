document.addEventListener("DOMContentLoaded", function(){
    var canvasE = document.createElement("canvas");
    canvasE.className = "canvasE";
    canvasE.width = window.innerWidth;
    canvasE.height = window.innerHeight;
    document.body.appendChild(canvasE);
    var ctx = canvasE.getContext("2d");

    // Draw two slits on the canvas
    drawSlits(ctx, canvasE.width, canvasE.height);

    // Create a wave source that emits particles
    var waveSource = new WaveSource();
    var particle = waveSource.emitParticle;
    var moveParticle = particle.move;
    var drawParticle = particle.draw;
});

// Draw two slits on the canvas
function drawSlits(ctx, canvasWidth, canvasHeight){
    var slitWidth = 10;
    var slitHeight = canvasHeight/3; // There will be 3 equal length rectangles, out of which 2 will be slits and the 3rd will be spacing between them
    var slitSpacing = canvasHeight/3;

    ctx.fillStyle = "black";
    ctx.fillRect(canvasWidth/2-slitWidth/2, 0, slitWidth, slitHeight); // (x,y,width,height)
    ctx.fillRect(canvasWidth/2-slitWidth/2, slitHeight+slitSpacing, slitWidth, slitHeight); // (x,y,width,height)
}

function WaveSource(){
    this.particles = [];

    // Create particles and emit these from source
    this.emitParticle = function(){
        var particle = new Particle();
        this.particles.push(particle);
        return particle;
    }
}

function Particle(){
    this.x = 0;
    this.y = window.innerHeight / 2; // Start from the middle of the screen

    this.speed = 2; // Speed of the particle
    this.radius = 5; // Radius of the particle

    this.move = function() {
        this.x += this.speed; // Move the particle to the right
    };

    this.draw = function(ctx) {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        ctx.fillStyle = "black";
        ctx.fill();
    };
}