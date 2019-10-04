import { Component } from '@angular/core';
import {SoftNotifyService, Notification} from 'ng-softnotify';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
	 private index : number;
	 private timer: number;

	constructor(private softNotifyService:SoftNotifyService){
		 this.index  = 0;
		this.initNotify();
	}

   notifications: Notification [] = [ 
        {
          header: 'First Avenger',
          subHeader: 'is offline now',
          body: ' Hi there buddy!!!',
          type: 'chat',
          avatar :'captain-america',
          status : 'offline',
          time: '03.00'
        },
        {
          header: 'Yoda',
          subHeader: 'is online now',
          body: ' Your path you must decide!!!',
          type: 'chat',
          avatar :'alien',
          status : 'online',
          time: '03.00'
        },
        {
          header: 'Distant Visitor',
          subHeader: 'is offline now',
          body: ' Hi there buddy!!!',
          type: 'chat',
          avatar :'martian',
          status : 'offline',
          time: '03.00'
          ,autoDismiss:3000 //optional property
        },
        {
          header: 'Iron Man',
          subHeader: 'is typing now',
          body: ' Hi there buddy!!!',
          type: 'chat',
          avatar :'iron-man',
          status : 'offline',
          time: '03.00'
        },
        {
          header: 'Signal is weak',
          subHeader: '',
          body: 'Expect slowness in the app',
          type: 'warning',
          autoDismiss:5000 //optional property
        },
         {
          header: 'Signal strength is good',
          subHeader: '',
          body: 'Enjoy uninterrupted access',
          type: 'success',
        },
        {
          header: 'Network lost',
          subHeader: '',
          body: 'Try again',
          type: 'error',
        },
        {
          header: 'Mutant Ninja',
          subHeader: 'is online now',
          body: 'Lets Roll',
          type: 'chat',
          avatar :'ninja-turtle',
          status : 'offline',
          time: '02:55'
        },
         {
          header: 'Mask',
          subHeader: 'is online now',
          body: 'Somebody Stop Me!!!',
          type: 'chat',
          avatar :'theatre-mask',
          status : 'offline',
          time: '03.00'
        },
        {
          header: 'Predator',
          subHeader: 'is typing now',
          body: 'Im Coming... ',
          type: 'chat',
          avatar :'predator',
          status : 'offline',
          time: '03.00'
        },
      ];

  initNotify(){
  	this.timer = setInterval(() => {  
          this.softNotifyService.launchNotification(this.notifications[this.index]);
          this.index++;
          if(this.index === this.notifications.length){
            clearTimeout(this.timer); 
          }
        }, 1000);
  }

  //subscribing for onDismissNotification event for all notifications
    onDismissNotification (event:Notification) { 
       console.info("dismissed Notification:", event);
    };
}
