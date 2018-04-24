import { Component, Injectable } from '@angular/core';
import { NavController, NavParams, ModalController, Platform, ViewController } from 'ionic-angular';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { Observable } from 'rxjs/observable';

@Injectable()
@Component({
  selector: 'page-manager',
  templateUrl: 'manager.html',
})
export class ManagerPage {
  users: User[];
  constructor(private modalCtrl: ModalController, private userService: UserService) {}

  ionViewWillEnter() {
  
    this.userService.getUsers().subscribe(users => {
      this.users = users;
    });
  }

  // openModal(characterNum) {

  //   let modal = this.modalCtrl.create(ModalContentPage, characterNum);
  //   modal.present();
  // }

}

@Component({
  templateUrl: 'manage-modal.html'
})

export class ModalContentPage {



  constructor(
    public platform: Platform,
    public params: NavParams,
    public viewCtrl: ViewController) {

  }

  dismiss() {
    // this.viewCtrl.dismiss();
  }
}
