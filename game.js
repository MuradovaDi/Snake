import Snake from "./snake.js";
import Food from "./apple.js";

class Play extends Phaser.Scene {
    snake;
    food; 
    cursors; 
    textStyle_Key;
    scoreText;
    score = 0;
    bestScore = Number(localStorage.getItem("bestScore") || 0);
      
  
    constructor() {
      super("Play");
    }
  
    preload() {
      this.load.image("snake", "http://127.0.0.1:5500/img/snake.png");
      this.load.image("apple", "http://127.0.0.1:5500/img/apple.png");
      this.load.audio("backgroundMusic", "http://127.0.0.1:5500/img/Sneaky-Snitch.mp3");
    }
  
    create() {   
      const music = this.sound.add('backgroundMusic', {
        mute: false,
        volume: 1,
        rate: 1,
        loop: true
      });
      music.play();
                
      let score;  
      let bestScore;                   
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
      this.speedText = this.add.text(320, 18, "Speed: 0", this.textStyle_Value);

      // Best score.
      this.bestScoreText = this.add.text(550, 18, "Best score: 0", this.textStyle_Value);
      this.bestScoreText.setText(`Best score: ${this.bestScore}`);
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
      localStorage.setItem("score", this.score);
      this.addBestScore();
  
      if (this.food.total % 5 === 0 && this.snake.speed !== 0) {
        this.snake.speed -= 10;
      }
      this.speedText.setText(`Speed: ${this.snake.speed}`);
    }
  
    addBestScore() {
      if (this.score > this.bestScore) {
        localStorage.setItem("bestScore", this.bestScore);
        this.bestScore = this.score;
      }
    }
}

  export default Play;
