import { Component, Input, OnInit } from '@angular/core';
import { Item } from '../models/item';

import { ItemService } from "../services/item.service"

@Component({
  selector: 'app-my-list',
  templateUrl: './my-list.component.html',
  styleUrls: ['./my-list.component.css']
})
export class MyListComponent implements OnInit {

  items;
  @Input() user;

  constructor(private ItemService:ItemService) { }

  ngOnInit(): void {
    this.ItemService.getItems(this.user).subscribe(items => {
      this.items = items;
    });
  }

  addItem(item:Item) {
    this.ItemService.addItem(item, this.user);
  }

}
