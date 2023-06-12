class GameOver extends Phaser.Scene {
    constructor() {
      super("End");
    }
  
    create() {
      this.add.text(270, 200, "GAME OVER", {
        fontSize: 75,
        color: "#900603"
      });

      this.add.text(235, 350, "LAST SCORE", { 
        font: "bold 16px sans-serif", 
        color: "#46c0f9", 
        align: "center"
      });

      this.add.text(350, 348, score.toString(), { 
        font: "bold 20px sans-serif", 
        color: "#fff", 
        align: "center" 
      });


      this.add.text(250, 350, "CLICK TO START AGAIN", {
        fontSize: 32,
        color: "#fff"
      });
  
      this.input.on("pointerdown", (pointer) => {
        this.scene.start("Menu");
      });
    }
  }

  export default GameOver;