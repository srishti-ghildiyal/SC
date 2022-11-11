import { Component, OnInit } from '@angular/core';
import { ModelLocater } from '../modelLocater/modelLocater';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public modal:ModelLocater) { }

  ngOnInit(): void {
  }

  getUserName(event:any){
    this.modal.userName =  event.target.value;

  }

}
