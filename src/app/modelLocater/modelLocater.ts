import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})

export class ModelLocater{
    public roomCodeToJoinAndShare = 0;
    public gamePlayer: any = [];
    public playersInRoom:any=[];
    public teamName = "A";
    public seatOnServer:any = 0;
    public userServerIndex:any = null;
    public players: any = [];
    public roomName: string = "";
    public hostPlayer: any;
    public gameMode:string='';
    public codeValue:any;
   


}