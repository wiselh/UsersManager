import { Platform, NavParams, ViewController } from "ionic-angular";
import { Component } from "@angular/core";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";

@Component({
    templateUrl: 'edit-modal.html',
    providers:[UserService],
     styles:[`
    .example-container {
        display: flex;
        flex-direction: column; 
    }

    .example-container > * {
        width: 100%;
    }
    .mat-form-field {
        display: inherit;
    }
    `]
})

export class ModalUserUpdatePage {
    users: User[];
    user: User = {
        firstname: '',
        lastname: '',
        email: '',
    };
    userId: string = this.navParams.get('userId');
    firstname_required = false;
    lastname_required = false;
    email_required = false;
    password_required = false;
    required_found: boolean;
    
    constructor(
        public navParams: NavParams, 
        public viewCtrl: ViewController,
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

    
    onSubmit(){
        this.firstname_required = false;
        this.lastname_required = false;
        this.email_required = false;
        // this.password_required = false;
        this.required_found = false;
        for (var key in this.user) {
            var value = this.user[key];
            if (value == '') {
                switch (key) {
                    case 'firstname': this.firstname_required = true; this.required_found = true
                        break;
                    case 'lastname': this.lastname_required = true; this.required_found = true
                        break;
                    case 'email': this.email_required = true; this.required_found = true
                        break;
                    // case 'password': this.password_required = true; this.required_found = true
                    //     break;
                    default:
                        break;
                }
            }
        }
        if (this.required_found) return false;
        this.userService.updateUser(this.user);
        this.viewCtrl.dismiss();
    }
    dismiss() {
        this.viewCtrl.dismiss();
    }

}
