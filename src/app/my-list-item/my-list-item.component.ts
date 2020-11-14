import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Item } from '../models/item';
import '@angular/common'
import { ItemService } from "../services/item.service"

@Component({
  selector: 'app-my-list-item',
  templateUrl: './my-list-item.component.html',
  styleUrls: ['./my-list-item.component.css']
})
export class MyListItemComponent implements OnInit {

  @Input() item:Item;
  @Input() user;
  @Output() deleteItem:EventEmitter<any> = new EventEmitter();

  constructor(private ItemService:ItemService) { }

  ngOnInit(): void {
  }

  onDelete(item){
    this.deleteItem.emit(item);
  }
  

}
