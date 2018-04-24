import { Component, ViewChild } from '@angular/core';
import {NavController, NavParams, AlertController, Loading, LoadingController } from 'ionic-angular';
//imported
import { AngularFireAuth } from 'angularfire2/auth';
import { RegisterPage } from './../register/register';
import * as firebase from 'firebase/app';
import { TabsPage } from '../tabs/tabs';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  rootPage: any = TabsPage;
  @ViewChild('email') email;
  @ViewChild('password') password;
  
  loading: Loading;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    private fire_auth: AngularFireAuth,
    private loadingCtrl: LoadingController
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  loggedIn() {
    this.fire_auth.auth
      .signInWithEmailAndPassword(this.email.value, this.password.value)
      .then(data => {
        this.alert('Logged in successefuly');
        this.navCtrl.setRoot(TabsPage);
      })
      .catch(error => {
        this.alert('Error : ' + error);
      });
  }

  registerPage(){
 this.navCtrl.push(RegisterPage);
  }

  loginWithFacebook(){
    this.fire_auth.auth
      .signInWithPopup(new firebase.auth.FacebookAuthProvider())
      .then(res => {
        this.alert('Logged in successefuly');            
        this.navCtrl.setRoot(TabsPage);
        });
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
