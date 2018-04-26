import { Component } from '@angular/core';
import { NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';
//imported
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage } from './../register/register';
import { TabsPage } from '../tabs/tabs';
import { User } from '../../models/user';
import { UserService } from "../../services/user.service";

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  rootPage: any = TabsPage;

  users: User[];
  user: User = {
    email: '',
    password: ''
  };

  loading: Loading;

  constructor(
    public navCtrl: NavController, public navParams: NavParams,
    public alertCtrl: AlertController, private fire_auth: AngularFireAuth,
    private loadingCtrl: LoadingController, private userService: UserService) {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
   }

  ionViewDidLoad() {
    
  }
  notLoggedIn: boolean = true;
  loggedIn() {
    for (var key in this.users) {
      var user = this.users[key];
      if (user.email == this.user.email && user.password == this.user.password) {
        this.alert('Logged in successefuly as '+this.user.email);
        this.navCtrl.setRoot(TabsPage);
        this.notLoggedIn = false;
      }
    }
    if (this.notLoggedIn) {
      this.alert('Oops! Your informations are not correct!');
    }

    //login with facebook

    // this.fire_auth.auth
    //   .signInWithEmailAndPassword(this.email.value, this.password.value)
    //   .then(data => {
    //     this.alert('Logged in successefuly');
    //     this.navCtrl.setRoot(TabsPage);
    //   })
    //   .catch(error => {
    //     this.alert('Error : ' + error);
    //   });
  }

  registerPage() {
    this.navCtrl.push(RegisterPage);
  }

  loginWithFacebook() {
    this.alert('Sorry! This Method Not Available For This Moment');
    // this.fire_auth.auth
    //   .signInWithPopup(new firebase.auth.FacebookAuthProvider())
    //   .then(res => {
    //     this.alert('Logged in successefuly');
    //     this.navCtrl.setRoot(TabsPage);
    //   });
  }
  showLoading() {
    this.loading = this.loadingCtrl.create({
      content: 'Please wait...',
      // duration: 3000,
      dismissOnPageChange: true
    });
    this.loading.present();
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
