import { Injectable } from "@angular/core";
import { Cards } from "./cards";
import { Header } from "./header";
import { Table } from "./table";



@Injectable()

export class GameScreen extends Phaser.Scene{
  
    gameComponent: any;
    constructor() {
        super({ key: 'GameScreen' });
        console.log('the game screen');

      }
    preload(){
        // background
        this.load.image('background','assets/GamePlay/bg.jpg');
       
        this.load.image('hangboard','assets/GamePlay/hang-board.png');
        this.load.image('settings','assets/GamePlay/Settings.png');
        this.load.image('box','assets/GamePlay/box.png');
        this.load.image('opponentcard1','assets/GamePlay/Oppoents cards 1 copy.png')
        this.load.image('bluecircle','assets/GamePlay/Blue circle.png')
        this.load.image('player','assets/GamePlay/profile pic.png')                                 
        this.load.image('redcircle','assets/GamePlay/red circle.png')
        this.load.image('timer','assets/GamePlay/Timer.png')
        this.load.image('opponentcard2','assets/GamePlay/Oppoents cards 1 copy.png')
        this.load.image('deck','assets/GamePlay/Deck of cards.png')
        this.load.image('undo','assets/GamePlay/undo.png')
        this.load.image('bg','assets/GamePlay/bg.png')
        this.load.image('special','assets/GamePlay/Special.png')
    

        //cards
        this.load.image('joker','assets/Cards/Joker joker.png')

        this.load.image('club2','assets/Cards/2 clubs.png');
        this.load.image('club3','assets/Cards/3 clubs.png');
        this.load.image('club4','assets/Cards/4 clubs.png');
        this.load.image('club5','assets/Cards/5 clubs.png');
        this.load.image('club6','assets/Cards/6 clubs.png');
        this.load.image('club7','assets/Cards/7 clubs.png');
        this.load.image('club8','assets/Cards/8 clubs.png');
        this.load.image('club9','assets/Cards/9 clubs.png');
        this.load.image('club10','assets/Cards/10 clubs.png');
        this.load.image('clubA','assets/Cards/A clubs.png');
        this.load.image('clubJ','assets/Cards/J clubs.png');
        this.load.image('clubK','assets/Cards/K clubs.png');
        this.load.image('clubQ','assets/Cards/Q clubs.png');


        this.load.image('dimond2','assets/Cards/2 diamonds.png');
        this.load.image('dimond3','assets/Cards/3 diamonds.png');
        this.load.image('dimond4','assets/Cards/4 diamonds.png');
        this.load.image('dimond5','assets/Cards/5 diamonds.png');
        this.load.image('dimond6','assets/Cards/6 diamonds.png');
        this.load.image('dimond7','assets/Cards/7 diamonds.png');
        this.load.image('dimond8','assets/Cards/8 diamonds.png');
        this.load.image('dimond9','assets/Cards/9 diamonds.png');
        this.load.image('dimond10','assets/Cards/10 diamonds.png');
        this.load.image('dimondA','assets/Cards/A diamonds.png');
        this.load.image('dimondJ','assets/Cards/J diamonds.png');
        this.load.image('dimondK','assets/Cards/K diamonds.png');
        this.load.image('dimondQ','assets/Cards/Q diamonds.png');
       
        this.load.image('hearts2','assets/Cards/2 hearts.png');
        this.load.image('hearts3','assets/Cards/3 hearts.png');
        this.load.image('hearts4','assets/Cards/4 hearts.png');
        this.load.image('hearts5','assets/Cards/5 hearts.png');
        this.load.image('hearts6','assets/Cards/6 hearts.png');
        this.load.image('hearts7','assets/Cards/7 hearts.png');
        this.load.image('hearts8','assets/Cards/8 hearts.png');
        this.load.image('hearts9','assets/Cards/9 hearts.png');
        this.load.image('hearts10','assets/Cards/10 hearts.png');
        this.load.image('heartsA','assets/Cards/A hearts.png');
        this.load.image('heartsJ','assets/Cards/J hearts.png');
        this.load.image('heartsK','assets/Cards/K hearts.png');
        this.load.image('heartsQ','assets/Cards/Q hearts.png');


        this.load.image('spades2','assets/Cards/2 spades.png');
        this.load.image('spades3','assets/Cards/3 spades.png');
        this.load.image('spades4','assets/Cards/4 spades.png');
        this.load.image('spades5','assets/Cards/5 spades.png');
        this.load.image('spades6','assets/Cards/6 spades.png');
        this.load.image('spades7','assets/Cards/7 spades.png');
        this.load.image('spades8','assets/Cards/8 spades.png');
        this.load.image('spades9','assets/Cards/9 spades.png');
        this.load.image('spades10','assets/Cards/10 spades.png');
        this.load.image('spadesA','assets/Cards/A spades.png');
        this.load.image('spadesJ','assets/Cards/J spades.png');
        this.load.image('spadesK','assets/Cards/K spades.png');
        this.load.image('spadesQ','assets/Cards/Q spades.png');
     }
    
    create(){
        
         ////////Loading Phaser Screens & Game////////////
        var background=this.add.image(this.game.scale.width/2,this.game.scale.height/2,"background").setOrigin(0.5,0.5)
        background.setDisplaySize(this.game.scale.width,this.game.scale.height);
        
         //Loading Header
         this.loadHeader();

         //Loading Table
         this.loadTable();

         //loading Cards
         this.loadCards();
        
    }

    loadHeader(){
        let key = 'Header';
        let header  = new Header(key,this.gameComponent)
        this.scene.add(key, header, true);
    }

    loadTable(){
        let key = 'Table';
        let table = new Table(key,this.gameComponent)
        this.scene.add(key,table,true);
    }

    loadCards(){
        let key = 'Card';
        let card = new Cards(key,this.gameComponent);
        this.scene.add(key,card,true)
        
    }
}