class Menu extends Phaser.Scene {
    constructor() {
      super("Menu");
    }
  
    preload() {
      this.load.image("startSnake", "http://127.0.0.1:5500/img/snake_start.png");
    }

    create() {
      this.add.image(350, 300, "startSnake");

      this.add.text(270, 200, "SNAKE", {
        fontSize: 75,
        color: "#028A0F"
      });

      this.add.text(250, 350, "CLICK TO START", {
        fontSize: 32,
        color: "#fff"
      });
  
      this.input.on("pointerdown", (pointer) => {
        this.scene.start("Play");
      });
    }
}

export default Menu;