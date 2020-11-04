import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from "angularfire2/firestore";
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Item } from "../models/item"


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemsCollection: AngularFirestoreCollection<Item>;

  constructor(public afs: AngularFirestore) { 
  }

  getItems(name:String) {
    return this.afs.collection('lists/' + name + '/items').snapshotChanges().pipe(
      map(actions => actions.map(a => {
        const data = a.payload.doc.data() as Item;
        const id = a.payload.doc.id;
        return { id, ...data };
      }))
    );
  }

  toggleCompleted(item:Item, name:String){
    return this.afs.doc('lists/' + name + '/items/' + item.id).update({'completed': item.completed});
  }

  addItem(item, name) {
    return this.afs.collection('lists/' + name + '/items').add(item);
    
  }

  deleteItem(item, name) {
    return this.afs.doc('lists/' + name + '/items/' + item.id).delete();
  }
}
