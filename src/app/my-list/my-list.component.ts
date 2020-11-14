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
  showModal:boolean;
  currentItem;

  constructor(private ItemService:ItemService) { }

  ngOnInit(): void {
    this.ItemService.getItems(this.user).subscribe(items => {
      this.items = items;
    });
    this.showModal = false;
  }

  addItem(item:Item) {
    this.ItemService.addItem(item, this.user);
  }

  openModal(item:Item) {
    this.currentItem = item;
    this.showModal = true;
    console.log(this.showModal);
  }

  hideModal() {
    this.showModal = false;
  }

  deleteItem() {
    this.ItemService.deleteItem(this.currentItem, this.user);
    this.hideModal();
  }

}
