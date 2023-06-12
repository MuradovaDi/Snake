import Menu from "./menu.js";
import Play from "./game.js";
/*import GameOver from "./game-over.js";*/

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  parent: "app",
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 }
    }
  },
  scene: [Menu, Play]
};

const game = new Phaser.Game (config);

