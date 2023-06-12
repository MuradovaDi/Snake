class Snake {

    constructor(scene) {
      this.scene = scene;
      this.body = [];
      
      // Move the snake to the right
      this.oldDirection = 'right';
      this.direction;
      this.timer = 0;
      this.speed = 1;
  
      // Creating the body of the snake
      for (let i = 0; i < 3; i++) {
        this.body.push(
          this.scene.physics.add.image(150 + i * 15, 150, 'snake')
              .setOrigin(0)
        );
      }
  
      // Generate Collisions
      for (let i = 1; i < 10; i++) {
        this.scene.physics.add.collider(this.body[0], this.body[i], () => this.crash())
      }
    }
  
    changeMov(direction) {
      if (this.oldDirection != direction) {
        this.direction = direction;
      }
    }
  
    feed() {
      const obj = this.body[this.body.length - 1];
      const newObject = this.scene.physics.add.image(obj.x, obj.y, 'snake').setOrigin(0);
      this.body.push(newObject);
      this.scene.physics.add.collider(this.body[0], newObject, () => this.crash())
    }
  
    crash() {
      /*this.scene.scene.start('GameOver');*/
    }
  
    update(time) {
      if(time > this.timer) {
        for (let i = this.body.length - 1; i > 0; i--) {
          this.body[i].x = this.body[i - 1].x;
          this.body[i].y = this.body[i - 1].y;
  
          // Allows the snake if it ends in right to appear in left
          this.body[this.body.length - 1 - i].x = Phaser.Math.Wrap(this.body[this.body.length - 1 - i].x,
              0,
              this.scene.sys.game.config.width);
          this.body[this.body.length - 1 - i].y = Phaser.Math.Wrap(this.body[this.body.length - 1 - i].y,
              20,
              this.scene.sys.game.config.height);
        }
        // Depending on the direction it will add or subtract pixels on any axis
        switch(this.direction) {
          case 'right':
            this.body[0].x += 10;
            this.oldDirection = 'left';
            break;
          case 'left':
            this.body[0].x -= 10;
            this.oldDirection = 'right';
            break;
          case 'up':
            this.body[0].y -= 10;
            this.oldDirection = 'down';
            break;
          case 'down':
            this.body[0].y += 10;
            this.oldDirection = 'up';
        }
        this.timer = time + 150;
      }
    }
  }
  
  export default Snake;