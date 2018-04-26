import { Observable } from 'rxjs/observable';
import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from './../models/User';
import { AngularFireAuth } from 'angularfire2/auth';
import { ToastController } from 'ionic-angular';

export const firebaseConfig = {
    apiKey: "AIzaSyAZsh4FiCGSr0s-5oM72N-27Y7UdpjKesw",
    authDomain: "ionic-usermanager.firebaseapp.com",
    databaseURL: "https://ionic-usermanager.firebaseio.com",
    projectId: "ionic-usermanager",
    storageBucket: "",
    messagingSenderId: "228601455763"
};

@Injectable()
export class UserService {

    usersCollection: AngularFirestoreCollection<User>;
    users: Observable<User[]>;
    userDoc: AngularFirestoreDocument<User>;

    constructor(public _db: AngularFirestore, public toastCtrl: ToastController 
        // private fire_auth: AngularFireAuth
    ) {
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
    addUser(user: User) {
        this.usersCollection.add(user).then(() => {
            this.presentToast('User was added successfully');
        }).catch(errors => {
            this.presentToast(errors);
        });;
           // authentication method 
        // this.fire_auth.auth.createUserWithEmailAndPassword(user.email, user.password)
        //     .then(data => {
        //         this.usersCollection.add(user);
        //     });
    }
    updateUser(user: User) {
        this.userDoc = this._db.doc(`/users/${user.id}`);
        this.userDoc.update(user).then(() => {
            this.presentToast('User has been updated successfully');
        }).catch(errors => {
            this.presentToast(errors);
        });;

        // authentication method 
        // this.fire_auth.auth
        //     .signInWithEmailAndPassword('you@domain.com', 'correcthorsebatterystaple')
        //     .then(function (user) {
        //         user.updateEmail('newyou@domain.com')
        //     })
    }
    deleteUser(user: User) {
      
        this.userDoc = this._db.doc(`/users/${user.id}`);
        this.userDoc.delete().then(() => {
            this.presentToast('User has been deleted successfully');
        }).catch(errors => {
            this.presentToast(errors);
        });
        
        // authentication method 
        // var userEmail = this.fire_auth.auth.currentUser;
        // user.delete().then(function () {
        //     this.userDoc = this._db.doc(`/users/${user.id}`);
        //     this.userDoc.delete();
        // }, function (error) {
        //     // An error happened.
        // });
    }
    presentToast(message) {
        let toast = this.toastCtrl.create({
            message: message,
            duration: 3000
        });
        toast.present();
    }
}
