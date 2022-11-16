import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { ModelLocater } from '../modelLocater/modelLocater';
import { SocketconnectionServices } from '../services/socketconnection.service';

@Component({
  selector: 'app-waitingroom',
  templateUrl: './waitingroom.component.html',
  styleUrls: ['./waitingroom.component.scss']
})
export class WaitingroomComponent implements OnInit {
  lobby: any;
  show:boolean = true;
  protected subscriptions: Subscription[] = [];
  constructor(public modal:ModelLocater,public socketsvc:SocketconnectionServices,public router:Router) {
    this.subscribeToEvents();
    this.subscribeToLobbyObject()
   }

  ngOnInit(): void {
  }

  subscribeToEvents(){
		this.subscribeToGameStart()
	}

	subscribeToGameStart() {
		let temp: Subscription;
		console.log("subscribetogamestart")
		temp = this.socketsvc.leaveLobby.subscribe((data) => {
		  console.log(data,"data");
		  if(data) {
			// console.log("game start listened ", data, this.lobby);
			this.startGameRoom();
		  }
		});
		this.subscriptions.push(temp);
	  }

    subscribeToLobbyObject() {
      console.log("subscribetolobby")
      let temp: Subscription;
  
      temp = this.socketsvc.setLobbyObject.subscribe((lobby: any) => {
        console.log("subscribetolobby",lobby)
        this.lobby = lobby;
        // this.model.roomName = lobby.name;
      });
      this.subscriptions.push(temp);
      // temp = this.socketsvc.startPrivateRoom.subscribe((data) => {
      //   this.lobby.send('PLAYER_JOINED', {message: 'hello'});
      // });
      // this.subscriptions.push(temp);
    }
  

	  startGameRoom(){
      this.show = false
		this.router.navigateByUrl('/gameplay', { skipLocationChange: false });
	  }
  
    startGame(){
    this.lobby.send("START_GAME");
  }

}
