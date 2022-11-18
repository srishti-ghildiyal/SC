import { Component, OnInit } from '@angular/core';
import { ModalDismissReasons, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { ModelLocater } from '../modelLocater/modelLocater';
import { SocketconnectionServices } from '../services/socketconnection.service';

@Component({
  selector: 'app-createroom',
  templateUrl: './createroom.component.html',
  styleUrls: ['./createroom.component.scss', '../landing/landing.component.scss']
})
export class CreateroomComponent implements OnInit {
	show:boolean = true;
  constructor(public modal:ModelLocater,public socketsev:SocketconnectionServices,private modalService: NgbModal) { }

  ngOnInit(): void {
    this.socketsev.getRooms('lobby')
  }

  openWR(content: any) {
		this.modalService.open(content, {centered: true,size:'xl', modalDialogClass: ''});
		this.show = false;
	}

  selectMode(mode:string){
    this.modal.gameMode = mode;
    console.log('game mode>>',this.modal.gameMode)
  }

 

  joinRoom(roomid:any){
    let userObj = {
			userName: 'Srishti',
			coin: 100,
			avatar: "1",
			dbId: Math.floor(Math.random() * 10000),
			mode: 'normal',
			roomType: 'private',
			gameMode: this.modal.gameMode
		}
    this.socketsev.Join(roomid,userObj)

  }

  public getDismissReason(reason: any): string {
		if (reason === ModalDismissReasons.ESC) {
			return 'by pressing ESC';
		} else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
			return 'by clicking on a backdrop';
		} else {
			return `with: ${reason}`;
		}
	}


  
 

}
