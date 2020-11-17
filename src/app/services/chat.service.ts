import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatService {

  constructor(public afs: AngularFirestore) { }

  getChat() {
    return this.afs.collection('chat/', ref => ref.orderBy('time', 'desc').limit(20)).valueChanges().pipe(map((array) => array.reverse()));
  }

  sendChat(message, current) {
    const chat = {
      message: message,
      name: current.displayName,
      uid: current.uid,
      time: new Date()
    }
    this.afs.collection('chat/').add(chat);

  }
}

