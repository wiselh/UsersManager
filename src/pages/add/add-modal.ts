import { ViewController } from "ionic-angular";
import { Component } from "@angular/core";
import { User } from "../../models/user";
import { UserService } from "../../services/user.service";
import { AngularFirestore } from "angularfire2/firestore";

@Component({
    templateUrl: 'add-modal.html',  
    providers:[UserService],
    // styleUrls:['add-modal.scss'],
    styles:[`
    .example-container {
        display: flex;
        flex-direction: column; 
    }

    .example-container > * {
        width: 100%;
    }
    .error_message{
        font-size:11px;
        color:#ff4046;
    }
    .mat-form-field {
     display: inherit;
    }

    `]
})

export class ModalUserAddPage {
    
    user: User = {
        firstname: '',
        lastname: '',
        email: '',
        password: '',
        createdAt: new Date().toLocaleDateString()
    };
    firstname_required = false;
    lastname_required = false;
    email_required = false;
    password_required = false;
    required_found: boolean;
    constructor(
        public viewCtrl: ViewController,
        private userService:UserService,
    ) {}

    ionViewWillEnter() {}
    dismiss() {
        this.viewCtrl.dismiss();
    }
   
    onSubmit(){
        this.makeItFalse();
        for (var key in this.user) {
            var value = this.user[key];
            if(value==''){
                switch (key) {
                    case 'firstname': this.firstname_required = true; this.required_found = true 
                        break;
                    case 'lastname': this.lastname_required = true; this.required_found = true 
                        break;
                    case 'email': this.email_required = true; this.required_found = true 
                        break;
                    case 'password': this.password_required = true; this.required_found = true 
                        break;
                    default:
                        break;
                }
            }
        }
        if (this.required_found) return false;
        this.userService.addUser(this.user);
        this.viewCtrl.dismiss();
    }
    cancel(){
        this.viewCtrl.dismiss();
    }
    makeItFalse(){
        this.firstname_required = false; 
        this.lastname_required = false;
        this.email_required = false;
        this.password_required = false;
        this.required_found = false;
    }


}
