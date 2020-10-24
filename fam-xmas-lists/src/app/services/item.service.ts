import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor() { }

  getItems() {
    return [
      {
        id:1,
        title:"socks",
        link:"none",
        completed:true

      },
      {
        id:2,
        title:"charger",
        link:"none",
        completed:true

      },
      {
        id:3,
        title:"candle",
        link:"none",
        completed:false

      },
    ];
  }
}
