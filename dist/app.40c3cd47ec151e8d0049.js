webpackJsonp([1],{150:function(n,t,o){"use strict";var i=this&&this.__decorate||function(n,t,o,i){var e,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,o,i);else for(var c=n.length-1;c>=0;c--)(e=n[c])&&(a=(r<3?e(a):r>3?e(t,o,a):e(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0});var e=o(23),r=function(){function SoftNotifyService(){this.notifications=[]}return SoftNotifyService.prototype.launchNotification=function(n){this.notifications.push(n)},SoftNotifyService=i([e.Injectable()],SoftNotifyService)}();t.SoftNotifyService=r},303:function(n,t,o){n.exports=o.p+"assets/close.021a8250b831fdfd1d0b24fc5d95f9be.svg"},807:function(n,t,o){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var i=o(198),e=o(23),r=o(808);e.enableProdMode(),i.platformBrowserDynamic().bootstrapModule(r.AppModule)},808:function(n,t,o){"use strict";var i=this&&this.__decorate||function(n,t,o,i){var e,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,o,i);else for(var c=n.length-1;c>=0;c--)(e=n[c])&&(a=(r<3?e(a):r>3?e(t,o,a):e(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0});var e=o(23),r=o(67),a=o(809),c=o(823),s=function(){function AppModule(){}return AppModule=i([e.NgModule({imports:[r.BrowserModule,a.SoftNotifyModule],declarations:[c.DashboardComponent],providers:[],bootstrap:[c.DashboardComponent]})],AppModule)}();t.AppModule=s},809:function(n,t,o){"use strict";var i=this&&this.__decorate||function(n,t,o,i){var e,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,o,i);else for(var c=n.length-1;c>=0;c--)(e=n[c])&&(a=(r<3?e(a):r>3?e(t,o,a):e(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a};Object.defineProperty(t,"__esModule",{value:!0});var e=o(23),r=o(68),a=o(810),c=o(822),s=o(150),f=function(){function SoftNotifyModule(){}return SoftNotifyModule=i([e.NgModule({imports:[r.CommonModule],declarations:[c.OnInitNotification,a.SoftNotifyComponent],exports:[a.SoftNotifyComponent],providers:[s.SoftNotifyService],bootstrap:[]})],SoftNotifyModule)}();t.SoftNotifyModule=f},810:function(n,t,o){"use strict";var i=this&&this.__decorate||function(n,t,o,i){var e,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,o,i);else for(var c=n.length-1;c>=0;c--)(e=n[c])&&(a=(r<3?e(a):r>3?e(t,o,a):e(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},e=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)};Object.defineProperty(t,"__esModule",{value:!0});var r=o(23),a=o(150),c=function(){function SoftNotifyComponent(n){this.softNotifyService=n,this.onDismiss=new r.EventEmitter,this.onDismissNotification=function(n){n.__isExpired=!0,this.onDismiss&&this.onDismiss.emit(n)},this.onInit=function(n){var t=this;if(n.__isExpired=!1,n.autoDismiss){var o=n.autoDismiss;setTimeout(function(){t.onDismissNotification(n)},o)}}}return i([r.Output(),e("design:type",Object)],SoftNotifyComponent.prototype,"onDismiss",void 0),SoftNotifyComponent=i([r.Component({selector:"ng-softnotify",providers:[],template:o(811),styles:[o(821)]}),e("design:paramtypes",[a.SoftNotifyService])],SoftNotifyComponent)}();t.SoftNotifyComponent=c},811:function(n,t,o){n.exports='<main>\r\n <div class="notification-cont">\r\n  <ng-container *ngFor="let notification of softNotifyService.notifications; last as islast">\r\n    <div class="notification repeated-item "  *ngIf = "!notification.__isExpired">\r\n      <ng-container *ngIf="notification.type === \'chat\'">  \r\n        <div class="notification-header" [ngClass]="notification.status" (onInitNotification)="onInit(notification)" >\r\n          <div class="header-content">\r\n            <img class="notification-icon" src="'+o(812)+'" *ngIf = "notification.avatar===\'captain-america\'">\r\n            <img class="notification-icon" src="'+o(813)+'" *ngIf = "notification.avatar ===\'iron-man\'">\r\n            <img class="notification-icon" src="'+o(814)+'" *ngIf = "notification.avatar ===\'martian\'">\r\n            <img class="notification-icon" src="'+o(815)+'" *ngIf = "notification.avatar ===\'alien\'">\r\n            <img class="notification-icon" src="'+o(816)+'" *ngIf = "notification.avatar ===\'predator\'">\r\n            <img class="notification-icon" src="'+o(817)+'" *ngIf = "notification.avatar ===\'scream\'">\r\n            <img class="notification-icon" src="'+o(818)+'" *ngIf = "notification.avatar ===\'ninja-turtle\'">\r\n            <img class="notification-icon" src="'+o(819)+'" *ngIf = "notification.avatar ===\'theatre-mask\'">\r\n            <img class="notification-icon" src="'+o(820)+'" *ngIf = "notification.avatar ===\'astronaut\'">\r\n            <span class="header-txt">{{notification.header}}</span>\r\n            <span class="sub-txt">{{notification.subHeader}}</span>\r\n            <span class="close-icon" (click)="onDismissNotification(notification)"> <img src="'+o(303)+'"></span>\r\n          </div>\r\n        </div>\r\n        <div class="notification-body">\r\n          <div class="body-content">\r\n            <span>{{notification.body}}</span>\r\n            <div><span class="time-val">{{notification.time}}</span></div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf="notification.type !== \'chat\'" >\r\n          <div class="notification_type" [ngClass]="notification.type"></div>\r\n          <div class="notification_body">\r\n            <div class="notification_title" [ngClass]="notification.type">{{notification.header}}</div>\r\n            <div class="notification_desc">{{notification.body}}</div>    \r\n          </div>\r\n          <div class="notification_ctrls"><span class="close-icon" (click)="onDismissNotification(notification)"> <img src="'+o(303)+'"></span></div>  \r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n  </div>\r\n</main>'},812:function(n,t,o){n.exports=o.p+"assets/Captain America.99c0e418929315d4a1fc00b37d03195b.svg"},813:function(n,t,o){n.exports=o.p+"assets/Iron Man.0ee4141cd3a44598aaeea96244c059cd.svg"},814:function(n,t,o){n.exports=o.p+"assets/Martian.f2ec27cd6d3e491e6f0cac190f74a1cb.svg"},815:function(n,t,o){n.exports=o.p+"assets/Alien.0a202ce73816b1b150f59838899a9042.svg"},816:function(n,t,o){n.exports=o.p+"assets/Predator.d967511f4384b3ea6d83794256a95f38.svg"},817:function(n,t,o){n.exports=o.p+"assets/Scream.a01b6d9b0aeaeb719e07b91b2ed6e87d.svg"},818:function(n,t,o){n.exports=o.p+"assets/Ninja Turtle.6934a2ba01ccee3acbc21b406890fc6e.svg"},819:function(n,t,o){n.exports=o.p+"assets/Theatre Mask.5d6f56ff427abc5d72f992fc14a7bddf.svg"},820:function(n,t,o){n.exports=o.p+"assets/Astronaut.cd69e1fc451332f1b5ce6cb86c7ad051.svg"},821:function(n,t){n.exports="@import url('https://fonts.googleapis.com/css?family=Roboto+Mono|Source+Sans+Pro');\r\n\r\n.notification-cont {\r\n  position: absolute;\r\n  right: 10px;\r\n  z-index: 999;\r\n  top: 10px;\r\n  font-family: 'Roboto Mono', monospace, 'Source Sans Pro', sans-serif;\r\n  \r\n}\r\n.notification {\r\n  padding: 10px;\r\n  width: 300px;\r\n  height: 70px;\r\n  position: relative;\r\n}\r\n.notification span {\r\n  padding: 3px 5px;\r\n}\r\n.notification .notification-header {\r\n  width: 100%;\r\n  height: 25px;\r\n  border-radius: 5px 5px 0 0;\r\n  border-bottom-style: none;\r\n  font-size: 12px;\r\n}\r\n.notification .notification-header .header-content {\r\n  padding: 3px;\r\n  font-size:14px;\r\n}\r\n\r\n.header-content span {\r\n  margin-left: -8px;\r\n}\r\n\r\n.online {\r\n  border: 0.25px solid #79b546;\r\n  background: #79b546;\r\n  color: #34610e;\r\n}\r\n.away {\r\n  border: 0.25px solid #ffeb32;\r\n  background: #fff599;\r\n  color: black;\r\n}\r\n\r\n.offline {\r\n  border: 0.25px solid #bebebe;\r\n  background: #dadada;\r\n  color: #a3a3a3;\r\n}\r\n\r\n .header-txt {\r\n  font-weight: bold; \r\n}\r\n.sub-txt {\r\n  font-color:#aca796;\r\n  font-size:10px;\r\n  vertical-align: sub;\r\n}\r\n.notification .notification-header .notification-icon {\r\n  height:22px;\r\n  width:22px;\r\n  vertical-align:middle;\r\n}\r\n\r\n .close-icon {\r\n  float: right;\r\n  padding: 5px;\r\n  cursor: pointer;\r\n  width: 15px;\r\n  height: 10px;\r\n}\r\n.notification .notification-body {\r\n  width: 100%;\r\n  height: 55px;\r\n  border-radius: 0 0 5px 5px;\r\n  border-top-style: none;\r\n  font-size: 15px;\r\n  background: white;\r\n}\r\n.notification .notification-body .body-content {\r\n  padding: 5px 8px;\r\n  width: 93%;\r\n  white-space: nowrap;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  color:black;\r\n}\r\n.notification .notification-body .time-val {\r\n  float: right;\r\n  font-size: 10px;\r\n}\r\n\r\n.notification_type {\r\n  width:10%;\r\n  height:100%;\r\n  left:0;\r\n  float:left;\r\n  background-color:green;\r\n}\r\n\r\n.notification_body {\r\n  width:85%;\r\n  height:100%;\r\n  float:left;\r\n  background-color:#fff;\r\n  padding: 3px 5px;\r\n  box-sizing: border-box;\r\n}\r\n\r\n.notification_title {\r\n  font-weight:bold;\r\n  font-size:15px;\r\n}\r\n\r\n.error {\r\n  background-color:#ff0000;\r\n}\r\n\r\n.error.notification_title {\r\n  color :#ff0000;\r\n  background-color:#fff;\r\n} \r\n\r\n.info {\r\n  background-color :#6666ff;\r\n}\r\n\r\n.info.notification_title {\r\n  color :#6666ff;\r\n  background-color:#fff;\r\n} \r\n\r\n.warning {\r\n  background-color:#ffa500;\r\n}\r\n\r\n.warning.notification_title {\r\n  color :#ffa500;\r\n  background-color:#fff;\r\n} \r\n\r\n.success {\r\n  background-color:#79b546;\r\n}\r\n\r\n.success.notification_title {\r\n  color :#79b546;\r\n  background-color:#fff;\r\n} \r\n\r\n.notification_desc {\r\n  font-size:12px;\r\n  color:#aca796;\r\n  padding-top:3px;\r\n}\r\n\r\n.notification_ctrls {\r\n  float:right;\r\n  width:5%;\r\n  color:black;\r\n  background-color:#fff;\r\n  height:100%;\r\n}\r\n\r\n"},822:function(n,t,o){"use strict";var i=this&&this.__decorate||function(n,t,o,i){var e,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,o,i);else for(var c=n.length-1;c>=0;c--)(e=n[c])&&(a=(r<3?e(a):r>3?e(t,o,a):e(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},e=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)};Object.defineProperty(t,"__esModule",{value:!0});var r=o(23),a=function(){function OnInitNotification(){this.onInitNotification=new r.EventEmitter}return OnInitNotification.prototype.ngOnInit=function(){this.onInitNotification.emit()},i([r.Output(),e("design:type",r.EventEmitter)],OnInitNotification.prototype,"onInitNotification",void 0),OnInitNotification=i([r.Directive({selector:"[onInitNotification]"}),e("design:paramtypes",[])],OnInitNotification)}();t.OnInitNotification=a},823:function(n,t,o){"use strict";var i=this&&this.__decorate||function(n,t,o,i){var e,r=arguments.length,a=r<3?t:null===i?i=Object.getOwnPropertyDescriptor(t,o):i;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(n,t,o,i);else for(var c=n.length-1;c>=0;c--)(e=n[c])&&(a=(r<3?e(a):r>3?e(t,o,a):e(t,o))||a);return r>3&&a&&Object.defineProperty(t,o,a),a},e=this&&this.__metadata||function(n,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(n,t)};Object.defineProperty(t,"__esModule",{value:!0});var r=o(23),a=o(150);o(824);var c=function(){function DashboardComponent(n){var t=this;this.softNotifyService=n,this.notifications=[{header:"First Avenger",subHeader:"is offline now",body:" Hi there buddy!!!",type:"chat",avatar:"captain-america",status:"offline",time:"02:55"},{header:"Martian300",subHeader:"last active 5 mins ago",body:"Im Martian, we come in Peace",type:"chat",avatar:"martian",status:"away",time:"03:00"},{header:"Tony Stark",subHeader:"is online now",body:"whats up bud :)",type:"chat",avatar:"iron-man",status:"online",time:"03:09"},{header:"Data saved successfully",subHeader:"",body:"Screen will be updated with latest data",type:"success"},{header:"Connection lost",subHeader:"",body:"please wait until the connectity resumes",type:"error"},{header:"Signal is weak",subHeader:"",body:"Expect slowness in the app",type:"warning"},{header:"Welcome to Game Zone",subHeader:"",body:"Experience the ultimate gaming experience",type:"info"}],this.timer=setInterval(function(){t.softNotifyService.launchNotification(t.notifications[t.index]),++t.index===t.notifications.length&&clearTimeout(t.timer)},1e3),this.index=0}return DashboardComponent.prototype.onDismissNotification=function(n){console.info("dismissed Notification:",n)},DashboardComponent=i([r.Component({selector:"dashboard",providers:[],template:o(825),styles:[o(828)]}),e("design:paramtypes",[a.SoftNotifyService])],DashboardComponent)}();t.DashboardComponent=c},824:function(n,t){},825:function(n,t,o){n.exports='<main>\r\n<img class="wall" src="'+o(826)+'" >\r\n<div class="float">\r\n\t<img src="'+o(827)+'">\r\n    <div class="title">\r\n    \t<div class="app_name">Ng-Soft Notify</div>\r\n    \t<span class="app_tag">powered by Angular 5.0</span>\r\n    </div>\r\n</div>\r\n<ng-softnotify (onDismiss)="onDismissNotification($event)"></ng-softnotify>\r\n</main>'},826:function(n,t,o){n.exports=o.p+"assets/wall.c7d1e26e7f56825d3e3a3740c9ec40cd.jpg"},827:function(n,t,o){n.exports=o.p+"assets/angular.9db278d630f5fabd8e7ba16c2e329a3a.png"},828:function(n,t){n.exports="@import url('https://fonts.googleapis.com/css?family=Bungee');\r\n@import url('https://fonts.googleapis.com/css?family=Itim');\r\n\r\n.float {\r\n\tpadding:10px;\r\n}\r\n\r\n.float .title{\r\n\tposition:absolute;\r\n\ttop: 350px;\r\n}\r\n\r\n.wall {\r\n\twidth:100%;\r\n\theight:80%;\r\n}\r\n\r\n.app_name {\r\n\tfont-size:50px;\r\n\tfont-family: 'Bungee', cursive;\r\n}\r\n\r\n.app_tag {\r\n\tfont-size:20px;\r\n\tfont-family: 'Itim', cursive;\r\n\tfloat:right;\r\n\tmargin-top:-40px;\r\n}\r\n\r\n.float img {\r\n\tposition:absolute;\r\n\ttop:150px;\r\n}\r\n\r\n"}},[807]);