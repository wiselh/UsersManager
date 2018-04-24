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

import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { UserService } from '../services/user.service';
import { ModalUserUpdatePage } from '../pages/edit/edit-modal';
import { ModalUserInfoPage } from '../pages/info/info-modal';


export const firebaseConfig = {
  apiKey: "AIzaSyAZsh4FiCGSr0s-5oM72N-27Y7UdpjKesw",
    authDomain: "ionic-usermanager.firebaseapp.com",
    databaseURL: "https://ionic-usermanager.firebaseio.com",
    projectId: "ionic-usermanager",
    storageBucket: "",
    messagingSenderId: "228601455763"
};

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    RegisterPage,
    ManagerPage,
    TabsPage,
    ModalUserInfoPage,
    ModalUserUpdatePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    AngularFirestoreModule
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
    ModalUserUpdatePage
  ],
  providers: [
    UserService,
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
