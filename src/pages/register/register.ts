import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
//added
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from './../login/login';
import { AngularFirestore, AngularFirestoreCollection, AngularFirestoreDocument } from 'angularfire2/firestore';
import { User } from '../../models/user';
// import { Observable } from '@firebase/util';
import { Observable } from 'rxjs/observable';

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  usersCollection: AngularFirestoreCollection<User>;
  users: Observable<User[]>;
  userDoc: AngularFirestoreDocument<User>;
  //date
  dateF = new Date();
  day = this.dateF.getDay();
  month = this.dateF.getMonth();
  year = this.dateF.getFullYear();
  date: string = this.day+'/' + this.month+'/' + this.year

  user: User = {
    firstname: '',
    lastname: '',
    email: '',
    password: '',
    createdAt: new Date().toLocaleDateString() // Or this.date
  };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private fire_auth: AngularFireAuth,
    private _db: AngularFirestore) {
    this.usersCollection = this._db.collection("users");
  }

 

  register() {
    this.usersCollection.add(this.user);
    this.alert('Registred successefuly');
    this.navCtrl.setRoot(LoginPage);
    // this.fire_auth.auth
    //   .createUserWithEmailAndPassword(this.user.email, this.user.password)
    //   .then(data => {
    //     this.usersCollection.add(this.user);
    //     this.alert('Registred successefuly');
    //     this.navCtrl.setRoot(LoginPage);
    //   })
    //   .catch(error => {
    //     this.alert('Error : ' + error);
    //   });
  }

  alert($message) {
    this.alertCtrl
      .create({
        title: 'Info!',
        subTitle: $message,
        buttons: ['OK']
      })
      .present();
  }
}
