import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ModelLocater } from '../modelLocater/modelLocater';
import { SocketconnectionServices } from '../services/socketconnection.service';

@Component({
  selector: 'app-joinroom',
  templateUrl: './joinroom.component.html',
  styleUrls: ['./joinroom.component.scss']
})
export class JoinroomComponent implements OnInit {

  constructor(public model: ModelLocater, private formBuilder: FormBuilder, public SocketSvc: SocketconnectionServices) { }
  playerform: any;

  ngOnInit(): void {
    this.playerform = this.formBuilder.group({
      roomid: [''],

    });

    this.model.codeValue = this.f.roomid.value
    

    
  }

  get f() {
    
    return this.playerform.controls;
  
  }

  // test(){
  //   console.log(this.f.roomid.value)
  // }


 
 

 
  

}
