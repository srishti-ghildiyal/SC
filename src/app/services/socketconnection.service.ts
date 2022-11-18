import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Client } from 'colyseus.js';
import { create } from 'domain';
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


  constructor(public model: ModelLocater, public router: Router) {
    this.leaveLobby = new ReplaySubject<{ [key: string]: string; }>(1);
    this.setLobbyObject = new ReplaySubject<{ [key: string]: string; }>(1);

  }


  public connectServer(userObj: any): any {

    this.client = new Client(this.port);
    console.log("User data ", userObj);
    console.log("client is ", this.client, " port is ", this.port)
    this.Create('lobby', userObj)

  }

  //Create Random Room

public Create(type: any, userObj: any) {
    this.client.getAvailableRooms(type).then((rooms: any) => {
      console.log('rooms are', rooms)
      let roomExist = false;
      rooms.forEach((room: any) => {
        if (room.metadata.roomTitle == userObj.roomTitle && room.metadata.gameMode == userObj.gameMode) {
          roomExist = true;
        }
      })
      if (!roomExist) {
        this.client.create(type, userObj).then((lobby: any) => {
          this.setLobbyObject.next(lobby);
          console.log("Room created successfully >>", lobby, userObj);
          this.startPublicLobby(lobby, type);
          this.getplayers(lobby)
        }).catch((e: any) => {
          console.log("Lobby JOIN ERROR", e);
          alert("errror in connecting with lobby")
        });
      }
      else {
        alert('Room already Exist')
      }

    })
}

  // join random room
  public Join(roomid: any, userObj: any) {
    this.client = new Client(this.port);
    this.client.joinById(roomid, userObj).then((lobby: any) => {
      this.setLobbyObject.next(lobby);
      console.log("lobby joined successfully >>", lobby);
      this.startPublicLobby(lobby, 'Random');
      this.getplayers(lobby)
    }).catch((e: any) => {
      console.log("JOIN ERROR", e);
    });
  }

  //get room list
  public getRooms(type: any) {
    this.model.rooms =[];
    this.client = new Client(this.port);
    this.client.getAvailableRooms(type).then((rooms: any) => {
      rooms.forEach((room: any) => {
        console.log('rooms available>>>>', room)
        console.log('roomsid>>>>', room.roomId)
        this.model.rooms.push(room);
      });
    })
  }

  // players in room
  getplayers(room: any) {
    room.state.players.onAdd = (player: any, key: any) => {
      console.log("Player Add", player, key);
      console.log('player name', player.name);
      this.model.playersInRoom.push(player)
    }

  }

  //start Random lobby
  startLobby(lobby: any, roomtype: any) {
    this.model.lobbydata = lobby
    lobby.onMessage("JOINFINAL", (message: any) => {
      console.log('all player', message.gamePlayerList);
    });

    lobby.onMessage("ROOMCONNECT", (message: any) => {
      console.log("Room Connected", message);
      
      lobby.leave();
      this.leaveLobby.next(message);
      console.log('lobby leave')
      this.leaveLobby.next(message);

    });
    lobby.onLeave((code: any) => {
      console.log('Client left the lobby', code)
    })
  }

  public startPublicLobby(lobby: any, roomtype: any) {
    this.model.lobbydata = lobby
    lobby.onMessage("JOINFINAL", (message: any) => {
      console.log('all player', message.gamePlayerList);
      console.log('message',message)
    });

    lobby.onMessage("ROOM_CONNECT", (message: any) => {
      console.log("Room Connected", message);
     
      lobby.leave();
      this.leaveLobby.next(message);
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
      this.getplayers(lobby)
    }).catch((e: any) => {
      console.log("Lobby JOIN ERROR", e);
      alert("errror in connecting with lobby");
    });
  }

  startLobbyFriend(friendsRoom: any, roomtype: any) {
    console.log("inside FriendsRoom", friendsRoom.onMessage);

    friendsRoom.onMessage("ROOM_CONNECT", (message: any) => {
      console.log("room connect ", message);
      console.log("ALL PLAYERS", this.model.playersInRoom);

      friendsRoom.leave();
      this.leaveLobby.next(message);
      this.model.players = [];
      this.model.roomName = "";
      this.model.roomCodeToJoinAndShare = 0;
    });
  }

  public joinFriendsRoom(userObj: any, roomId: any) {
    console.log("inside funcnjoin friend", roomId)
    const port = 'ws://3.18.57.54:2567';
    this.client = new Client(this.port);
    let roomExist = false;
    this.client.joinById(roomId, userObj).then((lobby: any) => {
      console.log("lobby joined successfully >>", lobby);
      this.startLobbyFriend(lobby, 'Random');
      this.getplayers(lobby)
      this.setLobbyObject.next(lobby);

    }).catch((e: any) => {
      console.log("JOIN friendivite ERROR", e);
    });
  }

}
