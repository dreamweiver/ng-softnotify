(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/common')) :
    typeof define === 'function' && define.amd ? define('ng-softnotify', ['exports', '@angular/core', '@angular/common'], factory) :
    (global = global || self, factory(global['ng-softnotify'] = {}, global.ng.core, global.ng.common));
}(this, function (exports, core, common) { 'use strict';

    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    function __decorate(decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __metadata(metadataKey, metadataValue) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    var SoftNotifyService = /** @class */ (function () {
        function SoftNotifyService() {
            this.notifications = [];
        }
        SoftNotifyService.prototype.launchNotification = function (notification) {
            this.notifications.push(notification);
        };
        SoftNotifyService = __decorate([
            core.Injectable()
        ], SoftNotifyService);
        return SoftNotifyService;
    }());

    var SoftNotifyComponent = /** @class */ (function () {
        function SoftNotifyComponent(softNotifyService) {
            var _this = this;
            this.softNotifyService = softNotifyService;
            this.onDismiss = new core.EventEmitter();
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
            };
            // Initialise the Notification object with timer(if Auto Dimiss configured)    
            this.onInit = function (notification) {
                notification.__isExpired = false; // flag to filter out expired notifications
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
            core.Output(),
            __metadata("design:type", Object)
        ], SoftNotifyComponent.prototype, "onDismiss", void 0);
        __decorate([
            core.Input(),
            __metadata("design:type", String)
        ], SoftNotifyComponent.prototype, "direction", void 0);
        SoftNotifyComponent = __decorate([
            core.Component({
                //  it also helps angular compilation engine in understanding the code
                selector: 'ng-softnotify',
                providers: [],
                // When the component or any of its sub-components inject X, 
                // they get the component service instance, not the NgModule service instance.
                template: "<main>\r\n <div class=\"notification-cont\" [ngClass]=\"getFlowClass()\">\r\n  <ng-container *ngFor=\"let notification of softNotifyService.notifications; last as islast\">\r\n    <div class=\"notification repeated-item\" *ngIf = \"!notification.__isExpired\">\r\n      <ng-container *ngIf=\"notification.type === 'chat'\">  \r\n        <div class=\"notification-header\" [ngClass]=\"notification.status\" (onInitNotification)=\"onInit(notification)\" >\r\n          <div class=\"header-content\" >\r\n            <img class=\"notification-icon\" [src]=\"'https://raw.githubusercontent.com/dreamweiver/ng-softnotify/master/src/assets/images/'+ notification.avatar +'.svg?sanitize=true'\" >\r\n         \r\n\r\n            <span class=\"header-txt\">{{notification.header}}</span>\r\n            <span class=\"sub-txt\">{{notification.subHeader}}</span>\r\n            <span class=\"close-icon\" (click)=\"onDismissNotification(notification)\"> <img src=\"https://raw.githubusercontent.com/dreamweiver/ng-softnotify/master/src/assets/images/close.svg?sanitize=true\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"notification-body cont-chat\">\r\n          <div class=\"body-content\">\r\n            <span>{{notification.body}}</span>\r\n            <div><span class=\"time-val\">{{notification.time}}</span></div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"notification.type !== 'chat'\" >\r\n          <div class=\"notification_type cont-{{notification.type}}\" [ngClass]=\"notification.type\"></div>\r\n          <div class=\"notification_body cont-{{notification.type}}\">\r\n            <div class=\"notification_title\" [ngClass]=\"notification.type\">{{notification.header}}</div>\r\n            <div class=\"notification_desc\">{{notification.body}}</div>    \r\n          </div>\r\n          <div class=\"notification_ctrls cont-{{notification.type}}\"><span class=\"close-icon\" (click)=\"onDismissNotification(notification)\"> <img src=\"https://raw.githubusercontent.com/dreamweiver/ng-softnotify/master/src/assets/images/close.svg?sanitize=true\"></span></div>  \r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n  </div>\r\n</main>",
                styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto+Mono|Source+Sans+Pro);.notification-cont{position:absolute;z-index:999;top:10px;font-family:'Roboto Mono',monospace,'Source Sans Pro',sans-serif}.left-flow{left:10px}.right-flow{right:10px}.notification{padding:10px;width:300px;height:70px;position:relative}.notification span{padding:3px 5px}.notification .notification-header{width:100%;height:25px;border-radius:5px 5px 0 0;border-bottom-style:none;font-size:12px}.notification .notification-header .header-content{padding:3px;font-size:14px}.header-content span{margin-left:-3px}.online{border:.25px solid #79b546;background:#79b546;color:#34610e}.away{border:.25px solid #ffeb32;background:#fff599;color:#000}.offline{border:.25px solid #bebebe;background:#dadada;color:#a3a3a3}.header-txt{font-weight:700}.sub-txt{font-color:#aca796;font-size:10px;vertical-align:sub}.notification .notification-header .notification-icon{height:22px;width:22px;vertical-align:middle}.close-icon{float:right;padding:5px;cursor:pointer;width:15px;height:10px}.notification .notification-body{width:100%;height:55px;border-radius:0 0 5px 5px;border-top-style:none;font-size:15px;background:#fff;box-shadow:1px 2px 5px #7f7f7f}.notification .notification-body .body-content{padding:5px 8px;width:93%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#000}.notification .notification-body .time-val{float:right;font-size:10px}.notification_type{width:10%;height:100%;left:0;float:left;background-color:#d3d3d3}.notification_body{width:85%;height:100%;float:left;background-color:#fff;padding:3px 5px;box-sizing:border-box}.notification_title{font-weight:700;font-size:15px}.error{background-color:red}.cont-error{box-shadow:5px 3px 5px #e57f7f}.error.notification_title{color:red;background-color:#fff}.info{background-color:#66f}.cont-info{box-shadow:5px 3px 5px #a3a3d8}.info.notification_title{color:#66f;background-color:#fff}.warning{background-color:orange}.cont-warning{box-shadow:5px 3px 5px #e5c17f}.warning.notification_title{color:orange;background-color:#fff}.success{background-color:#79b546}.cont-success{box-shadow:5px 3px 5px #a3d0a3}.success.notification_title{color:#79b546;background-color:#fff}.notification_desc{font-size:12px;color:#aca796;padding-top:3px}.notification_ctrls{float:right;width:5%;color:#000;background-color:#fff;height:100%}"]
            }),
            __metadata("design:paramtypes", [SoftNotifyService])
        ], SoftNotifyComponent);
        return SoftNotifyComponent;
    }());

    var OnInitNotification = /** @class */ (function () {
        function OnInitNotification() {
            this.onInitNotification = new core.EventEmitter();
        }
        OnInitNotification.prototype.ngOnInit = function () {
            this.onInitNotification.emit();
        };
        __decorate([
            core.Output(),
            __metadata("design:type", core.EventEmitter)
        ], OnInitNotification.prototype, "onInitNotification", void 0);
        OnInitNotification = __decorate([
            core.Directive({
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
            core.NgModule({
                //  this helps angular compilation engine to compile the code in best possible way
                imports: [
                    common.CommonModule
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

    exports.SoftNotifyModule = SoftNotifyModule;
    exports.SoftNotifyService = SoftNotifyService;
    exports.ɵa = OnInitNotification;
    exports.ɵb = SoftNotifyComponent;

    Object.defineProperty(exports, '__esModule', { value: true });

}));
//# sourceMappingURL=ng-softnotify.umd.js.map
