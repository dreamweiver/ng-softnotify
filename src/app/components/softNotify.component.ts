import { Component, Input, Output, EventEmitter} from '@angular/core';
import { Notification } from './../interfaces/notification.interface';
import { SoftNotifyService } from './../services/softNotify.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { bounceInAndOut, enterAndLeaveFromLeft, enterAndLeaveFromRight, fadeInAndOut,
  fadeInThenOut, growInShrinkOut, swingInAndOut } from './../common/triggers';

declare var require: any;

@Component({   // component decorator function defines a angular component,
         //  it also helps angular compilation engine in understanding the code
  selector: 'ng-softnotify', // tag representing this component in HTML dom

  providers : [], // Component providers always supersede NgModule providers.
             // When the component or any of its sub-components inject X, 
             // they get the component service instance, not the NgModule service instance.
  animations: [
    // trigger(
    //   'enterAnimation', [
    //     transition(':enter', [
    //       style({transform: 'translateX(100%)', opacity: 0}),
    //       animate('500ms', style({transform: 'translateX(0)', opacity: 1}))
    //     ]),
    //     transition(':leave', [
    //       style({transform: 'translateX(0)', opacity: 1}),
    //       animate('500ms', style({transform: 'translateX(100%)', opacity: 0}))
    //     ])
    //   ]
    // )
     // trigger('shrinkOut', [
     //    state('in', style({ height: '*' })),
     //    transition('* => void', [
     //      style({ height: '*' }),
     //      animate(500, style({ height: 0 }))
     //    ])
     //  ])
    //  trigger('fadeIn', [
    //   transition(':enter', [
    //     style({ opacity: '0' }),
    //     animate('.5s ease-out', style({ opacity: '1' })),
    //   ]),
    // ])
    // trigger('bounceInAndOut', [
    //   transition(':enter', useAnimation(animations.bounceInUp)),
    //   transition(':leave', useAnimation(animations.bounceOutDown)),
    // ]),
    growInShrinkOut, fadeInThenOut, swingInAndOut, fadeInAndOut,
    enterAndLeaveFromLeft, enterAndLeaveFromRight, bounceInAndOut,
  ],
  templateUrl: './softNotify.component.html', // template for Soft Notify Component
  
  styleUrls: ['./softNotify.component.css'] // Soft Notify Component specific stylesheet
})
export class SoftNotifyComponent { 

  constructor(public softNotifyService: SoftNotifyService) {}

  @Output() onDismiss = new EventEmitter<Notification>();

  @Input() direction: string;

  @Input() animationType: string;
  
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

      this.softNotifyService.deleteNotification(notification);
    };

    // Initialise the Notification object with timer(if Auto Dimiss configured)    
    onInit = (notification :Notification) => {
        notification.__isExpired = false; // flag to filter out expired notifications
        notification.__uniqueId = new Date().valueOf();
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