# Ng-SoftNotify

 ng-softNotify is a generic notification component powered by Angular 2.0+. The notifications can be a simple notification like an alert,warning,info or it might be something more intuitive like a chat notification containing subject, msg-body, timestamp, online/offline status etc.,

### Live Example

click here [Ng-SoftNotify](https://dreamweiver.github.io/ng-softnotify/dist/index.html)


### Installing

Run the below npm command to install ng-softnotify & its dependencies to your project

```
npm install ng-softnotify
```

Main Features
----------------
+    Easy & simple configurations.
+    Silent Notifications, notifications which wouldnt require any user attention.
+    Configurable Alert notifications, currently supports (Success, Error, Warning, Info)
+    Intuitive Chat Notifications which come with predefined lovely avatars (Iron Man, captain america, Ninja turtle, etc.,)
+    Notifications can be placed on left of right side of the screen. default is right.
+    Optional event handler to track the notifications when removed from view, mostly needed when working with Chat notifications. 


How to use Ng-SoftNotify?
--------------------
### Prerequisites ###
**ng-softnotify** uses angular animations for showcasing the notifications on screen, so install & import the `BrowserAnimationsModule` in your applications root module.
```
npm install @angular/platform-browser/animations
```

```html
 import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

 ...

 imports: [
     ...
     BrowserAnimationsModule  
  ],
```


### Importing the SoftNotifyModule ###
Import SoftNotifyModule in your appllications root module.

```html
 import {SoftNotifyModule} from 'ng-softnotify';

 ...

 imports: [
     ...
     SoftNotifyModule  
  ],
```

### Launching Notification/Alert ###
Use `<ng-softnotify>` element in your html template & pass following optional attribute values (this remains as global settings for all notifications displayed within this view or instance)

+ Direction [input] *optional* : Flow direction to showcase the notifications, possible values are `left-top`, `right-top` (default value).

+ `onDismissNotification` [event]  (optional): When notifications are dimissed voluntarily or after time elpase, `onDismissNotfication` would be triggered, user can listen to this event by passing a event handler(function) reference to it. 

```html
<ng-softnotify (onDismiss)="onDismissNotification($event)" [direction]="'left-top'"></ng-softnotify>

```



Import `SoftNotifyService`  from `SoftNotifyModule` and call `launchNotification` with appropriate `Notification` object(Alert notification or Chat notification).
Refer to Avatars list(shown below) for various avatars and its code, which has to be passed as value for `avatar` property.


```html
 ...
    notifications: Notification [] = [ 
      {
          header: 'First Avenger',
          subHeader: 'is offline now',
          body: ' Hi there buddy!!!',
          type: 'chat',
          avatar :'captain-america',
          status : 'offline',
          time: '02:55', 
          autoDismiss:3000 //optional property
        },
        {
          header: 'Data saved successfully',
          subHeader: '',
          body: 'Screen will be updated with latest data',
          type: 'success'
          autoDismiss:50 //optional property
        }];

this.softNotifyService.launchNotification(this.notifications[0]); //launching the notification


```

### Cool avatars available for Chat Notification (use code) ###
+ Iron Man (iron-man)
+ Captain America (captain-america)
+ Scream (scream)
+ Ninja Turle (ninja-turtle)
+ Astronaut (astronaut)
+ Alien (alien)
+ Theatre Mask (theatre-mask)
+ Martian (martian)
+ Predator (predator)

## Contributing

Please read [CONTRIBUTING.md](https://github.com/dreamweiver/ng-softnotify/blob/master/CONTRIBUTING.md) for details on our code of conduct, and the process for submitting pull requests

## Versioning

We use [SemVer](http://semver.org/) for versioning. 

## Authors

* **Manoj Lakshman** - [Dreamweiver](https://github.com/dreamweiver)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details

## Acknowledgments

* Special thanks to [icon8](https://tympanus.net/codrops/2015/07/20/freebie-cinema-icon-set/) team for giving lovely avatars 
