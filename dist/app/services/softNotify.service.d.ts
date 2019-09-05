import { Notification } from './../interfaces/notification.interface';
export declare class SoftNotifyService {
    notifications: Notification[];
    launchNotification(notification: Notification): void;
}
