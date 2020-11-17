import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-send-chat',
  templateUrl: './send-chat.component.html',
  styleUrls: ['./send-chat.component.css']
})
export class SendChatComponent implements OnInit {

  @Output() sendChat:EventEmitter<any> = new EventEmitter();

  message;

  constructor() { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.sendChat.emit(this.message);
    this.message = "";
  }

}
