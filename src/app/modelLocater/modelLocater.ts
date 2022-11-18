import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ModelLocater{
    public roomCodeToJoinAndShare:any ;
    public gamePlayer: any = [];
    public playersInRoom:any=[];
    public teamName = "A";
    public seatOnServer:any = 0;
    public userServerIndex:any = null;
    public players: any = [];
    public roomName: string = "";
    public hostPlayer: any;
    public gameMode:string='newbies';
    public roomCode:any;
    public lobbydata:any;
    public isHost:boolean=false;
    public userName:string='';
    public roomTitle:string = ''
    public rooms: any = [];
    
   


}