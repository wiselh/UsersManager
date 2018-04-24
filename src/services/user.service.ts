import { Observable } from 'rxjs/observable';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from './../models/User';

@Injectable()
export class UserService {
    
    usersCollection: AngularFirestoreCollection<User>;
    users: Observable<User[]>;
    userDoc: AngularFirestoreDocument<User>;

    constructor(public _db: AngularFirestore) {
        this.usersCollection = _db.collection("users");
        this.users = _db
            .collection("users")
            .snapshotChanges()
            .map(actions => {
                return actions.map(a => {
                    const data = a.payload.doc.data() as User;
                    data.id = a.payload.doc.id;
                    return data;
                });
            });     
    }

    getUsers() {
        return this.users;
    }

    addItem(user: User) {
        this.usersCollection.add(user);
    }

    // deleteItem(item: Item) {
    //     this.itemDoc = this._db.doc(`/items/${item.id}`);
    //     this.itemDoc.delete();
    // }
    // updateItem(item: Item) {
    //     this.itemDoc = this._db.doc(`/items/${item.id}`);
    //     this.itemDoc.update(item);
    // }
}
