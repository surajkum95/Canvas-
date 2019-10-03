import {Util} from './util';
const canvas = document.querySelector('#canvas-id');
canvas.width = innerWidth;
canvas.height = innerHeight;

const c = canvas.getContext('2d');
const util = new Util();
const Max_Radius = 40;
const gravity = 1;
const friction = 0.99;
// const Min_Radius = 2;

window.addEventListener('resize', (event) => {
    canvas.width = innerWidth;
    canvas.height = innerHeight;

    init();
});

const mouse = {
    x: undefined,
    y: undefined
}

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
});

function Ball(x, y, dx, dy, radius, color){
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.Min_Radius = radius;
    this.color = color;
}
Ball.prototype.draw = function(){
    c.beginPath();
    c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
    c.fillStyle = this.color;
    c.fill();
    c.stroke();
    c.closePath();
}
Ball.prototype.update = function(){
    // if(this.x + this.radius > innerWidth || this.x - this.radius < 0){
    //     this.dx = -this.dx;
    // }
    // if(this.y + this.radius > innerHeight || this.y - this.radius < 0){
    //     this.dy = -this.dy;
    // }
    // this.x += this.dx;
    // this.y += this.dy;

    // if(mouse.x - this.x < 50 && mouse.x - this.x > -50 && mouse.y - this.y < 50 && mouse.y - this.y > -50){
    //     if(this.radius < Max_Radius){
    //         this.radius += 1;
    //     }        
    // } else if(this.radius > this.Min_Radius){
    //     this.radius -= 1;
    // }

    if(this.y + this.radius + this.dy > canvas.height){
        this.dy = -this.dy * friction;
    }
    else{
        this.dy += gravity;
        console.log(this.dy);
    }
    if(this.x + this.radius + this.dx > canvas.width || this.x - this.radius  <= 0){
        this.dx = -this.dx;
    }
    this.x += this.dx;
    this.y += this.dy;
    

    this.draw();
}

let ballArray = [];
 let colors = util.getColors();

function init(){
    ballArray = [];
    for(let i=0; i<100; i++){
        let x = Math.random() * canvas.width/2;
        let y = Math.random() * canvas.height/2;
        let dx = (Math.random() - 0.5) * 3;
        let dy = (Math.random() - 0.5) * 3;
        let radius = Math.random() * 30;
        let color = util.getRandomColor(colors);
        let ball = new Ball(x, y, dx, dy, 30, color);
        ballArray.push(ball);
    }
}

function animate(){
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);
    //c.fillText('HTML CANVAS BOILERPLATE', mouse.x, mouse.y)
    ballArray.forEach((ball) =>{
        ball.update();
    });

}

init();
animate();