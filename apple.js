class Food {
    constructor(scene) {
      this.scene = scene;
      this.food = this.scene.physics.add.group({
        key: 'apple',
        setXY: {
          x: 30,
          y: 30,
        }
      });
      
      this.food.getChildren()[0].setOrigin(0);
    }
  
    createFood() {
      const getConfig = this.scene.sys.game.config;
      let x = Phaser.Math.Between(30, getConfig.width - 30);
      let y = Phaser.Math.Between(30, getConfig.height - 30);
      
      // Destroy the previous element
      this.food.getChildren()[0].destroy();
  
      // Create the food in a random part of the map
      this.food.create(x, y, 'apple');
      this.food.getChildren()[0].setOrigin(0);
    }
  }
  
  export default Food;