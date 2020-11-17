import { Component, Input, OnInit } from '@angular/core';
import { ChatService } from '../services/chat.service';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.css']
})
export class ChatComponent implements OnInit {

  chats;
  @Input() user;
  @Input() current;

  constructor(public ChatService: ChatService) { }

  ngOnInit(): void {
    this.ChatService.getChat().subscribe(chat => {
      this.chats = chat;
    });
    
  }

  sendChat(message){
    this.ChatService.sendChat(message, this.current);
  }

}
