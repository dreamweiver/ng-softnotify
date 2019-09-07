import { Injectable } from '@angular/core';
import  {Notification} from './../interfaces/notification.interface';
 
@Injectable()
export class SoftNotifyService {
  notifications: Notification[] = [];
 
  launchNotification(notification: Notification) {
    this.notifications.push(notification);
  }
  
 }