import { GameComponent } from "../game/game.component";

export class Table extends Phaser.Scene {
    gameComp: GameComponent
    redcircle2: any;
    redcircle3: any;
    redcircle4: any;
    timer: any
    player2: any;
    player3: any;
    opponent2: any;
    opponent3: any;
    box2: any;
    box3: any;
    special: any;
    bg: any;

    undo: any;
    player4: any;
    specialTxt: any;
    constructor(key: string, gameComp: GameComponent) {
        super(key);
        this.gameComp = gameComp;
    }

    create() {

        //static assets
        this.redcircle2 = this.add.image(this.game.scale.width / 15, this.game.scale.height / 3.5, "redcircle").setOrigin(0.5, 0.5)
        this.redcircle2.setDisplaySize(0,0)
        // this.redcircle2.setDisplaySize((this.game.scale.width / 40) * 1.5, (this.game.scale.width / 40) * 1.5)


        this.player2 = this.add.image(this.game.scale.width / 15, this.game.scale.height / 3.5, 'player').setOrigin(0.5, 0.5)
        this.player2.setDisplaySize(0,0)
        // this.player2.setDisplaySize((this.game.scale.width / 40) * 1.3, (this.game.scale.width / 40) * 1.3)

        this.timer = this.add.image(this.game.scale.width / 2, this.game.scale.height / 3.5, 'timer').setOrigin(0.5, 0.5)
        this.timer.setDisplaySize(0,0)
        // this.timer.setDisplaySize((this.game.scale.width / 40) * 2, (this.game.scale.width / 40) * 2)

        this.redcircle3 = this.add.image(this.game.scale.width / 1.1, this.game.scale.height / 3.5, "redcircle").setOrigin(0.5, 0.5)
        this.redcircle3.setDisplaySize(0,0)
        // this.redcircle3.setDisplaySize((this.game.scale.width / 40) * 1.5, (this.game.scale.width / 40) * 1.5)

        this.player3 = this.add.image(this.game.scale.width / 1.1, this.game.scale.height / 3.5, 'player').setOrigin(0.5, 0.5)
        this.player3.setDisplaySize(0,0)
        // this.player3.setDisplaySize((this.game.scale.width / 40) * 1.3, (this.game.scale.width / 40) * 1.3)

        this.opponent2 = this.add.image(0, this.game.scale.height / 2.3, 'opponentcard2')

        this.opponent2.setDisplaySize(this.game.scale.width / 30, this.game.scale.height / 8);

        this.box2 = this.add.image(0, this.game.scale.height / 1.8, "box").setOrigin(0.5, 0.5)
        this.box2.setDisplaySize(this.game.scale.width / 20, this.game.scale.height / 10)

        this.opponent3 = this.add.image(this.game.scale.width / 1, this.game.scale.height / 2.3, 'opponentcard2')
        this.opponent3.setDisplaySize(this.game.scale.width / 20, this.game.scale.height / 8);

        this.box3 = this.add.image(this.game.scale.width / 1, this.game.scale.height / 1.8, "box").setOrigin(0.5, 0.5)
        this.box3.setDisplaySize(this.game.scale.width / 20, this.game.scale.height / 10)

        this.undo = this.add.image(this.game.scale.width / 2, this.game.scale.height / 1.6, 'undo').setOrigin(0.5, 0.5)
        this.undo.setDisplaySize((this.game.scale.width / 40) * 2, (this.game.scale.width / 40))

        this.redcircle4 = this.add.image(this.game.scale.width / 2, this.game.scale.height / 1.3, "redcircle").setOrigin(0.5, 0.5)
        this.redcircle4.setDisplaySize(0,0)
        // this.redcircle4.setDisplaySize((this.game.scale.width / 40) * 1.5, (this.game.scale.width / 40) * 1.5)

        this.player4 = this.add.image(this.game.scale.width / 2, this.game.scale.height / 1.3, 'player').setOrigin(0.5, 0.5)
        this.player4.setDisplaySize(0,0)
        // this.player4.setDisplaySize((this.game.scale.width / 40) * 1.3, (this.game.scale.width / 40) * 1.3);

        this.bg = this.add.image((this.game.scale.width / 3.5), (this.game.scale.height / 3.2), 'bg').setOrigin(0.5, 0.5)
        this.bg.setDisplaySize((this.game.scale.width / 40) * 10, (this.game.scale.width / 40) * 3);

        this.bg = this.add.image((this.game.scale.width / 1.4), (this.game.scale.height / 3.2), 'bg').setOrigin(0.5, 0.5)
        this.bg.setDisplaySize((this.game.scale.width / 40) * 10, (this.game.scale.width / 40) * 3);

        this.special = this.add.image(this.game.scale.width / 95, this.game.scale.height / 1.3, "special").setOrigin(0.5, 0.5)
        this.specialTxt = this.add.text(this.game.scale.width / 95, this.game.scale.height / 1.3, "Special", { font: '20px Roboto-Bold', color: '#ffffff', }).setOrigin(0.5, 0.5);
        this.specialTxt.angle = 270


        let self = this;

        let redCircleTween = self.tweens.add({
            targets: [self.redcircle2,self.redcircle3,self.redcircle4],
            ease: 'linear',
            duration: 200,
          
            scale: (this.game.scale.width / 4000) , 
            yoyo: false,
            onComplete(redCircleTween) {
                redCircleTween.stop();
                console.log('inside tween')
            }
            
        });

        let playerTween = self.tweens.add({
            targets: [self.player2,self.player3,self.player4,self.timer],
            ease: 'linear',
            duration: 200,
            scale: (this.game.scale.width / 4000),
            yoyo: false,
            onComplete(playerTween) {
                playerTween.stop();
            }
        });

        let opponent1Tween = self.tweens.add({
            targets: [self.opponent2,self.box2],
            x:this.game.scale.width/70,
            ease: 'linear',
            duration: 200,
            yoyo: false,
            onComplete(opponent1Tween) {
                opponent1Tween.stop();
            }
        });

        // let opponent3Tween = self.tweens.add({
        //     targets:[self.opponent3,self.box3],
        //     x:this.game.scale.width/10,
        //     ease: 'linear',
        //     duration: 200,
        //     yoyo: false,
        //     onComplete(opponent1Tween) {
        //         opponent1Tween.stop();
        //     }
        // })



    }
}