import * as tslib_1 from "tslib";
import { Injectable } from '@angular/core';
var SoftNotifyService = /** @class */ (function () {
    function SoftNotifyService() {
        this.notifications = [];
    }
    SoftNotifyService.prototype.launchNotification = function (notification) {
        this.notifications.push(notification);
    };
    SoftNotifyService = tslib_1.__decorate([
        Injectable()
    ], SoftNotifyService);
    return SoftNotifyService;
}());
export { SoftNotifyService };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29mdE5vdGlmeS5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6Im5nOi8vbmctc29mdG5vdGlmeS8iLCJzb3VyY2VzIjpbImFwcC9zZXJ2aWNlcy9zb2Z0Tm90aWZ5LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLE9BQU8sRUFBRSxVQUFVLEVBQUUsTUFBTSxlQUFlLENBQUM7QUFJM0M7SUFEQTtRQUVFLGtCQUFhLEdBQW1CLEVBQUUsQ0FBQztJQU1wQyxDQUFDO0lBSkEsOENBQWtCLEdBQWxCLFVBQW1CLFlBQTBCO1FBQzNDLElBQUksQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLFlBQVksQ0FBQyxDQUFDO0lBQ3hDLENBQUM7SUFMVSxpQkFBaUI7UUFEN0IsVUFBVSxFQUFFO09BQ0EsaUJBQWlCLENBTzVCO0lBQUQsd0JBQUM7Q0FBQSxBQVBGLElBT0U7U0FQVyxpQkFBaUIiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBJbmplY3RhYmxlIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcbmltcG9ydCAge05vdGlmaWNhdGlvbn0gZnJvbSAnLi8uLi9pbnRlcmZhY2VzL25vdGlmaWNhdGlvbi5pbnRlcmZhY2UnO1xyXG4gXHJcbkBJbmplY3RhYmxlKClcclxuZXhwb3J0IGNsYXNzIFNvZnROb3RpZnlTZXJ2aWNlIHtcclxuICBub3RpZmljYXRpb25zOiBOb3RpZmljYXRpb25bXSA9IFtdO1xyXG4gXHJcbiAgbGF1bmNoTm90aWZpY2F0aW9uKG5vdGlmaWNhdGlvbjogTm90aWZpY2F0aW9uKSB7XHJcbiAgICB0aGlzLm5vdGlmaWNhdGlvbnMucHVzaChub3RpZmljYXRpb24pO1xyXG4gIH1cclxuICBcclxuIH0iXX0=