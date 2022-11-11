import { Component, OnInit } from '@angular/core';
import { ModelLocater } from '../modelLocater/modelLocater';

@Component({
  selector: 'app-createroom',
  templateUrl: './createroom.component.html',
  styleUrls: ['./createroom.component.scss', '../landing/landing.component.scss']
})
export class CreateroomComponent implements OnInit {

  constructor(public modal:ModelLocater) { }

  ngOnInit(): void {
  }

}
