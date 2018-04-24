import { Component, Injectable } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
// import { Observable } from 'rxjs/observable';
import { RegisterPage } from '../register/register';
import { ModalUserInfoPage } from '../info/info-modal';



@Injectable()
@Component({
  selector: 'page-manager',
  templateUrl: 'manager.html',
})
export class ManagerPage {

  users: User[] = [];

  constructor(
    private modalCtrl: ModalController,
    private userService: UserService,
    public navCtrl: NavController,) {}

  ionViewWillEnter() {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  registerPage() {
    this.navCtrl.push(RegisterPage);
  }

  showInfos(userId) {
    let modal = this.modalCtrl.create(ModalUserInfoPage, userId);
    modal.present();
  }
  deleteUser(user){
    
      console.log('delete clicked');
      // this.userService.deleteUser(user);
      console.log(user);
    
  }

}