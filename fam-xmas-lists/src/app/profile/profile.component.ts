import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {

  current;

  constructor(public auth: AuthService){
    this.current = this.auth.user$;
  }

  ngOnInit(): void {
  }

}
