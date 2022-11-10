import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbModal , ModalDismissReasons } from '@ng-bootstrap/ng-bootstrap';
import { Subscription } from 'rxjs';
import { CreateprivateroomComponent } from '../createprivateroom/createprivateroom.component';
import { ModelLocater } from '../modelLocater/modelLocater';
import { SocketconnectionServices } from '../services/socketconnection.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss']
})
export class LandingComponent implements OnInit {
//  @ViewChild(CreateprivateroomComponent)
//  gameMode: CreateprivateroomComponent = new CreateprivateroomComponent;


 constructor(private modalService: NgbModal,public socketsvc:SocketconnectionServices, public router:Router,public modal:ModelLocater) { }

  ngOnInit(): void {
	
  }

  ////open template////
  openWL(content: any) {
		this.modalService.open(content, {centered: true, size: 'xl',  modalDialogClass: 'winlose'});
	}
	openCR(content: any) {
		this.modalService.open(content, {centered: true, size: 'xl',  modalDialogClass: 'ctRoom'});

	}
  openSm(content: any) {
		this.modalService.open(content, {centered: true, size: 'lg' });
	} 
  openLB(content: any) {
		this.modalService.open(content, {centered: true, size: 'xl',  modalDialogClass: 'lboardWrap' });
	} 
  openPF(content: any) {
		this.modalService.open(content, {centered: true, size: 'xl' });
	} 
	openst(content: any) {
		this.modalService.open(content, {centered: true, size: 'xl' ,  modalDialogClass: 'settingWrap' });
	} 
	
  openHp(content: any) {
		this.modalService.open(content, {fullscreen: true, modalDialogClass: 'dark-modal'});
	} 

	openRS(content: any) {
		
		this.modalService.open(content, {centered: true, size: 'xl' ,  modalDialogClass: '' });
		
	} 

	openWR(content: any) {
		this.modalService.open(content, {centered: true,size:'xl', modalDialogClass: ''});
	}

	
	openPR(content: any) {
		this.modalService.open(content, {centered: true,size:'xl', modalDialogClass: ''});
	}

	openPRC(content: any) {
		this.modalService.open(content, {centered: true,size:'xl', modalDialogClass: ''});
	}
	openJR(content: any) {
		this.modalService.open(content, {centered: true,size:'xl', modalDialogClass: ''});
	}
	////******////

	createRoomCode(){
		let userObj = {
			userName: 'Srishti',
			coin: 100,
			avatar: "1",
			dbId: Math.floor(Math.random() * 10000),
			mode: 'normal',
			roomType: 'private',
			gameMode: this.modal.gameMode
		  }
		this.socketsvc.connectServerFriend(userObj)
		// console.log(this.gameMode.gameMode)
	}

	joinPrivateGame(){
		// joinFriendsRoom
		let userObj = {
			userName: 'Srishti',
			coin: 100,
			avatar: "1",
			dbId: Math.floor(Math.random() * 10000),
			mode: 'normal',
			roomType: 'private',
			gameMode: this.modal.gameMode
		  }
		  this.socketsvc.joinFriendsRoom(userObj,this.modal.codeValue)
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

	startgame(){
		this.subscribeToGameStart()
	}
	subscribeToGameStart() {
		let temp: Subscription;
		console.log("subscribetogamestart")
		temp = this.socketsvc.leaveLobby.subscribe((data) => {
		  console.log(data,"data");
		  if(data) {
			// console.log("game start listened ", data, this.lobby);
			this.startgame();
		  }
		});
		// this.subscriptions.push(temp);
	  }
	
}

