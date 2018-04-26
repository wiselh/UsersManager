import { Platform, NavParams, ViewController, ModalController } from "ionic-angular";
import { Component } from "@angular/core";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
import { ModalUserUpdatePage } from "../edit/edit-modal";


@Component({
    templateUrl: 'info-modal.html',
    providers:[UserService],
    
})

export class ModalUserInfoPage {
    users: User[];
    userId: string = this.navParams.get('userId');
    user: User = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        createdAt: ''
    };
    constructor(
        public navParams: NavParams, 
        public viewCtrl: ViewController,
        private modalCtrl: ModalController,
        private userService:UserService) {
        this.userService.getUsers().subscribe(users => {
            this.users = users;
            for (var key in this.users) {
                var user = this.users[key];
                if (user.id == this.userId) {
                    this.user = user;
                }
            }
        });        
    }

    dismiss() {
        this.viewCtrl.dismiss();
    }
    deleteUser(event, user: User){
        this.userService.deleteUser(user);
    }
    showUpdatePage(userId) {
        let modal = this.modalCtrl.create(ModalUserUpdatePage, userId);
        modal.present();
    }
}
