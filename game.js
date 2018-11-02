var config = {
    type:Phaser.AUTO,
    width:640,
    height:480,
    physics: {
        default:'arcade',
        arcade: {
            gravity: {y:200}
        }
    },
    scene: [ scene ]
};

var player;

var platforms;

var game = new Phaser.Game(config);