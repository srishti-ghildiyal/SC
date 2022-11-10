import { count } from "rxjs";

export class Cards extends Phaser.Scene {
    gameComp: any;
    deck: any;
    discard: any;
    card1: any;
    myCards: Array<string> = ['hearts2', 'club2', 'spades6', 'club8', 'dimond9', 'hearts10', 'dimond10',
        'heartsJ', 'dimondQ', 'dimondK', 'heartsK', 'spadesK', 'joker']

    deckCardArray: Array<string> = ['hearts2', 'club2', 'spades6', 'club8', 'dimond9', 'hearts10', 'dimond10',
        'heartsJ', 'dimondQ', 'dimondK', 'heartsK', 'spadesK', 'joker']

    meld: Array<string> = ['club4', 'club2', 'spades6', 'club8', 'dimond9', 'hearts2', 'club2', 'spades6', 'club8'];

    // meldobj:Array<object> = []

    meldCard: any;
    dragObj: any;

    deckCard:any;

    constructor(key: any, gameComp: any) {
        super(key);
        this.gameComp = gameComp

    }


    create() {

        this.deck = this.add.image(this.game.scale.width / 2, this.game.scale.height / 2.4, 'deck').setOrigin(0.5, 0.5)
        this.deck.setDisplaySize((this.game.scale.width / 40) * 2.5, (this.game.scale.width / 40) * 2)

        this.discard = this.add.image(this.game.scale.width / 2, this.game.scale.height / 1.9, 'club3').setOrigin(0.5, 0.5)
        this.discard.setDisplaySize((this.game.scale.width / 40) * 2, (this.game.scale.width / 40) * 2.3)
        this.discard.angle = 90

        this.showDeck();
        this.newCard()
        this.showMyCards();
        // this.melds(); 

    }

    showDeck() {
        this.deck = this.add.image(this.game.scale.width / 2, this.game.scale.height / 2.4, 'deck').setOrigin(0.5, 0.5)
        this.deck.setDisplaySize((this.game.scale.width / 40) * 2.5, (this.game.scale.width / 40) * 2)

        // for(var i =1;i<=this.deckCardArray.length;i++){
        //     this.deckCard = this.add.image(this.game.scale.width / 2, this.game.scale.height / 2.4, this.deckCardArray[1-1]).setOrigin(0.5, 0.5).setInteractive()
        //     this.deckCard.setDisplaySize((this.game.scale.width / 40) * 2.5, (this.game.scale.width / 40) * 2)
        // }

    }


    newCard() {
        this.myCards.splice(2, 0, 'club3')
    }

    showMyCards() {
        for (var j = 0; j <= this.myCards.length; j++) {
            this.card1 = this.add.image((this.game.scale.width / 70) * (12 + (3.6 * (j - 1))), (this.game.scale.height / 40) * 37, this.myCards[j - 1]).setOrigin(0.5).setInteractive()
            this.card1.setDisplaySize((this.game.scale.width / 40) * 2, (this.game.scale.width / 40) * 2.7)
        }

        // this.meldCard = this.add.image((this.game.scale.width / 4) , ((this.game.scale.height / 3.5)), 'joker').setOrigin(0.5, 0.5)
        // this.meldCard.setDisplaySize((this.game.scale.width / 40) * 1.5, (this.game.scale.width / 40) * 2) 

        this.input.on('pointerdown', this.startDrag, this)


       

    }

    melds() {
        for (let i = 1; i <= this.meld.length; i++) {
            this.meldCard = this.add.image((this.game.scale.width / 85) * (7 + (3.1 * (i - 1))), this.game.scale.height / 2.4, this.meld[i - 1]).setOrigin(0.5, 0.5)
            this.meldCard.setDisplaySize((this.game.scale.width / 40) * 1.7, (this.game.scale.width / 40) * 2.2) 
        }

        for(let j=1;j<=7;j++){
            this.meldCard = this.add.image((this.game.scale.width / 12.1) , ((this.game.scale.height / 38.5)*(16+(1.6*(j-1))) ), 'club4').setOrigin(0.5, 0.5)
            this.meldCard.setDisplaySize((this.game.scale.width / 40) * 1.7, (this.game.scale.width / 40) * 2.2) 

        }

        for(let j=1;j<=6;j++){
            this.meldCard = this.add.image((this.game.scale.width / 8.8) , ((this.game.scale.height / 38.5)*(16+(1.6*(j-1))) ), 'hearts5').setOrigin(0.5, 0.5)
            this.meldCard.setDisplaySize((this.game.scale.width / 40) * 1.7, (this.game.scale.width / 40) * 2.2) 
        }


        for (let i = 1; i <= this.meld.length; i++) {
            this.meldCard = this.add.image((this.game.scale.width / 95) * (60 + (3.1 * (i - 1))), this.game.scale.height / 2.4, this.meld[i - 1]).setOrigin(0.5, 0.5)
            this.meldCard.setDisplaySize((this.game.scale.width / 40) * 1.7, (this.game.scale.width / 40) * 2.2) 
        }


        for(let j=1;j<=7;j++){
            this.meldCard = this.add.image((this.game.scale.width / 1.6) , ((this.game.scale.height / 38.5)*(16+(1.6*(j-1))) ), 'club4').setOrigin(0.5, 0.5)
            this.meldCard.setDisplaySize((this.game.scale.width / 40) * 1.7, (this.game.scale.width / 40) * 2.2) 

        }

        for(let j=1;j<=6;j++){
            this.meldCard = this.add.image((this.game.scale.width / 1.52) , ((this.game.scale.height / 38.5)*(16+(1.6*(j-1))) ), 'hearts5').setOrigin(0.5, 0.5)
            this.meldCard.setDisplaySize((this.game.scale.width / 40) * 1.7, (this.game.scale.width / 40) * 2.2) 

        }

    }



    startDrag(pointer: any, targets: any[]) {
        this.input.off('pointerdown', this.startDrag, this)
        this.dragObj = targets[0];
        this.input.on('pointermove', this.doDrag, this)
        this.input.on('pointerup', this.stopDrag, this)

    }

    doDrag(pointer: any) {
        this.dragObj.x = pointer.x;
        this.dragObj.y = pointer.y;
    }

    stopDrag() {
        this.input.on('pointerdown', this.startDrag, this)
        this.input.off('pointermove', this.doDrag, this)
        this.input.on('pointerup', this.stopDrag, this)

    }

    
}
