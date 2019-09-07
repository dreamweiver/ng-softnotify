import * as tslib_1 from "tslib";
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SoftNotifyComponent } from './components/softNotify.component';
import { OnInitNotification } from './common/initNotification.directive';
import { SoftNotifyService } from './services/softNotify.service';
var SoftNotifyModule = /** @class */ (function () {
    function SoftNotifyModule() {
    }
    SoftNotifyModule = tslib_1.__decorate([
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
export { SoftNotifyModule };
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29mdE5vdGlmeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zb2Z0bm90aWZ5LyIsInNvdXJjZXMiOlsiYXBwL3NvZnROb3RpZnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTyxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQWFqRTtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBWDVCLFFBQVEsQ0FBQztZQUNELGtGQUFrRjtZQUN6RixPQUFPLEVBQUU7Z0JBQ1IsWUFBWTthQUNaO1lBQ0QsWUFBWSxFQUFFO2dCQUNYLGtCQUFrQixFQUFFLG1CQUFtQjthQUN6QztZQUNELFNBQVMsRUFBQyxDQUFDLGlCQUFpQixDQUFDO1lBQzdCLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQy9CLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUMsQ0FBRSw0REFBNEQ7U0FBbEYsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgU29mdE5vdGlmeUNvbXBvbmVudCB9IGZyb20gJy4vY29tcG9uZW50cy9zb2Z0Tm90aWZ5LmNvbXBvbmVudCc7XG5pbXBvcnQgeyBPbkluaXROb3RpZmljYXRpb24gfSBmcm9tICcuL2NvbW1vbi9pbml0Tm90aWZpY2F0aW9uLmRpcmVjdGl2ZSc7XG5pbXBvcnQgeyBTb2Z0Tm90aWZ5U2VydmljZX0gZnJvbSAnLi9zZXJ2aWNlcy9zb2Z0Tm90aWZ5LnNlcnZpY2UnO1xuXG5ATmdNb2R1bGUoeyAvL05nTW9kdWxlIGRlY29yYXRvciBmdW5jdGlvbiBkZWZpbmVzIHRoZSBtZXRhIG9iamVjdCBvZiB0aGUgTmdtb2R1bGUsXG5cdCAgICAgICAgLy8gIHRoaXMgaGVscHMgYW5ndWxhciBjb21waWxhdGlvbiBlbmdpbmUgdG8gY29tcGlsZSB0aGUgY29kZSBpbiBiZXN0IHBvc3NpYmxlIHdheVxuICBpbXBvcnRzOiBbXG4gIFx0Q29tbW9uTW9kdWxlXG4gIF0sXG4gIGRlY2xhcmF0aW9uczogWyAgLy8gZGVjbGFyYXJpbmcgYWxsIHRoZSBjb21wb25lbnRzL2RpcmVjdGl2ZXMvcGlwZXMgd2hpY2ggd291bGQgYmUgcGFydCBvZiB0aGlzIE5HIG1vZHVsZVxuICAgICBPbkluaXROb3RpZmljYXRpb24sIFNvZnROb3RpZnlDb21wb25lbnRcbiAgXSxcbiAgcHJvdmlkZXJzOltTb2Z0Tm90aWZ5U2VydmljZV0sXG4gIGV4cG9ydHMgOltTb2Z0Tm90aWZ5Q29tcG9uZW50XVxufSlcbmV4cG9ydCBjbGFzcyBTb2Z0Tm90aWZ5TW9kdWxlIHsgfSAgLy8gZXhwb3J0IHRoaXMgY2xhc3Mgc28gdGhhdCBpdCBhY2Nlc3NpYmxlIGZvciBvdGhlciBjbGFzc2VzXG4iXX0=