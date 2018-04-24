import { Component } from '@angular/core';
//added
import { HomePage } from '../home/home';
import { ManagerPage } from '../manager/manager';
import { AngularFireAuth } from 'angularfire2/auth';
import { NavController } from 'ionic-angular';
import { LoginPage } from '../login/login';

@Component({
  templateUrl: 'tabs.html',
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = ManagerPage;
  tab3Root = ManagerPage;
  constructor(private fire_auth: AngularFireAuth, public navCtrl: NavController) {}

  logOut(){
    this.fire_auth.auth.signOut();
    this.navCtrl.setRoot(LoginPage);
  }
}
