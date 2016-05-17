
var ball;


function setup() {

  var canvas = createCanvas(400, 400);  // setting the canvas as a variable is needed for DOM manipulation
  canvas.parent('canvas-container');  // setting canvas parent container via css class
  background(77);

  ball = new Ball();

  console.log(ball);
}

function draw() {
  background(77);
  ball.display();
  ball.update();
}


function Ball() {
  this.size = 50;
  this.radius = this.size/2
  this.location = new p5.Vector(width/2, height/2);
  this.speed = new p5.Vector(0.9, 1.3);
  console.log(this);

  this.update = function() {
    // conditionals to bounce ball off walls
    if (this.location.x + this.radius > width) {
      this.speed.x = -1 * this.speed.x;
    }
    if (this.location.y + this.radius > height) {
      this.speed.y = -1 * this.speed.y;
    }
    if (this.location.x - this.radius < 0) {
      this.speed.x = -1 * this.speed.x;
    }
    if (this.location.y - this.radius < 0) {
      this.speed.y = -1 * this.speed.y;
    }

    this.location.x += this.speed.x;
    this.location.y += this.speed.y;
  }

  this.display = function() {
    fill(255);
    ellipse(this.location.x, this.location.y, this.size, this.size);
  }

}
