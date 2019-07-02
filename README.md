# Ng-SoftNotify

 ng-softNotify is a generic notification component developed using Angular 8.0. The notifications can be a simple notification like an alert/warning/info or it may be something more intuitive like a chat notification.

### Live Example

[Ng-SoftNotify](https://dreamweiver.github.io/ng-softnotify)


### Installing

Run the below script to install on dependencies on the root directory after cloning the project

```
npm install
```

Main Features
----------------
+    Easy & simple configurations.
+    Silent Notifications, notifications which wouldnt require any user attention.
+    Configurable Notifications types , currently supports (Success, Error, Warning, Info)
+    Intuitive Chat Notifications which come with predefined lovely avatars (Iron Man, captain america, Ninja turtle, etc.,)
+    Optional event handler to track the notifications after they are destroyed, mostly needed when working Chat notifications.  


How to use Ng-SoftNotify?
--------------------

### Importing the SoftNotifyModule ###
Import SoftNotifyModule in your app's module by placing it in `imports` array.
```html
 import { SoftNotifyModule } from './softNotify/softNotify.module';

 ...

 imports: [
     ...
     SoftNotifyModule  
  ],
```

### Launching Notification/Alert ###
Use `<ng-softnotify>` element in your target html template and pass a callback to subscribe for `onDismissNotification` event (optional).

```html
<ng-softnotify (onDismiss)="onDismissNotification($event)"></ng-softnotify>

```

Import `SoftNotifyService`  from `SoftNotifyModule` and call `launchNotification` with appropriate `Notification` object(Alert notification or Chat notification).


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

this.softNotifyService.launchNotification(this.notifications[0]); //lauching the notification


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

Developer ? Need to customise or extend the ng-softNotify in the code level ?
--------------------

After making respective code changes, open the terminal (go to root folder) and run following webpack build command

```
npm run build
```

After succesfully building application , run following command to host the app over dev-server

```
npm run start
```

*Update the respective `webpack.[dev/test].js` config file name under teh root `webpack.config.js`. By default `webpack.dev.js` hosts the app over webpack dev-server*

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
