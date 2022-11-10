import { Injectable } from '@angular/core';
import {Client} from 'colyseus.js';
// import { Router } from '@angular/router';
import { ReplaySubject } from 'rxjs';
import { ModelLocater } from '../modelLocater/modelLocater';


@Injectable({
  providedIn: 'root'
})

export class SocketconnectionServices {
  client: any;
  currentGameStatus: any = "NONE";
  // port = ' ws://52.86.225.76:3000/';
  port = 'ws://3.18.57.54:2567'

  public leaveLobby: ReplaySubject<{ [key: string]: string; }>;
  public setLobbyObject: ReplaySubject<{ [key: string]: string; }>;


  constructor(public model: ModelLocater) {
    this.leaveLobby = new ReplaySubject<{ [key: string]: string; }>(1);
    this.setLobbyObject = new ReplaySubject<{ [key: string]: string; }>(1);
  }


  public connecServer(userObj: any): any {

    this.client = new Client(this.port);
    console.log("User data ", userObj);
    console.log("client is ", this.client, " port is ", this.port)

    this.client.create('lobby', userObj).then((lobby: any) => {
      // this.setLobbyObject.next(lobby);
      console.log("lobby Info >>", lobby);
      this.startLobby(lobby, 'random');

    }).catch((e: any) => {
      console.log("Lobby JOIN ERROR", e);
      alert("errror in connecting with lobby")

    });
  }




  //start Random lobby
  startLobby(lobby: any, roomtype: any) {
    lobby.onMessage("JOINFINAL", (message: any) => {
      console.log('all player', message.gamePlayerList);
      // this.model.playersInRoom = message.gamePlayerList;
      // console.log("ALL PLAYERS", this.model.playersInRoom);
    });

    lobby.onMessage("ROOMCONNECT", (message: any) => {
      console.log("Room Connected", message);
      // this.model.teamName = message.team;
      // this.model.seatOnServer = message.seat;
      // this.model.userServerIndex = message.userIndex;
      lobby.leave();
      // this.leaveLobby.next(message);
      console.log('lobby leave')
      this.leaveLobby.next(message);
    });
    lobby.onLeave((code: any) => {
      console.log('Client left the lobby', code)
    })
  }


  //Private Lobby Room
  public connectServerFriend(userObj: any): any {
    // const port = 'wss://api.anytimebridge.com/';
    this.client = new Client(this.port);
    this.client.create('lobby', userObj).then((lobby: any) => {   //
      this.setLobbyObject.next(lobby);
      console.log("lobby Info friend >>", lobby, this.setLobbyObject);
      this.model.roomCodeToJoinAndShare = lobby.id;
      console.log('rome code', this.model.roomCodeToJoinAndShare)
      this.startLobbyFriend(lobby, 'Random');
    }).catch((e: any) => {
      console.log("Lobby JOIN ERROR", e);
      alert("errror in connecting with lobby");
    });
  }

  ///////


  startLobbyFriend(friendsRoom: any, roomtype: any) {
    console.log("inside FriendsRoom", friendsRoom.onMessage);
    // friendsRoom.state.players.onAdd = (player: any, key: any) => {
    //   console.log("125", player);
    //   this.updatePlayersInLobbyFriend(player);
    //   let map: { [key: string]: any; } = {};
    //   map['userName'] = player.userName;
    //   map['userId'] = player.dbId;
    //   map['isPartner'] = '';
    //   map['id'] = 0;
    //   this.model.gamePlayer.push(map);
    //   friendsRoom.leave();
    //   this.updatePlayersInLobbyFriend(this.model.gamePlayer);
    // }

    friendsRoom.onMessage("ROOM_CONNECT", (message: any) => {
      console.log("room connect ", message);
      console.log("ALL PLAYERS", this.model.playersInRoom);

      this.model.teamName = message.team;
      this.model.seatOnServer = message.seat;
      this.model.userServerIndex = message.userIndex;
      console.log(message.userIndex, "inside room connect");
      friendsRoom.leave();
      this.leaveLobby.next(message);
      this.model.players = [];
      this.model.roomName = "";
      this.model.roomCodeToJoinAndShare = 0;
    });

  //   updatePlayersInLobbyFriend(playerDetails: any) {
  //   console.log("players are ", playerDetails);
  //   const p: playersvo[] = [];
  //   if (this.model.players.length != this.model.gamePlayer) {
  //     this.model.players = []
  //     this.model.hostPlayer = this.model.gamePlayer[0];
  //     for (let player of this.model.gamePlayer) {
  //       const participant: playersvo = new playersvo(player.userName, player.id, player.userId, player.isPartner);
  //       this.model.players.push(participant);
  //       console.log(this.model.players, "this.model.players");
  //     }
  //     this.model.playersInRoom = this.model.gamePlayer;

  //   }
  // }





   }


   public joinFriendsRoom(userObj: any, roomId: any) {
    console.log("inside funcnjoin friend")
    const port = 'ws://3.18.57.54:2567';
    this.client = new Client(this.port);
    let roomExist = false;
    this.client.getAvailableRooms("lobby").then((rooms: any) => {
      console.log("rooms are ", rooms)
      if (rooms.length == 0) {
        console.log("")
      }
      else {
        for (var i = 0; i < rooms.length; i++) {
          console.log("matching rooms ", rooms[i].roomId, "and ", roomId)
          if (rooms[i].roomId == roomId) {
            roomExist = true;
            this.client.joinById(roomId, userObj).then((lobby: any) => {
              console.log("lobby joined successfully >>", lobby);
              // this.startFriendsRoom(lobby, 'Random');
              // this.router.navigateByUrl('/join-game', { skipLocationChange: false });
              this.setLobbyObject.next(lobby);

            }).catch((e: any) => {
              console.log("JOIN friendivite ERROR", e);
            });
          }
          else if (!roomExist && i == (rooms.length - 1)) {
            console.log("elseif 595");
          }
        }
      }
    }).catch((e: any) => {
      console.log("get avl rooms friendivite ERROR", e);
      alert("room join error")
    });
  }



}
