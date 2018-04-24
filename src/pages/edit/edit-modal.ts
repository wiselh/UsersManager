import { Platform, NavParams, ViewController } from "ionic-angular";
import { Component } from "@angular/core";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
// import { UserService } from "../../services/user.service";

@Component({
    templateUrl: 'edit-modal.html',
    providers:[UserService]
})

export class ModalUserUpdatePage {
    users: User[];
    userId: string = this.navParams.get('userId');
    constructor(
        public navParams: NavParams, 
        public viewCtrl: ViewController,
        private userService:UserService) {
        this.userService.getUsers().subscribe(users => {
            this.users = users;
        });        
    }

    ionViewWillEnter() {}
    dismiss() {
        this.viewCtrl.dismiss();
    }
    updateUser(user){
        console.log('update clicked');
        // this.userService.updateUser(user);
        console.log(user);
    }

}
