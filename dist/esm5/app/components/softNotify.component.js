import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SoftNotifyService } from './../services/softNotify.service';
import { bounceInAndOut, enterAndLeaveFromLeft, enterAndLeaveFromRight, fadeInAndOut, fadeInThenOut, growInShrinkOut, swingInAndOut } from './../common/triggers';
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
    tslib_1.__decorate([
        Output(),
        tslib_1.__metadata("design:type", Object)
    ], SoftNotifyComponent.prototype, "onDismiss", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SoftNotifyComponent.prototype, "direction", void 0);
    tslib_1.__decorate([
        Input(),
        tslib_1.__metadata("design:type", String)
    ], SoftNotifyComponent.prototype, "animationType", void 0);
    SoftNotifyComponent = tslib_1.__decorate([
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
        tslib_1.__metadata("design:paramtypes", [SoftNotifyService])
    ], SoftNotifyComponent);
    return SoftNotifyComponent;
}());
export { SoftNotifyComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29mdE5vdGlmeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zb2Z0bm90aWZ5LyIsInNvdXJjZXMiOlsiYXBwL2NvbXBvbmVudHMvc29mdE5vdGlmeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSxZQUFZLEVBQ2xGLGFBQWEsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFnRDlFO0lBRUUsNkJBQW1CLGlCQUFvQztRQUF2RCxpQkFBMkQ7UUFBeEMsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFtQjtRQUU3QyxjQUFTLEdBQUcsSUFBSSxZQUFZLEVBQWdCLENBQUM7UUFNckQ7Ozs7Ozs7OztVQVNFO1FBRUY7Ozs7Ozs7Ozs7OztVQVlFO1FBRUYscUZBQXFGO1FBQ3JGLDBCQUFxQixHQUFHLFVBQUMsWUFBMEI7WUFDakQsWUFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFFaEMsSUFBRyxLQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixLQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFFLHNEQUFzRDthQUMzRjtZQUVELEtBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUM7UUFFRiwrRUFBK0U7UUFDL0UsV0FBTSxHQUFHLFVBQUMsWUFBMEI7WUFDaEMsWUFBWSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQywyQ0FBMkM7WUFDN0UsWUFBWSxDQUFDLFVBQVUsR0FBRyxJQUFJLElBQUksRUFBRSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQy9DLElBQUcsWUFBWSxDQUFDLFdBQVcsRUFBRTtnQkFDMUIsSUFBSSxRQUFRLEdBQUcsWUFBWSxDQUFDLFdBQVcsQ0FBQztnQkFDdkMsVUFBVSxDQUFDO29CQUNULEtBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDM0MsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ2hCO1FBQ0wsQ0FBQyxDQUFDO1FBRUYsaUJBQVksR0FBRztZQUNiLElBQUksT0FBTyxHQUFHLFlBQVksQ0FBQztZQUUzQixJQUFHLEtBQUksQ0FBQyxTQUFTLEtBQUssVUFBVSxFQUFFO2dCQUNoQyxPQUFPLEdBQUcsV0FBVyxDQUFDO2FBQ3ZCO2lCQUFNLElBQUksS0FBSSxDQUFDLFNBQVMsS0FBSyxXQUFXLEVBQUU7Z0JBQ3pDLE9BQU8sR0FBRyxZQUFZLENBQUM7YUFDeEI7WUFFRCxPQUFPLE9BQU8sQ0FBQztRQUNqQixDQUFDLENBQUE7SUFsRXVELENBQUM7SUFFakQ7UUFBVCxNQUFNLEVBQUU7OzBEQUE4QztJQUU5QztRQUFSLEtBQUssRUFBRTs7MERBQW1CO0lBRWxCO1FBQVIsS0FBSyxFQUFFOzs4REFBdUI7SUFScEIsbUJBQW1CO1FBNUMvQixTQUFTLENBQUM7WUFDRixzRUFBc0U7WUFDN0UsUUFBUSxFQUFFLGVBQWU7WUFFekIsU0FBUyxFQUFHLEVBQUU7WUFDSCw2REFBNkQ7WUFDN0QsOEVBQThFO1lBQ3pGLFVBQVUsRUFBRTtnQkFDVixXQUFXO2dCQUNYLHdCQUF3QjtnQkFDeEIsNkJBQTZCO2dCQUM3Qiw0REFBNEQ7Z0JBQzVELDBFQUEwRTtnQkFDMUUsVUFBVTtnQkFDViw2QkFBNkI7Z0JBQzdCLHlEQUF5RDtnQkFDekQsNkVBQTZFO2dCQUM3RSxTQUFTO2dCQUNULE1BQU07Z0JBQ04sSUFBSTtnQkFDSCx5QkFBeUI7Z0JBQ3pCLDBDQUEwQztnQkFDMUMsK0JBQStCO2dCQUMvQiwrQkFBK0I7Z0JBQy9CLDBDQUEwQztnQkFDMUMsUUFBUTtnQkFDUixNQUFNO2dCQUNQLHVCQUF1QjtnQkFDdkIsMkJBQTJCO2dCQUMzQiwrQkFBK0I7Z0JBQy9CLHdEQUF3RDtnQkFDeEQsUUFBUTtnQkFDUixLQUFLO2dCQUNMLDhCQUE4QjtnQkFDOUIsK0RBQStEO2dCQUMvRCxrRUFBa0U7Z0JBQ2xFLE1BQU07Z0JBQ04sZUFBZSxFQUFFLGFBQWEsRUFBRSxhQUFhLEVBQUUsWUFBWTtnQkFDM0QscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUsY0FBYzthQUM5RDtZQUNELHdzRUFBMEM7O1NBRzNDLENBQUM7aURBR3NDLGlCQUFpQjtPQUY1QyxtQkFBbUIsQ0FxRS9CO0lBQUQsMEJBQUM7Q0FBQSxBQXJFRCxJQXFFQztTQXJFWSxtQkFBbUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIElucHV0LCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCB7IE5vdGlmaWNhdGlvbiB9IGZyb20gJy4vLi4vaW50ZXJmYWNlcy9ub3RpZmljYXRpb24uaW50ZXJmYWNlJztcclxuaW1wb3J0IHsgU29mdE5vdGlmeVNlcnZpY2UgfSBmcm9tICcuLy4uL3NlcnZpY2VzL3NvZnROb3RpZnkuc2VydmljZSc7XHJcbmltcG9ydCB7IHRyaWdnZXIsIHN0YXRlLCBzdHlsZSwgYW5pbWF0ZSwgdHJhbnNpdGlvbiB9IGZyb20gJ0Bhbmd1bGFyL2FuaW1hdGlvbnMnO1xyXG5pbXBvcnQgeyBib3VuY2VJbkFuZE91dCwgZW50ZXJBbmRMZWF2ZUZyb21MZWZ0LCBlbnRlckFuZExlYXZlRnJvbVJpZ2h0LCBmYWRlSW5BbmRPdXQsXHJcbiAgZmFkZUluVGhlbk91dCwgZ3Jvd0luU2hyaW5rT3V0LCBzd2luZ0luQW5kT3V0IH0gZnJvbSAnLi8uLi9jb21tb24vdHJpZ2dlcnMnO1xyXG5cclxuZGVjbGFyZSB2YXIgcmVxdWlyZTogYW55O1xyXG5cclxuQENvbXBvbmVudCh7ICAgLy8gY29tcG9uZW50IGRlY29yYXRvciBmdW5jdGlvbiBkZWZpbmVzIGEgYW5ndWxhciBjb21wb25lbnQsXHJcbiAgICAgICAgIC8vICBpdCBhbHNvIGhlbHBzIGFuZ3VsYXIgY29tcGlsYXRpb24gZW5naW5lIGluIHVuZGVyc3RhbmRpbmcgdGhlIGNvZGVcclxuICBzZWxlY3RvcjogJ25nLXNvZnRub3RpZnknLCAvLyB0YWcgcmVwcmVzZW50aW5nIHRoaXMgY29tcG9uZW50IGluIEhUTUwgZG9tXHJcblxyXG4gIHByb3ZpZGVycyA6IFtdLCAvLyBDb21wb25lbnQgcHJvdmlkZXJzIGFsd2F5cyBzdXBlcnNlZGUgTmdNb2R1bGUgcHJvdmlkZXJzLlxyXG4gICAgICAgICAgICAgLy8gV2hlbiB0aGUgY29tcG9uZW50IG9yIGFueSBvZiBpdHMgc3ViLWNvbXBvbmVudHMgaW5qZWN0IFgsIFxyXG4gICAgICAgICAgICAgLy8gdGhleSBnZXQgdGhlIGNvbXBvbmVudCBzZXJ2aWNlIGluc3RhbmNlLCBub3QgdGhlIE5nTW9kdWxlIHNlcnZpY2UgaW5zdGFuY2UuXHJcbiAgYW5pbWF0aW9uczogW1xyXG4gICAgLy8gdHJpZ2dlcihcclxuICAgIC8vICAgJ2VudGVyQW5pbWF0aW9uJywgW1xyXG4gICAgLy8gICAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgIC8vICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDEwMCUpJywgb3BhY2l0eTogMH0pLFxyXG4gICAgLy8gICAgICAgYW5pbWF0ZSgnNTAwbXMnLCBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsIG9wYWNpdHk6IDF9KSlcclxuICAgIC8vICAgICBdKSxcclxuICAgIC8vICAgICB0cmFuc2l0aW9uKCc6bGVhdmUnLCBbXHJcbiAgICAvLyAgICAgICBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgwKScsIG9wYWNpdHk6IDF9KSxcclxuICAgIC8vICAgICAgIGFuaW1hdGUoJzUwMG1zJywgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknLCBvcGFjaXR5OiAwfSkpXHJcbiAgICAvLyAgICAgXSlcclxuICAgIC8vICAgXVxyXG4gICAgLy8gKVxyXG4gICAgIC8vIHRyaWdnZXIoJ3Nocmlua091dCcsIFtcclxuICAgICAvLyAgICBzdGF0ZSgnaW4nLCBzdHlsZSh7IGhlaWdodDogJyonIH0pKSxcclxuICAgICAvLyAgICB0cmFuc2l0aW9uKCcqID0+IHZvaWQnLCBbXHJcbiAgICAgLy8gICAgICBzdHlsZSh7IGhlaWdodDogJyonIH0pLFxyXG4gICAgIC8vICAgICAgYW5pbWF0ZSg1MDAsIHN0eWxlKHsgaGVpZ2h0OiAwIH0pKVxyXG4gICAgIC8vICAgIF0pXHJcbiAgICAgLy8gIF0pXHJcbiAgICAvLyAgdHJpZ2dlcignZmFkZUluJywgW1xyXG4gICAgLy8gICB0cmFuc2l0aW9uKCc6ZW50ZXInLCBbXHJcbiAgICAvLyAgICAgc3R5bGUoeyBvcGFjaXR5OiAnMCcgfSksXHJcbiAgICAvLyAgICAgYW5pbWF0ZSgnLjVzIGVhc2Utb3V0Jywgc3R5bGUoeyBvcGFjaXR5OiAnMScgfSkpLFxyXG4gICAgLy8gICBdKSxcclxuICAgIC8vIF0pXHJcbiAgICAvLyB0cmlnZ2VyKCdib3VuY2VJbkFuZE91dCcsIFtcclxuICAgIC8vICAgdHJhbnNpdGlvbignOmVudGVyJywgdXNlQW5pbWF0aW9uKGFuaW1hdGlvbnMuYm91bmNlSW5VcCkpLFxyXG4gICAgLy8gICB0cmFuc2l0aW9uKCc6bGVhdmUnLCB1c2VBbmltYXRpb24oYW5pbWF0aW9ucy5ib3VuY2VPdXREb3duKSksXHJcbiAgICAvLyBdKSxcclxuICAgIGdyb3dJblNocmlua091dCwgZmFkZUluVGhlbk91dCwgc3dpbmdJbkFuZE91dCwgZmFkZUluQW5kT3V0LFxyXG4gICAgZW50ZXJBbmRMZWF2ZUZyb21MZWZ0LCBlbnRlckFuZExlYXZlRnJvbVJpZ2h0LCBib3VuY2VJbkFuZE91dCxcclxuICBdLFxyXG4gIHRlbXBsYXRlVXJsOiAnLi9zb2Z0Tm90aWZ5LmNvbXBvbmVudC5odG1sJywgLy8gdGVtcGxhdGUgZm9yIFNvZnQgTm90aWZ5IENvbXBvbmVudFxyXG4gIFxyXG4gIHN0eWxlVXJsczogWycuL3NvZnROb3RpZnkuY29tcG9uZW50LmNzcyddIC8vIFNvZnQgTm90aWZ5IENvbXBvbmVudCBzcGVjaWZpYyBzdHlsZXNoZWV0XHJcbn0pXHJcbmV4cG9ydCBjbGFzcyBTb2Z0Tm90aWZ5Q29tcG9uZW50IHsgXHJcblxyXG4gIGNvbnN0cnVjdG9yKHB1YmxpYyBzb2Z0Tm90aWZ5U2VydmljZTogU29mdE5vdGlmeVNlcnZpY2UpIHt9XHJcblxyXG4gIEBPdXRwdXQoKSBvbkRpc21pc3MgPSBuZXcgRXZlbnRFbWl0dGVyPE5vdGlmaWNhdGlvbj4oKTtcclxuXHJcbiAgQElucHV0KCkgZGlyZWN0aW9uOiBzdHJpbmc7XHJcblxyXG4gIEBJbnB1dCgpIGFuaW1hdGlvblR5cGU6IHN0cmluZztcclxuICBcclxuICAgIC8qKlxyXG4gICAgU2FtcGxlIEFsZXJ0IE5vdGlmaWNhdGlvbiBvYmplY3Qgc3RydWN0dXJlXHJcbiAgICBub3RpZmljYXRpb24gPSB7XHJcbiAgICAgIGhlYWRlcjogJ1NpZ25hbCBpcyB3ZWFrJyxcclxuICAgICAgc3ViSGVhZGVyOiAnJyxcclxuICAgICAgYm9keTogJ0V4cGVjdCBzbG93bmVzcyBpbiB0aGUgYXBwJyxcclxuICAgICAgdHlwZTogJ3dhcm5pbmcnXHJcbiAgICAgIGF1dG9EaXNtaXNzOjUwMDAsIC8vb3B0aW9uYWwgcHJvcGVydHlcclxuICAgIH1cclxuICAgICovXHJcblxyXG4gICAgLyoqXHJcbiAgICAgIFNhbXBsZSBDaGF0IE5vdGlmaWNhdGlvbiBvYmplY3Qgc3RydWN0dXJlXHJcbiAgICAgIHtcclxuICAgICAgICBoZWFkZXI6ICdUb255IFN0YXJrJyxcclxuICAgICAgICBzdWJIZWFkZXI6ICdpcyBvbmxpbmUgbm93JyxcclxuICAgICAgICBib2R5OiAnd2hhdHMgdXAgYnVkIDopJyxcclxuICAgICAgICB0eXBlOiAnY2hhdCcsXHJcbiAgICAgICAgYXZhdGFyOidpcm9uLW1hbicsXHJcbiAgICAgICAgc3RhdHVzOidvbmxpbmUnLFxyXG4gICAgICAgIHRpbWU6ICcwMzowOScsXHJcbiAgICAgICAgYXV0b0Rpc21pc3M6NTAwMCAvL29wdGlvbmFsIHByb3BlcnR5XHJcbiAgICAgIH1cclxuICAgICovXHJcblxyXG4gICAgLy9PbkRpc21pc3MgZXZlbnQgdHJpZ2dlcmVkIHdoZW4gTm90aWZpY2F0aW9uIGlzIGRpc21pc3NlZChtYW51YWxseSBvciBhdXRvRGlzbWlzc2VkKVxyXG4gICAgb25EaXNtaXNzTm90aWZpY2F0aW9uID0gKG5vdGlmaWNhdGlvbiA6Tm90aWZpY2F0aW9uKSA9PiB7XHJcbiAgICAgIG5vdGlmaWNhdGlvbi5fX2lzRXhwaXJlZCA9IHRydWU7XHJcblxyXG4gICAgICBpZih0aGlzLm9uRGlzbWlzcykgeyBcclxuICAgICAgICB0aGlzLm9uRGlzbWlzcy5lbWl0KG5vdGlmaWNhdGlvbik7ICAvL05vdGlmeSBzdWJzY3JpYmVyIHdpdGggZGlzbWlzc2VkIE5vdGlmaWNhdGlvbiBvYmplY3RcclxuICAgICAgfVxyXG5cclxuICAgICAgdGhpcy5zb2Z0Tm90aWZ5U2VydmljZS5kZWxldGVOb3RpZmljYXRpb24obm90aWZpY2F0aW9uKTtcclxuICAgIH07XHJcblxyXG4gICAgLy8gSW5pdGlhbGlzZSB0aGUgTm90aWZpY2F0aW9uIG9iamVjdCB3aXRoIHRpbWVyKGlmIEF1dG8gRGltaXNzIGNvbmZpZ3VyZWQpICAgIFxyXG4gICAgb25Jbml0ID0gKG5vdGlmaWNhdGlvbiA6Tm90aWZpY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uLl9faXNFeHBpcmVkID0gZmFsc2U7IC8vIGZsYWcgdG8gZmlsdGVyIG91dCBleHBpcmVkIG5vdGlmaWNhdGlvbnNcclxuICAgICAgICBub3RpZmljYXRpb24uX191bmlxdWVJZCA9IG5ldyBEYXRlKCkudmFsdWVPZigpO1xyXG4gICAgICAgIGlmKG5vdGlmaWNhdGlvbi5hdXRvRGlzbWlzcykge1xyXG4gICAgICAgICAgIGxldCBpbnRlcnZhbCA9IG5vdGlmaWNhdGlvbi5hdXRvRGlzbWlzcztcclxuICAgICAgICAgICAgc2V0VGltZW91dCgoKSA9PiB7ICBcclxuICAgICAgICAgICAgICB0aGlzLm9uRGlzbWlzc05vdGlmaWNhdGlvbihub3RpZmljYXRpb24pO1xyXG4gICAgICAgICAgICB9LCBpbnRlcnZhbCk7XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuXHJcbiAgICBnZXRGbG93Q2xhc3MgPSAoKT0+IHtcclxuICAgICAgbGV0IGZsQ2xhc3MgPSAncmlnaHQtZmxvdyc7XHJcblxyXG4gICAgICBpZih0aGlzLmRpcmVjdGlvbiA9PT0gJ2xlZnQtdG9wJykge1xyXG4gICAgICAgIGZsQ2xhc3MgPSAnbGVmdC1mbG93JztcclxuICAgICAgfSBlbHNlIGlmICh0aGlzLmRpcmVjdGlvbiA9PT0gJ3JpZ2h0LXRvcCcpIHtcclxuICAgICAgICBmbENsYXNzID0gJ3JpZ2h0LWZsb3cnO1xyXG4gICAgICB9XHJcblxyXG4gICAgICByZXR1cm4gZmxDbGFzcztcclxuICAgIH1cclxufSJdfQ==