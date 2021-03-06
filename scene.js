class scene extends Phaser.Scene {

    constructor(){
        super({key:"scene"});
    }


    preload(){
        // Load the Assets
        this.load.image('Player', 'assets/Knighy.png');

        this.load.image('floor', 'assets/Floor.png');

    }

    create(){

        // Create the platforms
        platforms = this.physics.add.staticGroup();

        platforms.create(256, 256, 'floor');
        platforms.create(224, 256, 'floor');

        // Create the Player
        player = this.physics.add.sprite(256, 200, 'Player');

        player.setBounce(0.1);
        player.setCollideWorldBounds(true);

        this.physics.add.collider(player, platforms);

        //Keyboard Variables
        this.key_Left = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.LEFT);
        this.key_Right = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.RIGHT);
        this.key_Up = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.UP);
    }
    update(delta){
        // Keyboard Input
        if(this.key_Left.isDown){
            player.setVelocityX(-80);
        }
        else if(this.key_Right.isDown){
            player.setVelocityX(80);
        }
        else {
            player.setVelocityX(0);
        }
        if(this.key_Up.isDown && player.body.touching.down){
            player.setVelocityY(-100);
        }

    }
}