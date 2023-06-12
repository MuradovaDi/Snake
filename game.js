import Snake from "./snake.js";
import Food from "./apple.js";

class Play extends Phaser.Scene {
    snake;
    food;
    speed; 
    cursors; 
    textStyle_Key;
    scoreText;
    score;
  
    constructor() {
      super("Play");
    }
  
    preload() {
      this.load.image("snake", "http://127.0.0.1:5500/img/snake.png");
      this.load.image("apple", "http://127.0.0.1:5500/img/apple.png");
    }
  
    create() {                 
      let squareSize = 15;                 
      let score = 1;                     
      this.snake = new Snake(this);
      this.food = new Food(this);                       
  
      // Cursors
      this.cursors = this.input.keyboard.createCursorKeys();
  
      // Collision head with food
      this.physics.add.collider(this.snake.body[0], this.food.food, () => this.snakeEat());

      // Add Text to top of game.
      this.textStyle_Key = { font: "bold 18px sans-serif", fill: "#46c0f9", align: "center" };

      // Score.
      this.scoreText = this.add.text(90, 18, "Score: 0", this.textStyle_Value);

      // Speed.
      this.speedText = this.add.text(558, 18, "Speed: 0", this.textStyle_Value);
    }
  
    update(time) {
      this.snake.update(time);

      this.input.keyboard.on('keydown-RIGHT', () => {
        this.snake.changeMov('right');
      })
  
      this.input.keyboard.on('keydown-LEFT', () => {
        this.snake.changeMov('left');
      })
  
      this.input.keyboard.on('keydown-UP', () => {
        this.snake.changeMov('up');
      })
  
      this.input.keyboard.on('keydown-DOWN', () => {
        this.snake.changeMov('down');
      })
    }


    snakeEat(){
      this.food.createFood();
      this.snake.feed();
      this.addPoint();
    }

    addPoint() {
      this.score++;
      this.scoreText.setText(`Score: ${this.score}`);
      this.snake.speed +=3;
      this.speedText.setText(`Speed: ${this.snake.speed}`);
    }
}

  export default Play;
  

  

