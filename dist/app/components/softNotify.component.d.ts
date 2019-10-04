import { EventEmitter } from '@angular/core';
import { Notification } from './../interfaces/notification.interface';
import { SoftNotifyService } from './../services/softNotify.service';
export declare class SoftNotifyComponent {
    softNotifyService: SoftNotifyService;
    constructor(softNotifyService: SoftNotifyService);
    onDismiss: EventEmitter<Notification>;
    direction: string;
    animationType: string;
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
    onDismissNotification: (notification: Notification) => void;
    onInit: (notification: Notification) => void;
    getFlowClass: () => string;
}
