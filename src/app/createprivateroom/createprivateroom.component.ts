import { Component, OnInit } from '@angular/core';
import { ModelLocater } from '../modelLocater/modelLocater';

@Component({
  selector: 'app-createprivateroom',
  templateUrl: './createprivateroom.component.html',
  styleUrls: ['./createprivateroom.component.scss']
})
export class CreateprivateroomComponent implements OnInit {
  gameMode:string = ''
  constructor(public modal:ModelLocater) { }
  
  ngOnInit(): void {
  }

  selectMode(mode:string){
    this.modal.gameMode = mode;
    console.log('game mode>>',this.gameMode)
  }



}
