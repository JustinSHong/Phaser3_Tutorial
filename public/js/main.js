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
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 300 },
            debug: false
        }
    },
    scene: {
        preload: preload,
        create: create,
        update: udpate
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.image("sky", "../../assets/sky.png");
    this.load.image("platform", "../../assets/platform.png");
    this.load.image("star", "../../assets/star.png");
    this.load.image("bomb", "../../assets/bomb.png");
    this.load.spritesheet("dude", "../../assets/dude.png", {
        frameWidth: 32,
        frameHeight: 48
    });
}

let platforms;

function create() {
    this.add.image(400, 300, "sky");
    platforms = this.physics.add.staticGroup();
    platforms
        .create(400, 568, "platform")
        .setScale(2)
        .refreshBody();
    platforms.create(600, 400, "platform");
    platforms.create(50, 250, "platform");
    platforms.create(750, 220, "platform");
}

function udpate() {}
