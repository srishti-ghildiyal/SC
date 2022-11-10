import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  public isCollapsed = true;
  public isCollapsed1 = true;
  
  constructor() { }

  ngOnInit(): void {
  }

}
