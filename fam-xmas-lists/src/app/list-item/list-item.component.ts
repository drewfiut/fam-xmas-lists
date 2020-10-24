import { Component, OnInit, Input } from '@angular/core';
import { Item } from '../models/item';
import '@angular/common'
import { toUnicode } from 'punycode';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item:Item;

  constructor() { }

  ngOnInit(): void {
  }

  setClasses(){
    let classes={
      todo:true,
      'is-complete': this.item.completed
    }
    return classes;
  }

  onClick(item) {
    console.log(item);
  }

  onToggle(item) {
    item.completed = !item.completed;
  }

}
