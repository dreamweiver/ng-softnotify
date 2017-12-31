import { Component } from '@angular/core';

import { Notification } from './../../softNotify/interfaces/notification.interface';

import { SoftNotifyService } from './../../softNotify/services/softNotify.service';

import '../../../assets/css/styles.css';

declare var require: any;

@Component({
  selector: 'dashboard', //element defined by dashboard component in dom
  providers : [], 
  templateUrl: './dashboard.component.html', // template for Dashboard component
  styleUrls: ['./dashboard.component.css'] // Dashboard omponent specific stylesheet
})
export class DashboardComponent {
    private index : number;

    constructor(private softNotifyService: SoftNotifyService) { 
       this.index  = 0;
    }

    //sample Notification  object array(Chat Notifications & Alert notification)
    notifications: Notification [] = [ 
      {
          header: 'First Avenger',
          subHeader: 'is offline now',
          body: ' Hi there buddy!!!',
          type: 'chat',
          avatar :'captain-america',
          status : 'offline',
          time: '02:55',
          //autoDismiss:3000, // optional property 
        },
        {
          header: 'Martian300',
          subHeader: 'last active 5 mins ago',
          body: 'Im Martian, we come in Peace',
          type: 'chat',
          avatar:'martian',
          status :'away',
          time: '03:00',
          //autoDismiss:5000, 
        },
        {
          header: 'Tony Stark',
          subHeader: 'is online now',
          body: 'whats up bud :)',
          type: 'chat',
          avatar:'iron-man',
          status:'online',
          time: '03:09',
          //autoDismiss:5000,
        },
        {
          header: 'Data saved successfully',
          subHeader: '',
          body: 'Screen will be updated with latest data',
          type: 'success'
          //autoDismiss:5000,
        },
        {
          header: 'Connection lost',
          subHeader: '',
          body: 'please wait until the connectity resumes',
          type: 'error'
          //autoDismiss:5000,
        },
        {
          header: 'Signal is weak',
          subHeader: '',
          body: 'Expect slowness in the app',
          type: 'warning'
          //autoDismiss:5000,
        },
        {
          header: 'Welcome to Game Zone',
          subHeader: '',
          body: 'Experience the ultimate gaming experience',
          type: 'info'
          //autoDismiss:5000,
        }

       ];

        timer = setInterval(() => {  
          this.softNotifyService.launchNotification(this.notifications[this.index]);
          this.index++;
          if(this.index === this.notifications.length){
            clearTimeout(this.timer); 
          }
        }, 1000);


    //subscribing for onDismissNotification event for all notifications
    onDismissNotification (event:Notification) { 
       console.info("dismissed Notification:", event);
    };
 }