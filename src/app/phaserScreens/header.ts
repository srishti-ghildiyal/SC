import { GameComponent } from "../game/game.component";

export class Header extends Phaser.Scene{
    gameComp: GameComponent;
    hangBoard1: any;
    hangBoard2: any;
    hangBoardText1:any;
    hangBoardText2:any;
    settings: any;
    box:any;
    opponent1:any;
    score1:any;
    score2:any;
    bluecircle:any;
    player1:any;
    timer:any;
    player1Text: any;

    constructor(key:string, gameComp:GameComponent){
        super(key);
        this.gameComp = gameComp
    }

    create(){

        //static Assets
        this.hangBoard1 = this.add.image(this.game.scale.width/4.5,0,"hangboard").setOrigin(0.5,0.5)
        this.hangBoard1.setDisplaySize(this.game.scale.width/6,this.game.scale.height/8)

        this.hangBoard2 = this.add.image(this.game.scale.width/1.3,0,"hangboard").setOrigin(0.5,0.5)
        this.hangBoard2.setDisplaySize(this.game.scale.width/6,this.game.scale.height/8)

        this.hangBoardText1 = this.add.text((this.game.scale.width / 5.3), 0, "Rivals ", { font: ' Roboto-Bold', color: '#ffffff', }).setOrigin(0, 0.2);
        this.hangBoardText1.setFontSize((this.game.scale.width /200) + 'ex');

        this.hangBoardText2 = this.add.text((this.game.scale.width / 1.39), 0, "Our Team ", { font: '40px Roboto-Bold', color: '#ffffff', }).setOrigin(0, 0.2);
        this.hangBoardText2.setFontSize((this.game.scale.width / 200) + 'ex');
       
        // this.settings = this.add.image(this.game.scale.width/1.1,this.game.scale.height/10,"settings").setOrigin(0.5,0.5)
        // this.settings.setDisplaySize((this.game.scale.width / 40) * 2,(this.game.scale.width / 40) * 2) * 0.95 ;

        this.box = this.add.image(this.game.scale.width/2.2,0,"box").setOrigin(0.5,0.5)
        this.box.setDisplaySize(this.game.scale.width/15,this.game.scale.height/12)
        
        this.opponent1 = this.add.image(this.game.scale.width/1.9,0,"opponentcard1").setOrigin(0.5,0.5)
        this.opponent1.setDisplaySize(this.game.scale.width/20,this.game.scale.height/12);

        this.score1 = this.add.text((this.game.scale.width / 7), (this.game.scale.height / 6), "Score: ", { font: '30px Roboto-Bold', color: '#ffffff', }).setOrigin(0, 0.5);
        this.hangBoardText2.setFontSize((this.game.scale.width / 200) + 'ex');
       
        this.score2 = this.add.text((this.game.scale.width / 1.45), (this.game.scale.height / 6), "Score: ", { font: '30px Roboto-Bold', color: '#ffffff', }).setOrigin(0, 0.5);
        this.hangBoardText2.setFontSize((this.game.scale.width / 200) + 'ex');

        this.bluecircle = this.add.image(this.game.scale.width/2, this.game.scale.height/7.5,'bluecircle').setOrigin(0.5,0.5)
        this.bluecircle.setDisplaySize(0,0)
        // this.bluecircle.setDisplaySize((this.game.scale.width / 40) * 1.5,(this.game.scale.width / 40) * 1.5)

        this.player1 =  this.add.image(this.game.scale.width/2, this.game.scale.height/7.5,'player').setOrigin(0.5,0.5)
        this.player1.setDisplaySize(0,0)
        // this.player1.setDisplaySize((this.game.scale.width / 40) * 1.3,(this.game.scale.width / 40) * 1.3)
        
        this.player1Text = this.add.text((this.game.scale.width /2.1), (this.game.scale.height / 5.2), "Shairly", { font: 'Roboto-Light', color: '#ffffff', }).setOrigin(0, 0.5);
        this.player1Text.setFontSize((this.game.scale.width /400) + 'ex');
        

        let self = this;
        let hangBordTween = self.tweens.add({
            targets: [self.hangBoard1,self.hangBoardText1,self.hangBoard2,self.hangBoardText2,self.opponent1],
            y:this.game.scale.height/16,
            // scale: 0,
            ease: 'linear',
            duration: 200,
            yoyo: false,
            onComplete(cardTween) {
                cardTween.stop();
            }
        });

        let opponent1Tween = self.tweens.add({
            targets: [self.opponent1,self.box],
            y:this.game.scale.height/38,
            ease: 'linear',
            duration: 200,
            yoyo: false,
            onComplete(opponent1Tween) {
                opponent1Tween.stop();
            }
        });


        let blueCircleTween = self.tweens.add({
            targets: [self.bluecircle,],
            ease: 'linear',
            duration: 200,
            scale:(this.game.scale.width / 4000),
            yoyo: false,
            onComplete(blueCircleTween) {
                blueCircleTween.stop();
            }
        });

        let playerTween = self.tweens.add({
            targets: [self.player1],
            ease: 'linear',
            duration: 200,
            scale:(this.game.scale.width / 4000),
            yoyo: false,
            onComplete(playerTween) {
                playerTween.stop();
            }
        });






       

    }
    

}