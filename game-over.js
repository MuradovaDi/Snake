import Play from "./game.js";

class GameOver extends Phaser.Scene {
  finalScore = Number(localStorage.getItem("score") || 0);

  constructor() {
    super("GameOver");
  }

  create() {
    this.add.text(200, 100, "GAME OVER", {
      fontSize: 75,
      color: "#900603"
    });

    this.add.text(235, 250, "LAST SCORE", {
      fontSize: 25,
      color: "#fff",
      align: "center"
    });

    this.add.text(455, 250, `${this.finalScore}`, {
      fontSize: 25,
      color: "#fff",
      align: "center"
    });

    this.add.text(210, 350, "CLICK TO START AGAIN", {
      fontSize: 32,
      color: "#fff"
    });

    this.input.on("pointerdown", (pointer) => {
      this.scene.start("Menu");
    });

    //localStorage.setItem("score", "0");
  }
}

export default GameOver;
