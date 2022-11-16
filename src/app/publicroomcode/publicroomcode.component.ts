import { Component, OnInit } from '@angular/core';
import { ModelLocater } from '../modelLocater/modelLocater';

@Component({
  selector: 'app-publicroomcode',
  templateUrl: './publicroomcode.component.html',
  styleUrls: ['./publicroomcode.component.scss']
})
export class PublicroomcodeComponent implements OnInit {

  constructor(public modal: ModelLocater) { }

  ngOnInit(): void {
  }

  getRoomName(event:any){
    this.modal.roomTitle =event.target.value;
    console.log(this.modal.roomTitle)
  }

}
