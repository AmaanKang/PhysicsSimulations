document.addEventListener("DOMContentLoaded", function(){
    var canvasE = document.createElement("canvas");
    canvasE.className = "canvasE";
    canvasE.width = window.innerWidth;
    canvasE.height = window.innerHeight;
    document.body.appendChild(canvasE);
    var ctx = canvasE.getContext("2d");

    // Draw two slits on the canvas
    drawSlits(ctx, canvasE.width, canvasE.height);

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
    this.y = 0;

    this.move = function(){

    }
    this.draw = function(ctx){

    }
}