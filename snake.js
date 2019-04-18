const canvas = document.getElementById('canvas');

const context = canvas.getContext('2d');
let box = 32;

let snake = [];
snake[0] = { x: 2*box, y: 1*box};
snake[1] = { x: 1*box, y: 1*box};

let food = {x: Math.floor(Math.random()*17+1)*box, y: Math.floor(Math.random()*15+3)*box};

let score = 0;


function draw() {
  context.drawImage(background,0,0);
  for(let i = 0; i < snake.length; i++){
    context.fillStyle = ( i == 0 )? "green" : "white";
    context.fillRect(snake[i].x, snake[i].y, box, box);
  }
  context.drawImage(food, food.x, food.y);
  context.fillStyle = "white";
  context.font = "45px Sans Serif";
  context.fillText(score, 2*box, 1.6*box);
}
let game = setInterval(draw, 100);
