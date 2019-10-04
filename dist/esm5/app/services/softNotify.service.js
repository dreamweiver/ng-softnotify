import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
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
    SoftNotifyService = tslib_1.__decorate([
        Injectable()
    ], SoftNotifyService);
    return SoftNotifyService;
}());
export { SoftNotifyService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29mdE5vdGlmeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctc29mdG5vdGlmeS8iLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9zb2Z0Tm90aWZ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0M7SUFEQTtRQUVFLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztJQVdwQyxDQUFDO0lBVEEsOENBQWtCLEdBQWxCLFVBQW1CLFlBQTBCO1FBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFFRCw4Q0FBa0IsR0FBbEIsVUFBbUIsWUFBeUI7UUFDM0MsSUFBSSxXQUFXLEdBQVcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxPQUFPLENBQUMsWUFBWSxDQUFDLENBQUM7UUFDbkUsSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLENBQUMsV0FBVyxFQUFFLENBQUMsQ0FBQyxDQUFDO0lBQzNDLENBQUM7SUFWVSxpQkFBaUI7UUFEN0IsVUFBVSxFQUFFO09BQ0EsaUJBQWlCLENBWTVCO0lBQUQsd0JBQUM7Q0FBQSxBQVpGLElBWUU7U0FaVyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAge05vdGlmaWNhdGlvbn0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzL25vdGlmaWNhdGlvbi5pbnRlcmZhY2UnO1xyXG4gXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNvZnROb3RpZnlTZXJ2aWNlIHtcclxuICBub3RpZmljYXRpb25zOiBOb3RpZmljYXRpb25bXSA9IFtdO1xyXG4gXHJcbiAgbGF1bmNoTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKSB7XHJcbiAgICB0aGlzLm5vdGlmaWNhdGlvbnMucHVzaChub3RpZmljYXRpb24pO1xyXG4gIH1cclxuXHJcbiAgZGVsZXRlTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjpOb3RpZmljYXRpb24pIHtcclxuICBcdGxldCBkZWxldGVJbmRleDpudW1iZXIgPSAgdGhpcy5ub3RpZmljYXRpb25zLmluZGV4T2Yobm90aWZpY2F0aW9uKTtcclxuICBcdHRoaXMubm90aWZpY2F0aW9ucy5zcGxpY2UoZGVsZXRlSW5kZXgsIDEpO1xyXG4gIH1cclxuICBcclxuIH0iXX0=