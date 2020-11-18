import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { ItemService } from '../services/item.service';

@Component({
  selector: 'app-lists',
  templateUrl: './lists.component.html',
  styleUrls: ['./lists.component.css']
})
export class ListsComponent implements OnInit {

  current;
  users;

  constructor(public auth: AuthService, public ItemService:ItemService){
    this.current = this.auth.user$;
    console.log(this.auth.user$);
    this.auth.user$.subscribe(user => {
      var current = user;
      
      this.ItemService.getUsers(current).subscribe(users => {
        this.users = users;
        
      });
    });
  }

  ngOnInit(): void {
  }

}
