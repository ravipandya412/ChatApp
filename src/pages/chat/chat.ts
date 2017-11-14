import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { AngularFireDatabase } from 'angularfire2/database';


@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html'
})
export class ChatPage {

  username: string = '';
  message: string = '';
  _chatSubscription;
  messages: object[] = [];
  constructor(public db: AngularFireDatabase, public navCtrl: NavController, public navParams: NavParams) {
    this.username = this.navParams.get('username');
    this._chatSubscription = this.db.list('/chat').subscribe(data => {
      this.messages = data;
    })
  }
  sendMessage() {
    this.db.list('/chat').push({
      username: this.username,
      message: this.message
    }).then(() => {
      //message is sent.
    }).catch(() => {
      //some error.May be firebase unreachable
    });
    this.message = '';
  }
  ionViewWillLeave(){
     console.log('user is about to go');
     this._chatSubscription.unsubscribe();
     this.db.list('/chat').push({
      specialMessage: true,
    message: `${this.username} has left  room`
    })
  }
  ionViewDidLoad() {
      this.db.list('/chat').push({
        specialMessage: true,
      message: `${this.username} has joined room`
      })
  }
}
