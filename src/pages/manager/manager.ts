import { Component, Injectable } from '@angular/core';
import { NavController, NavParams, ModalController} from 'ionic-angular';
import { User } from '../../models/User';
import { UserService } from '../../services/user.service';
import { RegisterPage } from '../register/register';
import { ModalUserInfoPage } from '../info/info-modal';
import { ModalUserUpdatePage } from '../edit/edit-modal';
import { ModalUserAddPage } from '../add/add-modal';



@Injectable()
@Component({
  selector: 'page-manager',
  templateUrl: 'manager.html',
  styles:[`
  .mat-card {
    padding: 11px 16px;
}`]
})
export class ManagerPage {
  panelOpenState: boolean = false;
  users: User[];

  constructor(
    private modalCtrl: ModalController,
    private userService: UserService,
    public navCtrl: NavController,) {
    this.userService.getUsers().subscribe(users => {
      this.users = users;
      console.log(this.users);
      
    });
    }

  ionViewWillEnter() {
    console.log(this.users);
    
  }
  showAddModal(){
    let modal = this.modalCtrl.create(ModalUserAddPage);
    modal.present();
  }
  showInfos(userId) {
    let modal = this.modalCtrl.create(ModalUserInfoPage, userId);
    modal.present();
  }
  
  showUpdatePage(userId) {
    let modal = this.modalCtrl.create(ModalUserUpdatePage, userId);
    modal.present();
  }
  deleteUser(event, user: User){
    this.userService.deleteUser(user);
  }

}