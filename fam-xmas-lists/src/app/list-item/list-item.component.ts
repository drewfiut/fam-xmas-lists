import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../models/item';
import '@angular/common'
import { ItemService } from "../services/item.service"

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item:Item;
  @Input() user;
  @Input() current;

  constructor(private ItemService:ItemService) { }

  ngOnInit(): void {
  }

  setClasses(){
    let byMe = false;
    if (this.item.by == this.current.uid){
      byMe = true;
    }

    let classes={
      'is-complete': this.item.completed,
      'by-me': byMe
    }
    return classes;
  }

  onToggle(item) {

    if((item.by == "") || (item.by === this.current.uid)){
      if(item.completed){
        item.completed = false;
        item.by = "";
      } else {
        const audio = new Audio("assets/Merry-Chirstmas.mp3");
        audio.play();
        item.completed = true;
        item.by = this.current.uid;
      }
      this.ItemService.toggleCompleted(item, this.user);
    }
    
  }

}
