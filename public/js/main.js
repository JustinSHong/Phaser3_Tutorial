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
        // use Arcade Physics system
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

// scene function - phaser loads anything defined here
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
let player;
let cursors;

// draws game objects in the order in which they are called
// game objects are added to the Scenes display list
// Scene extends infinitely in all directions
function create() {
    // display an image to the game screen
    // default - game objects positioned on their center
    this.add.image(400, 300, "sky");
    // arcade physics uses two types of physics bodies
    // static bodies only have a position and size, it never moves
    // dynamic bodies move via velociy, acceleration and can collide with other bodies
    // a group is a collection of similar objects that are controlled as a unit
    // you can check for collisions between Groups and other objects
    // Groups can make objects with create - create physics enabled children
    platforms = this.physics.add.staticGroup();
    platforms
        .create(400, 568, "platform")
        .setScale(2) // change size of object
        .refreshBody(); // tell world about the change
    platforms.create(600, 400, "platform");
    platforms.create(50, 250, "platform");
    platforms.create(750, 220, "platform");

    // creating player sprite - dynamic body
    player = this.physics.add.sprite(100, 450, "dude");

    player.setBounce(0.2);
    player.setCollideWorldBounds(true);

    // Animation Manager is a global system - animations created can be shared with all objects
    // you can define an animation once and apply to many objects
    // creating animations player sprite can use
    // 4 frames running left, 4 frames running right, 1 frame facing camera
    this.anims.create({
        key: "left",
        frames: this.anims.generateFrameNumbers("dude", { start: 0, end: 3 }),
        frameRate: 10,
        repeat: -1 // loop
    });

    this.anims.create({
        key: "turn",
        frames: [{ key: "dude", frame: 4 }],
        frameRate: 20
    });

    this.anims.create({
        key: "right",
        frames: this.anims.generateFrameNumbers("dude", { start: 5, end: 8 }),
        frameRate: 10,
        repeat: -1
    });

    // populate cursors object with up, down, left, right instances of Key objects
    cursors = this.input.keyboard.createCursorKeys();

    // check for collisions between groups/game objects
    this.physics.add.collider(player, platforms);
}

function udpate() {}
