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
    // Load all card back images
    this.load.image('back_1', 'Playing Cards/card-back1.png');
    this.load.image('back_2', 'Playing Cards/card-back2.png');
    this.load.image('back_3', 'Playing Cards/card-back3.png');
    this.load.image('back_4', 'Playing Cards/card-back4.png');
    
    // Load blank card
    this.load.image('blank', 'Playing Cards/card-blank.png');
    
    // Load all clubs cards
    this.load.image('clubs_1', 'Playing Cards/card-clubs-1.png');
    this.load.image('clubs_2', 'Playing Cards/card-clubs-2.png');
    this.load.image('clubs_3', 'Playing Cards/card-clubs-3.png');
    this.load.image('clubs_4', 'Playing Cards/card-clubs-4.png');
    this.load.image('clubs_5', 'Playing Cards/card-clubs-5.png');
    this.load.image('clubs_6', 'Playing Cards/card-clubs-6.png');
    this.load.image('clubs_7', 'Playing Cards/card-clubs-7.png');
    this.load.image('clubs_8', 'Playing Cards/card-clubs-8.png');
    this.load.image('clubs_9', 'Playing Cards/card-clubs-9.png');
    this.load.image('clubs_10', 'Playing Cards/card-clubs-10.png');
    this.load.image('clubs_11', 'Playing Cards/card-clubs-11.png');
    this.load.image('clubs_12', 'Playing Cards/card-clubs-12.png');
    this.load.image('clubs_13', 'Playing Cards/card-clubs-13.png');
    
    // Load all diamonds cards
    this.load.image('diamonds_1', 'Playing Cards/card-diamonds-1.png');
    this.load.image('diamonds_2', 'Playing Cards/card-diamonds-2.png');
    this.load.image('diamonds_3', 'Playing Cards/card-diamonds-3.png');
    this.load.image('diamonds_4', 'Playing Cards/card-diamonds-4.png');
    this.load.image('diamonds_5', 'Playing Cards/card-diamonds-5.png');
    this.load.image('diamonds_6', 'Playing Cards/card-diamonds-6.png');
    this.load.image('diamonds_7', 'Playing Cards/card-diamonds-7.png');
    this.load.image('diamonds_8', 'Playing Cards/card-diamonds-8.png');
    this.load.image('diamonds_9', 'Playing Cards/card-diamonds-9.png');
    this.load.image('diamonds_10', 'Playing Cards/card-diamonds-10.png');
    this.load.image('diamonds_11', 'Playing Cards/card-diamonds-11.png');
    this.load.image('diamonds_12', 'Playing Cards/card-diamonds-12.png');
    this.load.image('diamonds_13', 'Playing Cards/card-diamonds-13.png');
    
    // Load all hearts cards
    this.load.image('hearts_1', 'Playing Cards/card-hearts-1.png');
    this.load.image('hearts_2', 'Playing Cards/card-hearts-2.png');
    this.load.image('hearts_3', 'Playing Cards/card-hearts-3.png');
    this.load.image('hearts_4', 'Playing Cards/card-hearts-4.png');
    this.load.image('hearts_5', 'Playing Cards/card-hearts-5.png');
    this.load.image('hearts_6', 'Playing Cards/card-hearts-6.png');
    this.load.image('hearts_7', 'Playing Cards/card-hearts-7.png');
    this.load.image('hearts_8', 'Playing Cards/card-hearts-8.png');
    this.load.image('hearts_9', 'Playing Cards/card-hearts-9.png');
    this.load.image('hearts_10', 'Playing Cards/card-hearts-10.png');
    this.load.image('hearts_11', 'Playing Cards/card-hearts-11.png');
    this.load.image('hearts_12', 'Playing Cards/card-hearts-12.png');
    this.load.image('hearts_13', 'Playing Cards/card-hearts-13.png');
    
    // Load all spades cards
    this.load.image('spades_1', 'Playing Cards/card-spades-1.png');
    this.load.image('spades_2', 'Playing Cards/card-spades-2.png');
    this.load.image('spades_3', 'Playing Cards/card-spades-3.png');
    this.load.image('spades_4', 'Playing Cards/card-spades-4.png');
    this.load.image('spades_5', 'Playing Cards/card-spades-5.png');
    this.load.image('spades_6', 'Playing Cards/card-spades-6.png');
    this.load.image('spades_7', 'Playing Cards/card-spades-7.png');
    this.load.image('spades_8', 'Playing Cards/card-spades-8.png');
    this.load.image('spades_9', 'Playing Cards/card-spades-9.png');
    this.load.image('spades_10', 'Playing Cards/card-spades-10.png');
    this.load.image('spades_11', 'Playing Cards/card-spades-11.png');
    this.load.image('spades_12', 'Playing Cards/card-spades-12.png');
    this.load.image('spades_13', 'Playing Cards/card-spades-13.png');
    
    // Optional: Add loading progress feedback
    this.load.on('complete', function() {
        console.log('All ' + Object.keys(this.textures.list).length + ' card assets loaded successfully!');
    }.bind(this));
}

function create() {
    // Display some sample cards to verify loading worked
    this.add.image(150, 250, 'back_1');
    this.add.image(300, 250, 'spades_13');
    this.add.image(450, 250, 'hearts_1');
    this.add.image(600, 250, 'diamonds_12');

    this.add.text(150, 400, 'All Card Assets Loaded Successfully!', { 
        fontSize: '24px', 
        fill: '#ffffff' 
    });
}