import { unescapeIdentifier } from '@angular/compiler';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from "../models/item"
import { AuthService } from './auth.service';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemsCollection: AngularFirestoreCollection<Item>;

  constructor(public afs: AngularFirestore) { 
  }

  getUsers(current) {
    return this.afs.collection('users/', ref => ref.where('uid', '!=', current.uid)).snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  getItems(user) {
    return this.afs.collection('users/' + user.uid + '/list').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  toggleCompleted(item:Item, user){
    return this.afs.doc('users/' + user.uid + '/list/' + item.id).update({'completed': item.completed});
  }

  addItem(item, user) {
    return this.afs.collection('users/' + user.uid + '/list').add(item);
    
  }

  deleteItem(item, user) {
    return this.afs.doc('users/' + user.uid + '/list/' + item.id).delete();
  }
}
