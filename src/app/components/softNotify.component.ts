import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Notification } from './../interfaces/notification.interface';

import { SoftNotifyService } from './../services/softNotify.service';

declare var require: any;

@Component({   // component decorator function defines a angular component,
         //  it also helps angular compilation engine in understanding the code
  selector: 'ng-softnotify', // tag representing this component in HTML dom

  providers : [], // Component providers always supersede NgModule providers.
             // When the component or any of its sub-components inject X, 
             // they get the component service instance, not the NgModule service instance.

  templateUrl: './softNotify.component.html', // template for Soft Notify Component
  
  styleUrls: ['./softNotify.component.css'] // Soft Notify Component specific stylesheet
})
export class SoftNotifyComponent { 

  constructor(public softNotifyService: SoftNotifyService) {}

  @Output() onDismiss = new EventEmitter<Notification>();

  @Input() direction: string;
  
    /**
    Sample Alert Notification object structure
    notification = {
      header: 'Signal is weak',
      subHeader: '',
      body: 'Expect slowness in the app',
      type: 'warning'
      autoDismiss:5000, //optional property
    }
    */

    /**
      Sample Chat Notification object structure
      {
        header: 'Tony Stark',
        subHeader: 'is online now',
        body: 'whats up bud :)',
        type: 'chat',
        avatar:'iron-man',
        status:'online',
        time: '03:09',
        autoDismiss:5000 //optional property
      }
    */

    //OnDismiss event triggered when Notification is dismissed(manually or autoDismissed)
    onDismissNotification = (notification :Notification) => {
      notification.__isExpired = true;
      if(this.onDismiss) { 
        this.onDismiss.emit(notification);  //Notify subscriber with dismissed Notification object
      }
    };

    // Initialise the Notification object with timer(if Auto Dimiss configured)    
    onInit = (notification :Notification) => {
        notification.__isExpired = false; // flag to filter out expired notifications
        if(notification.autoDismiss) {
           let interval = notification.autoDismiss;
            setTimeout(() => {  
              this.onDismissNotification(notification);
            }, interval);
        }
    };

    getFlowClass = ()=> {
      let flClass = 'right-flow';

      if(this.direction === 'left-top') {
        flClass = 'left-flow';
      } else if (this.direction === 'right-top') {
        flClass = 'right-flow';
      }

      return flClass;
    }
}