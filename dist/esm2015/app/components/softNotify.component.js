import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SoftNotifyService } from './../services/softNotify.service';
import { bounceInAndOut, enterAndLeaveFromLeft, enterAndLeaveFromRight, fadeInAndOut, fadeInThenOut, growInShrinkOut, swingInAndOut } from './../common/triggers';
let SoftNotifyComponent = class SoftNotifyComponent {
    constructor(softNotifyService) {
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
        this.onDismissNotification = (notification) => {
            notification.__isExpired = true;
            if (this.onDismiss) {
                this.onDismiss.emit(notification); //Notify subscriber with dismissed Notification object
            }
            this.softNotifyService.deleteNotification(notification);
        };
        // Initialise the Notification object with timer(if Auto Dimiss configured)    
        this.onInit = (notification) => {
            notification.__isExpired = false; // flag to filter out expired notifications
            notification.__uniqueId = new Date().valueOf();
            if (notification.autoDismiss) {
                let interval = notification.autoDismiss;
                setTimeout(() => {
                    this.onDismissNotification(notification);
                }, interval);
            }
        };
        this.getFlowClass = () => {
            let flClass = 'right-flow';
            if (this.direction === 'left-top') {
                flClass = 'left-flow';
            }
            else if (this.direction === 'right-top') {
                flClass = 'right-flow';
            }
            return flClass;
        };
    }
};
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
export { SoftNotifyComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29mdE5vdGlmeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zb2Z0bm90aWZ5LyIsInNvdXJjZXMiOlsiYXBwL2NvbXBvbmVudHMvc29mdE5vdGlmeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFFckUsT0FBTyxFQUFFLGNBQWMsRUFBRSxxQkFBcUIsRUFBRSxzQkFBc0IsRUFBRSxZQUFZLEVBQ2xGLGFBQWEsRUFBRSxlQUFlLEVBQUUsYUFBYSxFQUFFLE1BQU0sc0JBQXNCLENBQUM7QUFnRDlFLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBRTlCLFlBQW1CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTdDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQU1yRDs7Ozs7Ozs7O1VBU0U7UUFFRjs7Ozs7Ozs7Ozs7O1VBWUU7UUFFRixxRkFBcUY7UUFDckYsMEJBQXFCLEdBQUcsQ0FBQyxZQUEwQixFQUFFLEVBQUU7WUFDckQsWUFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFFaEMsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFFLHNEQUFzRDthQUMzRjtZQUVELElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxrQkFBa0IsQ0FBQyxZQUFZLENBQUMsQ0FBQztRQUMxRCxDQUFDLENBQUM7UUFFRiwrRUFBK0U7UUFDL0UsV0FBTSxHQUFHLENBQUMsWUFBMEIsRUFBRSxFQUFFO1lBQ3BDLFlBQVksQ0FBQyxXQUFXLEdBQUcsS0FBSyxDQUFDLENBQUMsMkNBQTJDO1lBQzdFLFlBQVksQ0FBQyxVQUFVLEdBQUcsSUFBSSxJQUFJLEVBQUUsQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUMvQyxJQUFHLFlBQVksQ0FBQyxXQUFXLEVBQUU7Z0JBQzFCLElBQUksUUFBUSxHQUFHLFlBQVksQ0FBQyxXQUFXLENBQUM7Z0JBQ3ZDLFVBQVUsQ0FBQyxHQUFHLEVBQUU7b0JBQ2QsSUFBSSxDQUFDLHFCQUFxQixDQUFDLFlBQVksQ0FBQyxDQUFDO2dCQUMzQyxDQUFDLEVBQUUsUUFBUSxDQUFDLENBQUM7YUFDaEI7UUFDTCxDQUFDLENBQUM7UUFFRixpQkFBWSxHQUFHLEdBQUUsRUFBRTtZQUNqQixJQUFJLE9BQU8sR0FBRyxZQUFZLENBQUM7WUFFM0IsSUFBRyxJQUFJLENBQUMsU0FBUyxLQUFLLFVBQVUsRUFBRTtnQkFDaEMsT0FBTyxHQUFHLFdBQVcsQ0FBQzthQUN2QjtpQkFBTSxJQUFJLElBQUksQ0FBQyxTQUFTLEtBQUssV0FBVyxFQUFFO2dCQUN6QyxPQUFPLEdBQUcsWUFBWSxDQUFDO2FBQ3hCO1lBRUQsT0FBTyxPQUFPLENBQUM7UUFDakIsQ0FBQyxDQUFBO0lBbEV1RCxDQUFDO0NBbUU1RCxDQUFBO0FBakVXO0lBQVQsTUFBTSxFQUFFOztzREFBOEM7QUFFOUM7SUFBUixLQUFLLEVBQUU7O3NEQUFtQjtBQUVsQjtJQUFSLEtBQUssRUFBRTs7MERBQXVCO0FBUnBCLG1CQUFtQjtJQTVDL0IsU0FBUyxDQUFDO1FBQ0Ysc0VBQXNFO1FBQzdFLFFBQVEsRUFBRSxlQUFlO1FBRXpCLFNBQVMsRUFBRyxFQUFFO1FBQ0gsNkRBQTZEO1FBQzdELDhFQUE4RTtRQUN6RixVQUFVLEVBQUU7WUFDVixXQUFXO1lBQ1gsd0JBQXdCO1lBQ3hCLDZCQUE2QjtZQUM3Qiw0REFBNEQ7WUFDNUQsMEVBQTBFO1lBQzFFLFVBQVU7WUFDViw2QkFBNkI7WUFDN0IseURBQXlEO1lBQ3pELDZFQUE2RTtZQUM3RSxTQUFTO1lBQ1QsTUFBTTtZQUNOLElBQUk7WUFDSCx5QkFBeUI7WUFDekIsMENBQTBDO1lBQzFDLCtCQUErQjtZQUMvQiwrQkFBK0I7WUFDL0IsMENBQTBDO1lBQzFDLFFBQVE7WUFDUixNQUFNO1lBQ1AsdUJBQXVCO1lBQ3ZCLDJCQUEyQjtZQUMzQiwrQkFBK0I7WUFDL0Isd0RBQXdEO1lBQ3hELFFBQVE7WUFDUixLQUFLO1lBQ0wsOEJBQThCO1lBQzlCLCtEQUErRDtZQUMvRCxrRUFBa0U7WUFDbEUsTUFBTTtZQUNOLGVBQWUsRUFBRSxhQUFhLEVBQUUsYUFBYSxFQUFFLFlBQVk7WUFDM0QscUJBQXFCLEVBQUUsc0JBQXNCLEVBQUUsY0FBYztTQUM5RDtRQUNELHdzRUFBMEM7O0tBRzNDLENBQUM7NkNBR3NDLGlCQUFpQjtHQUY1QyxtQkFBbUIsQ0FxRS9CO1NBckVZLG1CQUFtQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgSW5wdXQsIE91dHB1dCwgRXZlbnRFbWl0dGVyfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgTm90aWZpY2F0aW9uIH0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzL25vdGlmaWNhdGlvbi5pbnRlcmZhY2UnO1xyXG5pbXBvcnQgeyBTb2Z0Tm90aWZ5U2VydmljZSB9IGZyb20gJy4vLi4vc2VydmljZXMvc29mdE5vdGlmeS5zZXJ2aWNlJztcclxuaW1wb3J0IHsgdHJpZ2dlciwgc3RhdGUsIHN0eWxlLCBhbmltYXRlLCB0cmFuc2l0aW9uIH0gZnJvbSAnQGFuZ3VsYXIvYW5pbWF0aW9ucyc7XHJcbmltcG9ydCB7IGJvdW5jZUluQW5kT3V0LCBlbnRlckFuZExlYXZlRnJvbUxlZnQsIGVudGVyQW5kTGVhdmVGcm9tUmlnaHQsIGZhZGVJbkFuZE91dCxcclxuICBmYWRlSW5UaGVuT3V0LCBncm93SW5TaHJpbmtPdXQsIHN3aW5nSW5BbmRPdXQgfSBmcm9tICcuLy4uL2NvbW1vbi90cmlnZ2Vycyc7XHJcblxyXG5kZWNsYXJlIHZhciByZXF1aXJlOiBhbnk7XHJcblxyXG5AQ29tcG9uZW50KHsgICAvLyBjb21wb25lbnQgZGVjb3JhdG9yIGZ1bmN0aW9uIGRlZmluZXMgYSBhbmd1bGFyIGNvbXBvbmVudCxcclxuICAgICAgICAgLy8gIGl0IGFsc28gaGVscHMgYW5ndWxhciBjb21waWxhdGlvbiBlbmdpbmUgaW4gdW5kZXJzdGFuZGluZyB0aGUgY29kZVxyXG4gIHNlbGVjdG9yOiAnbmctc29mdG5vdGlmeScsIC8vIHRhZyByZXByZXNlbnRpbmcgdGhpcyBjb21wb25lbnQgaW4gSFRNTCBkb21cclxuXHJcbiAgcHJvdmlkZXJzIDogW10sIC8vIENvbXBvbmVudCBwcm92aWRlcnMgYWx3YXlzIHN1cGVyc2VkZSBOZ01vZHVsZSBwcm92aWRlcnMuXHJcbiAgICAgICAgICAgICAvLyBXaGVuIHRoZSBjb21wb25lbnQgb3IgYW55IG9mIGl0cyBzdWItY29tcG9uZW50cyBpbmplY3QgWCwgXHJcbiAgICAgICAgICAgICAvLyB0aGV5IGdldCB0aGUgY29tcG9uZW50IHNlcnZpY2UgaW5zdGFuY2UsIG5vdCB0aGUgTmdNb2R1bGUgc2VydmljZSBpbnN0YW5jZS5cclxuICBhbmltYXRpb25zOiBbXHJcbiAgICAvLyB0cmlnZ2VyKFxyXG4gICAgLy8gICAnZW50ZXJBbmltYXRpb24nLCBbXHJcbiAgICAvLyAgICAgdHJhbnNpdGlvbignOmVudGVyJywgW1xyXG4gICAgLy8gICAgICAgc3R5bGUoe3RyYW5zZm9ybTogJ3RyYW5zbGF0ZVgoMTAwJSknLCBvcGFjaXR5OiAwfSksXHJcbiAgICAvLyAgICAgICBhbmltYXRlKCc1MDBtcycsIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb3BhY2l0eTogMX0pKVxyXG4gICAgLy8gICAgIF0pLFxyXG4gICAgLy8gICAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIFtcclxuICAgIC8vICAgICAgIHN0eWxlKHt0cmFuc2Zvcm06ICd0cmFuc2xhdGVYKDApJywgb3BhY2l0eTogMX0pLFxyXG4gICAgLy8gICAgICAgYW5pbWF0ZSgnNTAwbXMnLCBzdHlsZSh7dHJhbnNmb3JtOiAndHJhbnNsYXRlWCgxMDAlKScsIG9wYWNpdHk6IDB9KSlcclxuICAgIC8vICAgICBdKVxyXG4gICAgLy8gICBdXHJcbiAgICAvLyApXHJcbiAgICAgLy8gdHJpZ2dlcignc2hyaW5rT3V0JywgW1xyXG4gICAgIC8vICAgIHN0YXRlKCdpbicsIHN0eWxlKHsgaGVpZ2h0OiAnKicgfSkpLFxyXG4gICAgIC8vICAgIHRyYW5zaXRpb24oJyogPT4gdm9pZCcsIFtcclxuICAgICAvLyAgICAgIHN0eWxlKHsgaGVpZ2h0OiAnKicgfSksXHJcbiAgICAgLy8gICAgICBhbmltYXRlKDUwMCwgc3R5bGUoeyBoZWlnaHQ6IDAgfSkpXHJcbiAgICAgLy8gICAgXSlcclxuICAgICAvLyAgXSlcclxuICAgIC8vICB0cmlnZ2VyKCdmYWRlSW4nLCBbXHJcbiAgICAvLyAgIHRyYW5zaXRpb24oJzplbnRlcicsIFtcclxuICAgIC8vICAgICBzdHlsZSh7IG9wYWNpdHk6ICcwJyB9KSxcclxuICAgIC8vICAgICBhbmltYXRlKCcuNXMgZWFzZS1vdXQnLCBzdHlsZSh7IG9wYWNpdHk6ICcxJyB9KSksXHJcbiAgICAvLyAgIF0pLFxyXG4gICAgLy8gXSlcclxuICAgIC8vIHRyaWdnZXIoJ2JvdW5jZUluQW5kT3V0JywgW1xyXG4gICAgLy8gICB0cmFuc2l0aW9uKCc6ZW50ZXInLCB1c2VBbmltYXRpb24oYW5pbWF0aW9ucy5ib3VuY2VJblVwKSksXHJcbiAgICAvLyAgIHRyYW5zaXRpb24oJzpsZWF2ZScsIHVzZUFuaW1hdGlvbihhbmltYXRpb25zLmJvdW5jZU91dERvd24pKSxcclxuICAgIC8vIF0pLFxyXG4gICAgZ3Jvd0luU2hyaW5rT3V0LCBmYWRlSW5UaGVuT3V0LCBzd2luZ0luQW5kT3V0LCBmYWRlSW5BbmRPdXQsXHJcbiAgICBlbnRlckFuZExlYXZlRnJvbUxlZnQsIGVudGVyQW5kTGVhdmVGcm9tUmlnaHQsIGJvdW5jZUluQW5kT3V0LFxyXG4gIF0sXHJcbiAgdGVtcGxhdGVVcmw6ICcuL3NvZnROb3RpZnkuY29tcG9uZW50Lmh0bWwnLCAvLyB0ZW1wbGF0ZSBmb3IgU29mdCBOb3RpZnkgQ29tcG9uZW50XHJcbiAgXHJcbiAgc3R5bGVVcmxzOiBbJy4vc29mdE5vdGlmeS5jb21wb25lbnQuY3NzJ10gLy8gU29mdCBOb3RpZnkgQ29tcG9uZW50IHNwZWNpZmljIHN0eWxlc2hlZXRcclxufSlcclxuZXhwb3J0IGNsYXNzIFNvZnROb3RpZnlDb21wb25lbnQgeyBcclxuXHJcbiAgY29uc3RydWN0b3IocHVibGljIHNvZnROb3RpZnlTZXJ2aWNlOiBTb2Z0Tm90aWZ5U2VydmljZSkge31cclxuXHJcbiAgQE91dHB1dCgpIG9uRGlzbWlzcyA9IG5ldyBFdmVudEVtaXR0ZXI8Tm90aWZpY2F0aW9uPigpO1xyXG5cclxuICBASW5wdXQoKSBkaXJlY3Rpb246IHN0cmluZztcclxuXHJcbiAgQElucHV0KCkgYW5pbWF0aW9uVHlwZTogc3RyaW5nO1xyXG4gIFxyXG4gICAgLyoqXHJcbiAgICBTYW1wbGUgQWxlcnQgTm90aWZpY2F0aW9uIG9iamVjdCBzdHJ1Y3R1cmVcclxuICAgIG5vdGlmaWNhdGlvbiA9IHtcclxuICAgICAgaGVhZGVyOiAnU2lnbmFsIGlzIHdlYWsnLFxyXG4gICAgICBzdWJIZWFkZXI6ICcnLFxyXG4gICAgICBib2R5OiAnRXhwZWN0IHNsb3duZXNzIGluIHRoZSBhcHAnLFxyXG4gICAgICB0eXBlOiAnd2FybmluZydcclxuICAgICAgYXV0b0Rpc21pc3M6NTAwMCwgLy9vcHRpb25hbCBwcm9wZXJ0eVxyXG4gICAgfVxyXG4gICAgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAgU2FtcGxlIENoYXQgTm90aWZpY2F0aW9uIG9iamVjdCBzdHJ1Y3R1cmVcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogJ1RvbnkgU3RhcmsnLFxyXG4gICAgICAgIHN1YkhlYWRlcjogJ2lzIG9ubGluZSBub3cnLFxyXG4gICAgICAgIGJvZHk6ICd3aGF0cyB1cCBidWQgOiknLFxyXG4gICAgICAgIHR5cGU6ICdjaGF0JyxcclxuICAgICAgICBhdmF0YXI6J2lyb24tbWFuJyxcclxuICAgICAgICBzdGF0dXM6J29ubGluZScsXHJcbiAgICAgICAgdGltZTogJzAzOjA5JyxcclxuICAgICAgICBhdXRvRGlzbWlzczo1MDAwIC8vb3B0aW9uYWwgcHJvcGVydHlcclxuICAgICAgfVxyXG4gICAgKi9cclxuXHJcbiAgICAvL09uRGlzbWlzcyBldmVudCB0cmlnZ2VyZWQgd2hlbiBOb3RpZmljYXRpb24gaXMgZGlzbWlzc2VkKG1hbnVhbGx5IG9yIGF1dG9EaXNtaXNzZWQpXHJcbiAgICBvbkRpc21pc3NOb3RpZmljYXRpb24gPSAobm90aWZpY2F0aW9uIDpOb3RpZmljYXRpb24pID0+IHtcclxuICAgICAgbm90aWZpY2F0aW9uLl9faXNFeHBpcmVkID0gdHJ1ZTtcclxuXHJcbiAgICAgIGlmKHRoaXMub25EaXNtaXNzKSB7IFxyXG4gICAgICAgIHRoaXMub25EaXNtaXNzLmVtaXQobm90aWZpY2F0aW9uKTsgIC8vTm90aWZ5IHN1YnNjcmliZXIgd2l0aCBkaXNtaXNzZWQgTm90aWZpY2F0aW9uIG9iamVjdFxyXG4gICAgICB9XHJcblxyXG4gICAgICB0aGlzLnNvZnROb3RpZnlTZXJ2aWNlLmRlbGV0ZU5vdGlmaWNhdGlvbihub3RpZmljYXRpb24pO1xyXG4gICAgfTtcclxuXHJcbiAgICAvLyBJbml0aWFsaXNlIHRoZSBOb3RpZmljYXRpb24gb2JqZWN0IHdpdGggdGltZXIoaWYgQXV0byBEaW1pc3MgY29uZmlndXJlZCkgICAgXHJcbiAgICBvbkluaXQgPSAobm90aWZpY2F0aW9uIDpOb3RpZmljYXRpb24pID0+IHtcclxuICAgICAgICBub3RpZmljYXRpb24uX19pc0V4cGlyZWQgPSBmYWxzZTsgLy8gZmxhZyB0byBmaWx0ZXIgb3V0IGV4cGlyZWQgbm90aWZpY2F0aW9uc1xyXG4gICAgICAgIG5vdGlmaWNhdGlvbi5fX3VuaXF1ZUlkID0gbmV3IERhdGUoKS52YWx1ZU9mKCk7XHJcbiAgICAgICAgaWYobm90aWZpY2F0aW9uLmF1dG9EaXNtaXNzKSB7XHJcbiAgICAgICAgICAgbGV0IGludGVydmFsID0gbm90aWZpY2F0aW9uLmF1dG9EaXNtaXNzO1xyXG4gICAgICAgICAgICBzZXRUaW1lb3V0KCgpID0+IHsgIFxyXG4gICAgICAgICAgICAgIHRoaXMub25EaXNtaXNzTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbik7XHJcbiAgICAgICAgICAgIH0sIGludGVydmFsKTtcclxuICAgICAgICB9XHJcbiAgICB9O1xyXG5cclxuICAgIGdldEZsb3dDbGFzcyA9ICgpPT4ge1xyXG4gICAgICBsZXQgZmxDbGFzcyA9ICdyaWdodC1mbG93JztcclxuXHJcbiAgICAgIGlmKHRoaXMuZGlyZWN0aW9uID09PSAnbGVmdC10b3AnKSB7XHJcbiAgICAgICAgZmxDbGFzcyA9ICdsZWZ0LWZsb3cnO1xyXG4gICAgICB9IGVsc2UgaWYgKHRoaXMuZGlyZWN0aW9uID09PSAncmlnaHQtdG9wJykge1xyXG4gICAgICAgIGZsQ2xhc3MgPSAncmlnaHQtZmxvdyc7XHJcbiAgICAgIH1cclxuXHJcbiAgICAgIHJldHVybiBmbENsYXNzO1xyXG4gICAgfVxyXG59Il19