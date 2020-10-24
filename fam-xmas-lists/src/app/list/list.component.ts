import { Component, OnInit } from '@angular/core';
import { Item } from "../models/item";
import { ItemService } from "../services/item.service"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items:Item[];

  constructor(private ItemService:ItemService) { }

  ngOnInit(): void {
    this.items = this.ItemService.getItems();
  }

}
