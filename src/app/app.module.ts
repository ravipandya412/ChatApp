import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { ChatPage } from '../pages/chat/chat';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
var config = {
    apiKey: "AIzaSyBhmpnlz3KaharltOwldvqe0F0VUyW0Z3U",
    authDomain: "ionic-chat-starter-ac649.firebaseapp.com",
    databaseURL: "https://ionic-chat-starter-ac649.firebaseio.com",
    projectId: "ionic-chat-starter-ac649",
    storageBucket: "ionic-chat-starter-ac649.appspot.com",
    messagingSenderId: "603090007453"
  };

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ChatPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ChatPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
