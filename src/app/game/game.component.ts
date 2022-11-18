import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import * as Phaser from 'phaser';
import { GameScreen } from '../phaserScreens/gameScreen';
import { SocketconnectionServices } from '../services/socketconnection.service';
@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.scss'],
  providers: [GameScreen]
})
export class GameComponent implements OnInit {
   game:any
  constructor(private gameScreen : GameScreen ,  public socketsvc:SocketconnectionServices) {
    console.log("created ")
   }
     //phaser setup
  public readonly GameConfig = {
    type: Phaser.AUTO,
    scale: {
      mode: Phaser.Scale.FIT,
      width: window.innerWidth * window.devicePixelRatio,
      height: window.innerHeight * window.devicePixelRatio,
      parent: 'game',
      enableDebug: false,
      autoCenter: Phaser.Scale.CENTER_BOTH
    },
    renderer: Phaser.AUTO,
    enableDebug: false,
    scene: this.gameScreen,
    physics: {
      default: 'arcade',
    },
    backgroundColor: '#333333',
    banner: true
  }

  ngOnInit(): void {
    this.game = new Phaser.Game(this.GameConfig);
    console.log("phaser created ", this.game)
    this.gameScreen.gameComponent = this;

    let userObj = {
      userName: 'Con' + Math.floor(Math.random() * 100).toString(),
      coin: 100,
      avatar: "1",
      dbId: Math.floor(Math.random() * 10000),
      mode: 'normal'
    }
    this.socketsvc.connectServer(userObj)
  }






}
