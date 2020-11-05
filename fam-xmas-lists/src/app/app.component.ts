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

  names = ["Layne", "Dillon", "Kari", "Brad", "Jordyn", "Drew"];

  title = 'fam-xmas-lists';

  constructor(public auth: AuthService){
  }
}
