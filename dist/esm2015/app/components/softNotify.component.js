import * as tslib_1 from "tslib";
import { Component, Input, Output, EventEmitter } from '@angular/core';
import { SoftNotifyService } from './../services/softNotify.service';
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
        };
        // Initialise the Notification object with timer(if Auto Dimiss configured)    
        this.onInit = (notification) => {
            notification.__isExpired = false; // flag to filter out expired notifications
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
SoftNotifyComponent = tslib_1.__decorate([
    Component({
        //  it also helps angular compilation engine in understanding the code
        selector: 'ng-softnotify',
        providers: [],
        // When the component or any of its sub-components inject X, 
        // they get the component service instance, not the NgModule service instance.
        template: "<main>\r\n <div class=\"notification-cont\" [ngClass]=\"getFlowClass()\">\r\n  <ng-container *ngFor=\"let notification of softNotifyService.notifications; last as islast\">\r\n    <div class=\"notification repeated-item\" *ngIf = \"!notification.__isExpired\">\r\n      <ng-container *ngIf=\"notification.type === 'chat'\">  \r\n        <div class=\"notification-header\" [ngClass]=\"notification.status\" (onInitNotification)=\"onInit(notification)\" >\r\n          <div class=\"header-content\" >\r\n            <img class=\"notification-icon\" [src]=\"'https://raw.githubusercontent.com/dreamweiver/ng-softnotify/master/src/assets/images/'+ notification.avatar +'.svg?sanitize=true'\" >\r\n         \r\n\r\n            <span class=\"header-txt\">{{notification.header}}</span>\r\n            <span class=\"sub-txt\">{{notification.subHeader}}</span>\r\n            <span class=\"close-icon\" (click)=\"onDismissNotification(notification)\"> <img src=\"https://raw.githubusercontent.com/dreamweiver/ng-softnotify/master/src/assets/images/close.svg?sanitize=true\"></span>\r\n          </div>\r\n        </div>\r\n        <div class=\"notification-body cont-chat\">\r\n          <div class=\"body-content\">\r\n            <span>{{notification.body}}</span>\r\n            <div><span class=\"time-val\">{{notification.time}}</span></div>\r\n          </div>\r\n        </div>\r\n      </ng-container>\r\n      <ng-container *ngIf=\"notification.type !== 'chat'\" >\r\n          <div class=\"notification_type cont-{{notification.type}}\" [ngClass]=\"notification.type\"></div>\r\n          <div class=\"notification_body cont-{{notification.type}}\">\r\n            <div class=\"notification_title\" [ngClass]=\"notification.type\">{{notification.header}}</div>\r\n            <div class=\"notification_desc\">{{notification.body}}</div>    \r\n          </div>\r\n          <div class=\"notification_ctrls cont-{{notification.type}}\"><span class=\"close-icon\" (click)=\"onDismissNotification(notification)\"> <img src=\"https://raw.githubusercontent.com/dreamweiver/ng-softnotify/master/src/assets/images/close.svg?sanitize=true\"></span></div>  \r\n      </ng-container>\r\n    </div>\r\n  </ng-container>\r\n  </div>\r\n</main>",
        styles: ["@import url(https://fonts.googleapis.com/css?family=Roboto+Mono|Source+Sans+Pro);.notification-cont{position:absolute;z-index:999;top:10px;font-family:'Roboto Mono',monospace,'Source Sans Pro',sans-serif}.left-flow{left:10px}.right-flow{right:10px}.notification{padding:10px;width:300px;height:70px;position:relative}.notification span{padding:3px 5px}.notification .notification-header{width:100%;height:25px;border-radius:5px 5px 0 0;border-bottom-style:none;font-size:12px}.notification .notification-header .header-content{padding:3px;font-size:14px}.header-content span{margin-left:-3px}.online{border:.25px solid #79b546;background:#79b546;color:#34610e}.away{border:.25px solid #ffeb32;background:#fff599;color:#000}.offline{border:.25px solid #bebebe;background:#dadada;color:#a3a3a3}.header-txt{font-weight:700}.sub-txt{font-color:#aca796;font-size:10px;vertical-align:sub}.notification .notification-header .notification-icon{height:22px;width:22px;vertical-align:middle}.close-icon{float:right;padding:5px;cursor:pointer;width:15px;height:10px}.notification .notification-body{width:100%;height:55px;border-radius:0 0 5px 5px;border-top-style:none;font-size:15px;background:#fff;box-shadow:1px 2px 5px #7f7f7f}.notification .notification-body .body-content{padding:5px 8px;width:93%;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;color:#000}.notification .notification-body .time-val{float:right;font-size:10px}.notification_type{width:10%;height:100%;left:0;float:left;background-color:#d3d3d3}.notification_body{width:85%;height:100%;float:left;background-color:#fff;padding:3px 5px;box-sizing:border-box}.notification_title{font-weight:700;font-size:15px}.error{background-color:red}.cont-error{box-shadow:5px 3px 5px #e57f7f}.error.notification_title{color:red;background-color:#fff}.info{background-color:#66f}.cont-info{box-shadow:5px 3px 5px #a3a3d8}.info.notification_title{color:#66f;background-color:#fff}.warning{background-color:orange}.cont-warning{box-shadow:5px 3px 5px #e5c17f}.warning.notification_title{color:orange;background-color:#fff}.success{background-color:#79b546}.cont-success{box-shadow:5px 3px 5px #a3d0a3}.success.notification_title{color:#79b546;background-color:#fff}.notification_desc{font-size:12px;color:#aca796;padding-top:3px}.notification_ctrls{float:right;width:5%;color:#000;background-color:#fff;height:100%}"]
    }),
    tslib_1.__metadata("design:paramtypes", [SoftNotifyService])
], SoftNotifyComponent);
export { SoftNotifyComponent };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29mdE5vdGlmeS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zb2Z0bm90aWZ5LyIsInNvdXJjZXMiOlsiYXBwL2NvbXBvbmVudHMvc29mdE5vdGlmeS5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxTQUFTLEVBQUUsS0FBSyxFQUFFLE1BQU0sRUFBRSxZQUFZLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFHdEUsT0FBTyxFQUFFLGlCQUFpQixFQUFFLE1BQU0sa0NBQWtDLENBQUM7QUFnQnJFLElBQWEsbUJBQW1CLEdBQWhDLE1BQWEsbUJBQW1CO0lBRTlCLFlBQW1CLGlCQUFvQztRQUFwQyxzQkFBaUIsR0FBakIsaUJBQWlCLENBQW1CO1FBRTdDLGNBQVMsR0FBRyxJQUFJLFlBQVksRUFBZ0IsQ0FBQztRQUlyRDs7Ozs7Ozs7O1VBU0U7UUFFRjs7Ozs7Ozs7Ozs7O1VBWUU7UUFFRixxRkFBcUY7UUFDckYsMEJBQXFCLEdBQUcsQ0FBQyxZQUEwQixFQUFFLEVBQUU7WUFDckQsWUFBWSxDQUFDLFdBQVcsR0FBRyxJQUFJLENBQUM7WUFDaEMsSUFBRyxJQUFJLENBQUMsU0FBUyxFQUFFO2dCQUNqQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQyxDQUFFLHNEQUFzRDthQUMzRjtRQUNILENBQUMsQ0FBQztRQUVGLCtFQUErRTtRQUMvRSxXQUFNLEdBQUcsQ0FBQyxZQUEwQixFQUFFLEVBQUU7WUFDcEMsWUFBWSxDQUFDLFdBQVcsR0FBRyxLQUFLLENBQUMsQ0FBQywyQ0FBMkM7WUFDN0UsSUFBRyxZQUFZLENBQUMsV0FBVyxFQUFFO2dCQUMxQixJQUFJLFFBQVEsR0FBRyxZQUFZLENBQUMsV0FBVyxDQUFDO2dCQUN2QyxVQUFVLENBQUMsR0FBRyxFQUFFO29CQUNkLElBQUksQ0FBQyxxQkFBcUIsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDM0MsQ0FBQyxFQUFFLFFBQVEsQ0FBQyxDQUFDO2FBQ2hCO1FBQ0wsQ0FBQyxDQUFDO1FBRUYsaUJBQVksR0FBRyxHQUFFLEVBQUU7WUFDakIsSUFBSSxPQUFPLEdBQUcsWUFBWSxDQUFDO1lBRTNCLElBQUcsSUFBSSxDQUFDLFNBQVMsS0FBSyxVQUFVLEVBQUU7Z0JBQ2hDLE9BQU8sR0FBRyxXQUFXLENBQUM7YUFDdkI7aUJBQU0sSUFBSSxJQUFJLENBQUMsU0FBUyxLQUFLLFdBQVcsRUFBRTtnQkFDekMsT0FBTyxHQUFHLFlBQVksQ0FBQzthQUN4QjtZQUVELE9BQU8sT0FBTyxDQUFDO1FBQ2pCLENBQUMsQ0FBQTtJQTVEdUQsQ0FBQztDQTZENUQsQ0FBQTtBQTNEVztJQUFULE1BQU0sRUFBRTs7c0RBQThDO0FBRTlDO0lBQVIsS0FBSyxFQUFFOztzREFBbUI7QUFOaEIsbUJBQW1CO0lBWi9CLFNBQVMsQ0FBQztRQUNGLHNFQUFzRTtRQUM3RSxRQUFRLEVBQUUsZUFBZTtRQUV6QixTQUFTLEVBQUcsRUFBRTtRQUNILDZEQUE2RDtRQUM3RCw4RUFBOEU7UUFFekYscXNFQUEwQzs7S0FHM0MsQ0FBQzs2Q0FHc0MsaUJBQWlCO0dBRjVDLG1CQUFtQixDQStEL0I7U0EvRFksbUJBQW1CIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBJbnB1dCwgT3V0cHV0LCBFdmVudEVtaXR0ZXJ9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xyXG5pbXBvcnQgeyBOb3RpZmljYXRpb24gfSBmcm9tICcuLy4uL2ludGVyZmFjZXMvbm90aWZpY2F0aW9uLmludGVyZmFjZSc7XHJcblxyXG5pbXBvcnQgeyBTb2Z0Tm90aWZ5U2VydmljZSB9IGZyb20gJy4vLi4vc2VydmljZXMvc29mdE5vdGlmeS5zZXJ2aWNlJztcclxuXHJcbmRlY2xhcmUgdmFyIHJlcXVpcmU6IGFueTtcclxuXHJcbkBDb21wb25lbnQoeyAgIC8vIGNvbXBvbmVudCBkZWNvcmF0b3IgZnVuY3Rpb24gZGVmaW5lcyBhIGFuZ3VsYXIgY29tcG9uZW50LFxyXG4gICAgICAgICAvLyAgaXQgYWxzbyBoZWxwcyBhbmd1bGFyIGNvbXBpbGF0aW9uIGVuZ2luZSBpbiB1bmRlcnN0YW5kaW5nIHRoZSBjb2RlXHJcbiAgc2VsZWN0b3I6ICduZy1zb2Z0bm90aWZ5JywgLy8gdGFnIHJlcHJlc2VudGluZyB0aGlzIGNvbXBvbmVudCBpbiBIVE1MIGRvbVxyXG5cclxuICBwcm92aWRlcnMgOiBbXSwgLy8gQ29tcG9uZW50IHByb3ZpZGVycyBhbHdheXMgc3VwZXJzZWRlIE5nTW9kdWxlIHByb3ZpZGVycy5cclxuICAgICAgICAgICAgIC8vIFdoZW4gdGhlIGNvbXBvbmVudCBvciBhbnkgb2YgaXRzIHN1Yi1jb21wb25lbnRzIGluamVjdCBYLCBcclxuICAgICAgICAgICAgIC8vIHRoZXkgZ2V0IHRoZSBjb21wb25lbnQgc2VydmljZSBpbnN0YW5jZSwgbm90IHRoZSBOZ01vZHVsZSBzZXJ2aWNlIGluc3RhbmNlLlxyXG5cclxuICB0ZW1wbGF0ZVVybDogJy4vc29mdE5vdGlmeS5jb21wb25lbnQuaHRtbCcsIC8vIHRlbXBsYXRlIGZvciBTb2Z0IE5vdGlmeSBDb21wb25lbnRcclxuICBcclxuICBzdHlsZVVybHM6IFsnLi9zb2Z0Tm90aWZ5LmNvbXBvbmVudC5jc3MnXSAvLyBTb2Z0IE5vdGlmeSBDb21wb25lbnQgc3BlY2lmaWMgc3R5bGVzaGVldFxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29mdE5vdGlmeUNvbXBvbmVudCB7IFxyXG5cclxuICBjb25zdHJ1Y3RvcihwdWJsaWMgc29mdE5vdGlmeVNlcnZpY2U6IFNvZnROb3RpZnlTZXJ2aWNlKSB7fVxyXG5cclxuICBAT3V0cHV0KCkgb25EaXNtaXNzID0gbmV3IEV2ZW50RW1pdHRlcjxOb3RpZmljYXRpb24+KCk7XHJcblxyXG4gIEBJbnB1dCgpIGRpcmVjdGlvbjogc3RyaW5nO1xyXG4gIFxyXG4gICAgLyoqXHJcbiAgICBTYW1wbGUgQWxlcnQgTm90aWZpY2F0aW9uIG9iamVjdCBzdHJ1Y3R1cmVcclxuICAgIG5vdGlmaWNhdGlvbiA9IHtcclxuICAgICAgaGVhZGVyOiAnU2lnbmFsIGlzIHdlYWsnLFxyXG4gICAgICBzdWJIZWFkZXI6ICcnLFxyXG4gICAgICBib2R5OiAnRXhwZWN0IHNsb3duZXNzIGluIHRoZSBhcHAnLFxyXG4gICAgICB0eXBlOiAnd2FybmluZydcclxuICAgICAgYXV0b0Rpc21pc3M6NTAwMCwgLy9vcHRpb25hbCBwcm9wZXJ0eVxyXG4gICAgfVxyXG4gICAgKi9cclxuXHJcbiAgICAvKipcclxuICAgICAgU2FtcGxlIENoYXQgTm90aWZpY2F0aW9uIG9iamVjdCBzdHJ1Y3R1cmVcclxuICAgICAge1xyXG4gICAgICAgIGhlYWRlcjogJ1RvbnkgU3RhcmsnLFxyXG4gICAgICAgIHN1YkhlYWRlcjogJ2lzIG9ubGluZSBub3cnLFxyXG4gICAgICAgIGJvZHk6ICd3aGF0cyB1cCBidWQgOiknLFxyXG4gICAgICAgIHR5cGU6ICdjaGF0JyxcclxuICAgICAgICBhdmF0YXI6J2lyb24tbWFuJyxcclxuICAgICAgICBzdGF0dXM6J29ubGluZScsXHJcbiAgICAgICAgdGltZTogJzAzOjA5JyxcclxuICAgICAgICBhdXRvRGlzbWlzczo1MDAwIC8vb3B0aW9uYWwgcHJvcGVydHlcclxuICAgICAgfVxyXG4gICAgKi9cclxuXHJcbiAgICAvL09uRGlzbWlzcyBldmVudCB0cmlnZ2VyZWQgd2hlbiBOb3RpZmljYXRpb24gaXMgZGlzbWlzc2VkKG1hbnVhbGx5IG9yIGF1dG9EaXNtaXNzZWQpXHJcbiAgICBvbkRpc21pc3NOb3RpZmljYXRpb24gPSAobm90aWZpY2F0aW9uIDpOb3RpZmljYXRpb24pID0+IHtcclxuICAgICAgbm90aWZpY2F0aW9uLl9faXNFeHBpcmVkID0gdHJ1ZTtcclxuICAgICAgaWYodGhpcy5vbkRpc21pc3MpIHsgXHJcbiAgICAgICAgdGhpcy5vbkRpc21pc3MuZW1pdChub3RpZmljYXRpb24pOyAgLy9Ob3RpZnkgc3Vic2NyaWJlciB3aXRoIGRpc21pc3NlZCBOb3RpZmljYXRpb24gb2JqZWN0XHJcbiAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgLy8gSW5pdGlhbGlzZSB0aGUgTm90aWZpY2F0aW9uIG9iamVjdCB3aXRoIHRpbWVyKGlmIEF1dG8gRGltaXNzIGNvbmZpZ3VyZWQpICAgIFxyXG4gICAgb25Jbml0ID0gKG5vdGlmaWNhdGlvbiA6Tm90aWZpY2F0aW9uKSA9PiB7XHJcbiAgICAgICAgbm90aWZpY2F0aW9uLl9faXNFeHBpcmVkID0gZmFsc2U7IC8vIGZsYWcgdG8gZmlsdGVyIG91dCBleHBpcmVkIG5vdGlmaWNhdGlvbnNcclxuICAgICAgICBpZihub3RpZmljYXRpb24uYXV0b0Rpc21pc3MpIHtcclxuICAgICAgICAgICBsZXQgaW50ZXJ2YWwgPSBub3RpZmljYXRpb24uYXV0b0Rpc21pc3M7XHJcbiAgICAgICAgICAgIHNldFRpbWVvdXQoKCkgPT4geyAgXHJcbiAgICAgICAgICAgICAgdGhpcy5vbkRpc21pc3NOb3RpZmljYXRpb24obm90aWZpY2F0aW9uKTtcclxuICAgICAgICAgICAgfSwgaW50ZXJ2YWwpO1xyXG4gICAgICAgIH1cclxuICAgIH07XHJcblxyXG4gICAgZ2V0Rmxvd0NsYXNzID0gKCk9PiB7XHJcbiAgICAgIGxldCBmbENsYXNzID0gJ3JpZ2h0LWZsb3cnO1xyXG5cclxuICAgICAgaWYodGhpcy5kaXJlY3Rpb24gPT09ICdsZWZ0LXRvcCcpIHtcclxuICAgICAgICBmbENsYXNzID0gJ2xlZnQtZmxvdyc7XHJcbiAgICAgIH0gZWxzZSBpZiAodGhpcy5kaXJlY3Rpb24gPT09ICdyaWdodC10b3AnKSB7XHJcbiAgICAgICAgZmxDbGFzcyA9ICdyaWdodC1mbG93JztcclxuICAgICAgfVxyXG5cclxuICAgICAgcmV0dXJuIGZsQ2xhc3M7XHJcbiAgICB9XHJcbn0iXX0=