var canvas = document.querySelector('canvas');
var ctx = canvas.getContext('2d');
var birds = [];
var sprite = new Image();
sprite.src = "https://i.postimg.cc/wjxz370m/bird-black-3.png";

canvas.width = window.innerWidth;
canvas.height = window.innerHeight / 3;

window.addEventListener('resize', function(){
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight / 3;
}, false);

function Bird(img, px, py, dx){
    this.ex = 0;
    this.ey = 0;
    this.width = 42;
    this.height = 32;
    this.px = px;
    this.py = py;
    this.dx = dx;
    this.img = img;
    this.count = 0;
    
    
    this.draw = function(){
        ctx.drawImage(this.img, this.ex, this.ey, this.width, this.height, this.px, this.py, this.width, this.height);
    }
    
    this.update = function (){
        this.count++;
        if(this.count >= 66){
            this.count = 0;
        }
        this.ex = Math.floor(this.count / 3) * this.width;
        
        if(this.px + this.width < 0){
            this.px = innerWidth + this.width;
        }
        
        this.px -= this.dx;
        
        this.draw();
    }
}

function init(){
    birds = [];
    for(var i = 0; i < 10; i++){
        var px = innerWidth - 40;
        var py = Math.random() * innerHeight/4;
        var dx = (Math.random()*2 + 1);
        
        birds.push(new Bird(sprite, px, py, dx));
    }
}

function animate(){
    requestAnimationFrame(animate);
    
    ctx.clearRect(0, 0, innerWidth, innerHeight);
    for(var i in birds){
        var bird = birds[i];
        bird.update();
    }
    
}
init();
animate();