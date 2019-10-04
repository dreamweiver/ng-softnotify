import { __decorate, __metadata } from 'tslib';
import { Injectable, EventEmitter, Output, Input, Component, Directive, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { animation, animate, style, group, useAnimation, keyframes, trigger, transition, state } from '@angular/animations';

var SoftNotifyService = /** @class */ (function () {
    function SoftNotifyService() {
        this.notifications = [];
    }
    SoftNotifyService.prototype.launchNotification = function (notification) {
        this.notifications.push(notification);
    };
    SoftNotifyService.prototype.deleteNotification = function (notification) {
        var deleteIndex = this.notifications.indexOf(notification);
        this.notifications.splice(deleteIndex, 1);
    };
    SoftNotifyService = __decorate([
        Injectable()
    ], SoftNotifyService);
    return SoftNotifyService;
}());

/** Many of the following animations were inspired by: (inspired by: https://daneden.github.io/animate.css/) */
/**
 * shrink and grow are used within most enter/leave animations so surrounding elements will appropriately slide
 */
var shrink = animation(animate('{{time}}', style({ height: '0px', paddingTop: '0px', paddingBottom: '0px', marginTop: '0px', marginBottom: '0px' })), { params: { time: '200ms' } });
var grow = animation([
    style({ height: '0px', paddingTop: '0px', paddingBottom: '0px', marginTop: '0px', marginBottom: '0px' }),
    animate('{{time}}', style({ height: '*', paddingTop: '*', paddingBottom: '*', marginTop: '*', marginBottom: '*' })),
], { params: { time: '200ms' } });
var slideFadeIn = animation([
    style({ opacity: '0', transform: 'translateX({{startPos}})' }),
    group([
        useAnimation(grow),
        animate('{{time}}', style({ opacity: '1', transform: '*' })),
    ]),
], { params: { time: '200ms', startPos: '100%' } });
/**
 * fade in while sliding horizontally.
 *
 * @param time the duration of the animation
 * @param startPos the location that the element should start from before moving to its final position.
 * use a negative value to start to the left
 */
function useSlideFadeInAnimation(time, startPos) {
    if (time === void 0) { time = '200ms'; }
    if (startPos === void 0) { startPos = '100%'; }
    return useAnimation(slideFadeIn, { params: { time: time, startPos: startPos } });
}
var slideFadeOut = animation([
    group([
        useAnimation(shrink, { params: { time: '{{time}}' } }),
        animate('{{time}}', style({ opacity: '0', transform: 'translateX({{endPos}})' })),
    ]),
], { params: { time: '200ms', endPos: '100%' } });
/**
 * fade out while sliding horizontally.
 *
 * @param time the duration of the animation
 * @param endPos the amount that the element should move (horizontally) by the end of the animation.
 * Use a negative value to move left
 */
function useSlideFadeOutAnimation(time, endPos) {
    if (time === void 0) { time = '200ms'; }
    if (endPos === void 0) { endPos = '100%'; }
    return useAnimation(slideFadeOut, { params: { time: time, endPos: endPos } });
}
var growIn = animation([
    style({ height: '0px', transform: 'scaleY(0)' }),
    group([
        useAnimation(grow, { params: { time: '{{time}}' } }),
        animate('{{time}}', style({ transform: '*' })),
    ]),
], { params: { time: '200ms' } });
/**
 * start at 0px height and grow to full height without any opacity changes
 * @param time the duration of the animation
 */
function useGrowInAnimation(time) {
    if (time === void 0) { time = '200ms'; }
    return useAnimation(growIn, { params: { time: time } });
}
var shrinkOut = animation(group([
    useAnimation(shrink, { params: { time: '{{time}}' } }),
    animate('{{time}}', style({ transform: 'scaleY(0)' })),
]), { params: { time: '200ms' } });
/**
 * shrink to 0px height without any opacity changes
 * @param time the duration of the animation
 */
function useShrinkOutAnimation(time) {
    if (time === void 0) { time = '200ms'; }
    return useAnimation(shrinkOut, { params: { time: time } });
}
var swingIn = animation([
    style({ transformOrigin: '50% 0px', transform: 'perspective(500px) rotate3d(1, 0, 0, 90deg)' }),
    group([
        useAnimation(grow, { params: { time: '200ms' } }),
        animate('{{time}}', keyframes([
            style({ transform: 'perspective(500px) rotate3d(1, 0, 0, -70deg)' }),
            style({ transform: 'perspective(500px) rotate3d(1, 0, 0, 40deg)' }),
            style({ transform: 'perspective(500px) rotate3d(1, 0, 0, -15deg)' }),
            style({ transform: 'perspective(500px) rotate3d(1, 0, 0, 0deg)' }),
        ])),
    ]),
], { params: { time: '600ms' } });
/**
 * rotate element in on the X axis as if it is hanging on a hinge.
 * @param time the duration of the animation
 */
function useSwingInAnimation(time) {
    if (time === void 0) { time = '600ms'; }
    return useAnimation(swingIn, { params: { time: time } });
}
var swingOut = animation([
    animate('{{time}}', keyframes([
        style([{ transformOrigin: '50% 0px', transform: 'perspective(500px) rotate3d(1, 0, 0, 0deg)' }, { offset: 0 }]),
        style([{ transform: 'perspective(500px) rotate3d(1, 0, 0, -30deg)' }, { offset: 0.3 }]),
        style([{ transform: 'perspective(500px) rotate3d(1, 0, 0, 90deg)' }, { offset: 1 }]),
    ])),
    useAnimation(shrink, { params: { time: '200ms' } }),
], { params: { time: '600ms' } });
/**
 * rotate element out on the X axis until it is facing up and invisible to the user
 * @param time the duration of the animation
 */
function useSwingOutAnimation(time) {
    if (time === void 0) { time = '300ms'; }
    return useAnimation(swingOut, { params: { time: time } });
}
var bounceInUp = animation([
    style([{ opacity: 0 }]),
    useAnimation(grow, { params: { time: '200ms' } }),
    animate('{{time}} cubic-bezier(0.215, 0.610, 0.355, 1.000)', keyframes([
        style([{ opacity: 0, transform: 'translate3d(0, 20px, 0)', offset: 0 }]),
        style([{ opacity: 1, transform: 'translate3d(0, -20px, 0)' }, { offset: 0.5 }]),
        style([{ transform: 'translate3d(0, 10px, 0)' }, { offset: 0.75 }]),
        style([{ transform: 'translate3d(0, -5px, 0)' }, { offset: 0.95 }]),
        style([{ transform: 'translate3d(0, 0, 0)' }, { offset: 1 }]),
    ])),
], { params: { time: '600ms' } });
/**
 * bounce from below
 * @param time the duration of the animation
 */
function useBounceInUpAnimation(time) {
    if (time === void 0) { time = '200ms'; }
    return useAnimation(bounceInUp, { params: { time: time } });
}
var bounceOutDown = animation([
    animate('{{time}}', keyframes([
        style([{ transform: 'translate3d(0, -5px, 0)' }, { offset: 0.05 }]),
        style([{ transform: 'translate3d(0, 10px, 0)' }, { offset: 0.25 }]),
        style([{ opacity: 1, transform: 'translate3d(0, -20px, 0)' }, { offset: .5 }]),
        style([{ opacity: 0, transform: 'translate3d(0, 20px, 0)' }, { offset: 1 }]),
    ])),
    useAnimation(shrink),
], { params: { time: '600ms' } });
/**
 * bounce down to the area below
 * @param time The duration of the animation
 */
function useBounceOutDownAnimation(time) {
    if (time === void 0) { time = '200ms'; }
    return useAnimation(bounceOutDown, { params: { time: time } });
}

/**
 * BounceInUp and BounceOutDown: (inspired by: https://daneden.github.io/animate.css/)
 */
var bounceInAndOut = trigger('bounceInAndOut', [
    transition(':enter', useAnimation(bounceInUp)),
    transition(':leave', useAnimation(bounceOutDown)),
]);
/**
 * grow or shrink when the element enters or leaves.
 */
var growInShrinkOut = trigger('growInShrinkOut', [
    transition(':enter', useAnimation(growIn)),
    transition(':leave', useAnimation(shrinkOut)),
]);
/**
 * add this trigger to an element to add a simple fade animation, sliding to and from the right when entering or leaving
 */
var enterAndLeaveFromRight = trigger('enterAndLeaveFromRight', [
    transition(':enter', useAnimation(slideFadeIn)),
    transition(':leave', useAnimation(slideFadeOut)),
]);
/**
 * add this trigger to an element to add a simple fade animation, sliding to and from the left when entering or leaving
 */
var enterAndLeaveFromLeft = trigger('enterAndLeaveFromLeft', [
    transition(':enter', useSlideFadeInAnimation(undefined, '-100%')),
    transition(':leave', useSlideFadeOutAnimation(undefined, '-100%')),
]);
/**
 * add this trigger to an element to add a simple fade animation when entering or leaving the dom
 */
var fadeInAndOut = trigger('fadeInAndOut', [
    transition(':enter', useSlideFadeInAnimation(undefined, '0px')),
    transition(':leave', useSlideFadeOutAnimation(undefined, '0px')),
]);
/**
 * swing the element when it first enters or leaves the DOM
 */
var swingInAndOut = trigger('swingInAndOut', [
    transition(':enter', useAnimation(swingIn)),
    transition(':leave', useAnimation(swingOut)),
]);
/**
 * Fade in, pause, then fade out
 * like a page indicator when scrolling in most PDF viewers (including ngWebViewer).
 *
 * To use, set trigger equal to a value. Whenever that value changes, the animation will run.
 */
var fadeInThenOut = trigger('fadeInThenOut', [
    state('*', style({ opacity: 0 })),
    transition('* => *', [
        animate('200ms', style({ opacity: 1 })),
        animate('500ms 1s ease-out', style({ opacity: 0 })),
    ]),
]);

var SoftNotifyComponent = /** @class */ (function () {
    function SoftNotifyComponent(softNotifyService) {
        var _this = this;
        this.softNotifyService = softNotifyService;
        this.onDismiss = new EventEmitter();
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
        this.onDismissNotification = function (notification) {
            notification.__isExpired = true;
            if (_this.onDismiss) {
                _this.onDismiss.emit(notification); //Notify subscriber with dismissed Notification object
            }
            _this.softNotifyService.deleteNotification(notification);
        };
        // Initialise the Notification object with timer(if Auto Dimiss configured)    
        this.onInit = function (notification) {
            notification.__isExpired = false; // flag to filter out expired notifications
            notification.__uniqueId = new Date().valueOf();
            if (notification.autoDismiss) {
                var interval = notification.autoDismiss;
                setTimeout(function () {
                    _this.onDismissNotification(notification);
                }, interval);
            }
        };
        this.getFlowClass = function () {
            var flClass = 'right-flow';
            if (_this.direction === 'left-top') {
                flClass = 'left-flow';
            }
            else if (_this.direction === 'right-top') {
                flClass = 'right-flow';
            }
            return flClass;
        };
    }
    __decorate([
        Output(),
        __metadata("design:type", Object)
    ], SoftNotifyComponent.prototype, "onDismiss", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SoftNotifyComponent.prototype, "direction", void 0);
    __decorate([
        Input(),
        __metadata("design:type", String)
    ], SoftNotifyComponent.prototype, "animationType", void 0);
    SoftNotifyComponent = __decorate([
        Component({
            //  it also helps angular compilation engine in understanding the code
            selector: 'ng-softnotify',
            providers: [],
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
            template: "<main>\r\n <div class=\"notification-cont\" [ngClass]=\"getFlowClass()\">\r\n  <div *ngFor=\"let notification of softNotifyService.notifications; last as islast\" [@bounceInAndOut]>\r\n    <div class=\"notification repeated-item\"  *ngIf = \"!notification.__isExpired\"  >\r\n      <ng-container *ngIf=\"notification.type === 'chat'\">  \r\n        <div class=\"notification-header\" [ngClass]=\"notification.status\" (onInitNotification)=\"onInit(notification)\" >\r\n          <div class=\"header-content\" >\r\n            <img class=\"notification-icon\" [src]=\"'https://raw.githubusercontent.com/dreamweiver/ng-softnotify/master/src/assets/images/'+ notification.avatar +'.svg?sanitize=true'\" >\r\n         \r\n\r\n            <span class=\"header-txt\">{{notification.header}}</span>\r\n            <span class=\"sub-txt\">{{notification.subHeader}}</span>\r\n            <span class=\"close-icon\" (click)=\"onDismissNotification(notification)\"> <img src=\"https://raw.githubusercontent.com/dreamweiver/ng-softnotify/master/src/assets/images/close.svg?sanitize=true\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"notification-body cont-chat\">\r\n          <div class=\"body-content\">\r\n            <span>{{notification.body}}</span>\r\n            <div><span class=\"time-val\">{{notification.time}}</span></div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"notification.type !== 'chat'\" >\r\n          <div class=\"notification_type cont-{{notification.type}}\" [ngClass]=\"notification.type\"></div>\r\n          <div class=\"notification_body cont-{{notification.type}}\">\r\n            <div class=\"notification_title\" [ngClass]=\"notification.type\">{{notification.header}}</div>\r\n            <div class=\"notification_desc\">{{notification.body}}</div>    \r\n          </div>\r\n          <div class=\"notification_ctrls cont-{{notification.type}}\"><span class=\"close-icon\" (click)=\"onDismissNotification(notification)\"> <img src=\"https://raw.githubusercontent.com/dreamweiver/ng-softnotify/master/src/assets/images/close.svg?sanitize=true\"></span></div>  \r\n      </ng-container>\r\n    </div>\r\n  </div>\r\n  </div>\r\n</main>",
            styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto+Mono|Source+Sans+Pro);.notification-cont{position:absolute;z-index:999;top:10px;font-family:'Roboto Mono',monospace,'Source Sans Pro',sans-serif}.left-flow{left:10px}.right-flow{right:10px}.notification{padding:10px;width:300px;height:70px;position:relative}.notification span{padding:3px 5px}.notification .notification-header{width:100%;height:25px;border-radius:5px 5px 0 0;border-bottom-style:none;font-size:12px;box-shadow:1px 2px 5px #7f7f7f}.notification .notification-header .header-content{padding:3px;font-size:14px}.header-content span{margin-left:-3px}.online{background:#79b546;color:#34610e}.away{background:#fff599;color:#000}.offline{background:#dadada;color:#a3a3a3}.header-txt{font-weight:700}.sub-txt{font-color:#aca796;font-size:10px;vertical-align:sub}.notification .notification-header .notification-icon{height:22px;width:22px;vertical-align:middle}.close-icon{float:right;padding:5px;cursor:pointer;width:15px;height:10px}.notification .notification-body{width:100%;height:55px;border-radius:0 0 5px 5px;border-top-style:none;font-size:15px;background:#fff;box-shadow:1px 2px 5px #7f7f7f}.notification .notification-body .body-content{padding:5px 8px;width:93%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#000}.notification .notification-body .time-val{float:right;font-size:10px}.notification_type{width:10%;height:100%;left:0;float:left;background-color:#d3d3d3}.notification_body{width:85%;height:100%;float:left;background-color:#fff;padding:3px 5px;box-sizing:border-box}.notification_title{font-weight:700;font-size:15px}.error{background-color:red}.cont-error{box-shadow:5px 3px 5px #e57f7f}.error.notification_title{color:red;background-color:#fff}.info{background-color:#66f}.cont-info{box-shadow:5px 3px 5px #a3a3d8}.info.notification_title{color:#66f;background-color:#fff}.warning{background-color:orange}.cont-warning{box-shadow:5px 3px 5px #e5c17f}.warning.notification_title{color:orange;background-color:#fff}.success{background-color:#79b546}.cont-success{box-shadow:5px 3px 5px #a3d0a3}.success.notification_title{color:#79b546;background-color:#fff}.notification_desc{font-size:12px;color:#aca796;padding-top:3px}.notification_ctrls{float:right;width:5%;color:#000;background-color:#fff;height:100%}"]
        }),
        __metadata("design:paramtypes", [SoftNotifyService])
    ], SoftNotifyComponent);
    return SoftNotifyComponent;
}());

var OnInitNotification = /** @class */ (function () {
    function OnInitNotification() {
        this.onInitNotification = new EventEmitter();
    }
    OnInitNotification.prototype.ngOnInit = function () {
        this.onInitNotification.emit();
    };
    __decorate([
        Output(),
        __metadata("design:type", EventEmitter)
    ], OnInitNotification.prototype, "onInitNotification", void 0);
    OnInitNotification = __decorate([
        Directive({
            selector: '[onInitNotification]'
        }),
        __metadata("design:paramtypes", [])
    ], OnInitNotification);
    return OnInitNotification;
}());

var SoftNotifyModule = /** @class */ (function () {
    function SoftNotifyModule() {
    }
    SoftNotifyModule = __decorate([
        NgModule({
            //  this helps angular compilation engine to compile the code in best possible way
            imports: [
                CommonModule
            ],
            declarations: [
                OnInitNotification, SoftNotifyComponent
            ],
            providers: [SoftNotifyService],
            exports: [SoftNotifyComponent]
        })
    ], SoftNotifyModule);
    return SoftNotifyModule;
}()); // export this class so that it accessible for other classes

/**
 * Generated bundle index. Do not edit.
 */

export { SoftNotifyModule, SoftNotifyService, OnInitNotification as ɵa, SoftNotifyComponent as ɵb, bounceInAndOut as ɵc, growInShrinkOut as ɵd, enterAndLeaveFromRight as ɵe, enterAndLeaveFromLeft as ɵf, fadeInAndOut as ɵg, swingInAndOut as ɵh, fadeInThenOut as ɵi, slideFadeIn as ɵj, useSlideFadeInAnimation as ɵk, slideFadeOut as ɵl, useSlideFadeOutAnimation as ɵm, growIn as ɵn, shrinkOut as ɵo, swingIn as ɵp, swingOut as ɵq, bounceInUp as ɵr, bounceOutDown as ɵs };
//# sourceMappingURL=ng-softnotify.js.map
