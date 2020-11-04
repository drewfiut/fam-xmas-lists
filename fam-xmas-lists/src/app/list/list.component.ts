import { Component, OnInit, Input } from '@angular/core';
import { connectableObservableDescriptor } from 'rxjs/internal/observable/ConnectableObservable';
import { Item } from "../models/item";
import { ItemService } from "../services/item.service"

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  items;
  @Input() name:String;

  constructor(private ItemService:ItemService) { }

  ngOnInit(): void {
    this.ItemService.getItems(this.name).subscribe(items => {
      this.items = items;
    });
  }

  addItem(item:Item) {
    this.ItemService.addItem(item, this.name);
  }

}
