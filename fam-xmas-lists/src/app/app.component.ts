import { Component } from '@angular/core';
import { Item } from './models/item';
import { AuthService } from './services/auth.service';
import { ItemService } from "./services/item.service"


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  users;
  current;

  title = 'fam-xmas-lists';

  constructor(public auth: AuthService, public ItemService:ItemService){
    this.current = this.auth.user$;
    this.auth.user$.subscribe(user => {
      var current = user;
      
      this.ItemService.getUsers(current).subscribe(users => {
        this.users = users;
        
      });
    });

  
    
  }

}
