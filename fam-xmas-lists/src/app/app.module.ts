import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { environment } from "../environments/environment";
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { FormsModule } from '@angular/forms';
import { Router, RouterModule } from '@angular/router'

import { AppComponent } from './app.component';
import { ListComponent } from './list/list.component';
import { ListItemComponent } from './list-item/list-item.component';
import { AddItemComponent } from './add-item/add-item.component';
import { MyListComponent } from './my-list/my-list.component';
import { MyListItemComponent } from './my-list-item/my-list-item.component';
import { AppRoutingModule } from './app-routing.module';
import { ListsComponent } from './lists/lists.component';
import { NavComponent } from './nav/nav.component';

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    ListItemComponent,
    AddItemComponent,
    MyListComponent,
    MyListItemComponent,
    ListsComponent,
    NavComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot([]),
    AngularFireModule.initializeApp(environment.firebase, 'fam-xmas-lists'),
    AngularFirestoreModule,
    FormsModule,
    AngularFireAuthModule,
    AppRoutingModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
