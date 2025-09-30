class StartCinematic extends Phaser.Scene {
    constructor() {
        super({ key: "StartCinematic" });
    }

    preload() {
        this.load.video('sample', 'sample.mp4', 'loadeddata', false, true);
    }

    create() {
        this.cameras.main.setBackgroundColor('#000000');
        
        const vid = this.add.video(
            this.cameras.main.centerX, 
            this.cameras.main.centerY, 
            'sample'
        );

        // Simple scaling - wait for video to load
        this.time.delayedCall(100, () => {
            const screenWidth = this.scale.width;
            const screenHeight = this.scale.height;
            const videoWidth = vid.width || 1920;
            const videoHeight = vid.height || 1080;

            const videoAspectRatio = videoWidth / videoHeight;
            const screenAspectRatio = screenWidth / screenHeight;

            let newWidth, newHeight;

            if (videoAspectRatio > screenAspectRatio) {
                newWidth = screenWidth;
                newHeight = newWidth / videoAspectRatio;
            } else {
                newHeight = screenHeight;
                newWidth = newHeight * videoAspectRatio;
            }

            vid.setDisplaySize(newWidth, newHeight);
        });

        // Skip text
        const skipText = this.add.text(
            this.cameras.main.width - 20,
            this.cameras.main.height - 20,
            'Click anywhere to skip',
            {
                fontSize: '18px',
                color: '#ffffff',
                backgroundColor: '#00000088',
                padding: { x: 10, y: 5 }
            }
        ).setOrigin(1, 1);

        vid.play();

        vid.on('complete', () => {
            this.scene.start('WelcomeScene');
        });

        this.input.once('pointerdown', () => {
            vid.stop();
            this.scene.start('WelcomeScene');
        });
    }
}

class WelcomeScene extends Phaser.Scene {
    constructor() {
        super({ key: 'WelcomeScene' });
    }

    create() {
        this.cameras.main.setBackgroundColor('#232323ff');
        
        const message = "CLICK TO START";
        this.add.text(this.cameras.main.centerX, this.cameras.main.centerY, message, {
            fontSize: '32px',
            color: '#ffffff',
            align: 'center'
        }).setOrigin(0.5);

        this.input.on('pointerdown', () => {
            this.scene.start('GameScene');
        });
    }
}

class GameScene extends Phaser.Scene {
    constructor() {
        super({ key: 'GameScene' });
    }

    preload() {
        const suits = ['clubs', 'diamonds', 'hearts', 'spades'];
        const cardBacks = ['1', '2', '3', '4'];

        for (const back of cardBacks) {
            this.load.image(`back_${back}`, `Playing Cards/card-back${back}.png`);
        }
        
        this.load.image('blank', 'Playing Cards/card-blank.png');

        for (const suit of suits) {
            for (let i = 1; i <= 13; i++) {
                const cardKey = `${suit}_${i}`;
                const cardPath = `Playing Cards/card-${suit}-${i}.png`;
                this.load.image(cardKey, cardPath);
            }
        }
    }

    create() {
        this.cameras.main.setBackgroundColor('#006400');

        this.add.image(150, 250, 'back_1');
        this.add.image(300, 250, 'spades_13');
        this.add.image(450, 250, 'hearts_1');
        this.add.image(600, 250, 'diamonds_12');

        this.add.text(150, 400, 'All Card Assets Loaded Successfully!', { 
            fontSize: '24px', 
            fill: '#ffffff' 
        });
    }
}

const config = {
    type: Phaser.AUTO,
    width: 1280,
    height: 720,
    scale: {
        mode: Phaser.Scale.FIT,
        autoCenter: Phaser.Scale.CENTER_BOTH,
        parent: 'core',
        width: '100%',
        height: '100%'
    },
    scene: [StartCinematic, WelcomeScene, GameScene] 
};

const game = new Phaser.Game(config);