import { Platform, NavParams, ViewController, ModalController } from "ionic-angular";
import { Component } from "@angular/core";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
import { ModalUserUpdatePage } from "../edit/edit-modal";


@Component({
    templateUrl: 'info-modal.html',
    providers:[UserService]
})

export class ModalUserInfoPage {
    users: User[];
    userId: string = this.navParams.get('userId');
    constructor(
        public navParams: NavParams, 
        public viewCtrl: ViewController,
        private modalCtrl: ModalController,
        private userService:UserService) {
        this.userService.getUsers().subscribe(users => {
            this.users = users;
        });        
    }

    ionViewWillEnter() {}

    dismiss() {
        this.viewCtrl.dismiss();
    }
    // editUser(user){
    //     console.log('edit clicked');
    //     // this.userService.updateUser(user);
    //     console.log(user);
    // }
    deleteUser(user){
        console.log('delete clicked');
        // this.userService.deleteUser(user);
        console.log(user);
    }
    showUpdatePage(userId) {
        console.log('edit clicked');
        console.log(userId);

        let modal = this.modalCtrl.create(ModalUserUpdatePage, userId);
        modal.present();
    }
}
