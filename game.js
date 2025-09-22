const config = {
    type: Phaser.AUTO,
    width: 800,
    height: 600,
    backgroundColor: '#006400',
    scene: {
        preload: preload,
        create: create
    }
};

const game = new Phaser.Game(config);

function preload() {
    this.load.pack('cardAssets', 'assetlist.json');
}

function create() {
    this.add.image(150, 250, 'back_1');
    this.add.image(300, 250, 'spades_13');
    this.add.image(450, 250, 'hearts_1');

    this.add.text(150, 400, 'Assets Loaded Successfully!', { 
        fontSize: '24px', 
        fill: '#ffffff' 
    });
}