import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
//added
import { LoginPage } from './../pages/login/login';
import { RegisterPage } from './../pages/register/register';
import { ManagerPage } from '../pages/manager/manager';
import { TabsPage } from '../pages/tabs/tabs';
import { ModalUserUpdatePage } from '../pages/edit/edit-modal';
import { ModalUserInfoPage } from '../pages/info/info-modal';
import { ModalUserAddPage } from '../pages/add/add-modal';

//database Modules
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { UserService, firebaseConfig } from '../services/user.service';
//animations Module
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//material modules
import { MatInputModule, MatButtonModule,
         MatFormFieldModule, MatExpansionModule, 
        MatCardModule, MatListModule, MatIconModule, MatSortModule,MatTableModule
        } from '@angular/material';

        
@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ManagerPage,
    TabsPage,
    ModalUserInfoPage,
    ModalUserUpdatePage,
    ModalUserAddPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule,
    BrowserAnimationsModule,
    MatButtonModule, MatFormFieldModule, MatInputModule, MatTableModule,
    MatExpansionModule, MatCardModule, MatListModule, MatIconModule, MatSortModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ManagerPage,
    TabsPage,
    ModalUserInfoPage,
    ModalUserUpdatePage,
    ModalUserAddPage
  ],
  providers: [
    UserService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
