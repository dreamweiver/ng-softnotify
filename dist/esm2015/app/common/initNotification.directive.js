import * as tslib_1 from "tslib";
import { Directive, Output, EventEmitter } from '@angular/core';
let OnInitNotification = class OnInitNotification {
    constructor() {
        this.onInitNotification = new EventEmitter();
    }
    ngOnInit() {
        this.onInitNotification.emit();
    }
};
tslib_1.__decorate([
    Output(),
    tslib_1.__metadata("design:type", EventEmitter)
], OnInitNotification.prototype, "onInitNotification", void 0);
OnInitNotification = tslib_1.__decorate([
    Directive({
        selector: '[onInitNotification]'
    }),
    tslib_1.__metadata("design:paramtypes", [])
], OnInitNotification);
export { OnInitNotification };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaW5pdE5vdGlmaWNhdGlvbi5kaXJlY3RpdmUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zb2Z0bm90aWZ5LyIsInNvdXJjZXMiOlsiYXBwL2NvbW1vbi9pbml0Tm90aWZpY2F0aW9uLmRpcmVjdGl2ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsT0FBTyxFQUFDLFNBQVMsRUFBRyxNQUFNLEVBQUUsWUFBWSxFQUFDLE1BQU0sZUFBZSxDQUFDO0FBSy9ELElBQWEsa0JBQWtCLEdBQS9CLE1BQWEsa0JBQWtCO0lBRTdCO1FBRFMsdUJBQWtCLEdBQXNCLElBQUksWUFBWSxFQUFPLENBQUM7SUFDMUQsQ0FBQztJQUNoQixRQUFRO1FBQ0wsSUFBSSxDQUFDLGtCQUFrQixDQUFDLElBQUksRUFBRSxDQUFDO0lBQ2xDLENBQUM7Q0FFRixDQUFBO0FBTlU7SUFBVCxNQUFNLEVBQUU7c0NBQXFCLFlBQVk7OERBQWdDO0FBRDlELGtCQUFrQjtJQUg5QixTQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsc0JBQXNCO0tBQ2pDLENBQUM7O0dBQ1csa0JBQWtCLENBTzlCO1NBUFksa0JBQWtCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHtEaXJlY3RpdmUgLCBPdXRwdXQsIEV2ZW50RW1pdHRlcn0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XHJcblxyXG5ARGlyZWN0aXZlKHtcclxuICBzZWxlY3RvcjogJ1tvbkluaXROb3RpZmljYXRpb25dJ1xyXG59KVxyXG5leHBvcnQgY2xhc3MgT25Jbml0Tm90aWZpY2F0aW9uIHtcclxuXHRAT3V0cHV0KCkgb25Jbml0Tm90aWZpY2F0aW9uOiBFdmVudEVtaXR0ZXI8YW55PiA9IG5ldyBFdmVudEVtaXR0ZXI8YW55PigpO1xyXG4gIGNvbnN0cnVjdG9yKCkge31cclxuICBuZ09uSW5pdCgpIHsgICAgICBcclxuICAgICB0aGlzLm9uSW5pdE5vdGlmaWNhdGlvbi5lbWl0KCk7XHJcbiAgfSBcclxuXHJcbn0iXX0=