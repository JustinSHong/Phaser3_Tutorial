import Phaser from "phaser";

// Enable LiveReload
document.write(
    '<script src="http://' +
        (location.host || "localhost").split(":")[0] +
        ':35729/livereload.js?snipver=1"></' +
        "script>"
);

const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    scene: {
        preload: preload,
        create: create,
        update: udpate
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image("sky", "../../assets/sky.png");
    this.load.image("ground", "../../assets/ground.png");
    this.load.image("star", "../../assets/star.png");
    this.load.image("bomb", "../../assets/bomb.png");
    this.load.spritesheet("dude", "../../assets/dude.png", {
        frameWidth: 32,
        frameHeight: 48
    });
}

function create() {}

function udpate() {}
