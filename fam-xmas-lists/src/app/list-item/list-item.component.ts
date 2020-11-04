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
  @Input() name:String;

  constructor(private ItemService:ItemService) { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes={
      todo:true,
      'is-complete': this.item.completed
    }
    return classes;
  }

  onDelete(item) {
    this.ItemService.deleteItem(item, this.name);
  }

  onToggle(item) {
    item.completed = !item.completed;

    this.ItemService.toggleCompleted(item, this.name);
    
  }

}
