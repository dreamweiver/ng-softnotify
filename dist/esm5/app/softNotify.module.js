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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic29mdE5vdGlmeS5tb2R1bGUuanMiLCJzb3VyY2VSb290Ijoibmc6Ly9uZy1zb2Z0bm90aWZ5LyIsInNvdXJjZXMiOlsiYXBwL3NvZnROb3RpZnkubW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSxPQUFPLEVBQUUsUUFBUSxFQUFFLE1BQU0sZUFBZSxDQUFDO0FBQ3pDLE9BQU8sRUFBRSxZQUFZLEVBQUUsTUFBTyxpQkFBaUIsQ0FBQztBQUNoRCxPQUFPLEVBQUUsbUJBQW1CLEVBQUUsTUFBTSxtQ0FBbUMsQ0FBQztBQUN4RSxPQUFPLEVBQUUsa0JBQWtCLEVBQUUsTUFBTSxxQ0FBcUMsQ0FBQztBQUN6RSxPQUFPLEVBQUUsaUJBQWlCLEVBQUMsTUFBTSwrQkFBK0IsQ0FBQztBQWFqRTtJQUFBO0lBQWdDLENBQUM7SUFBcEIsZ0JBQWdCO1FBWDVCLFFBQVEsQ0FBQztZQUNELGtGQUFrRjtZQUN6RixPQUFPLEVBQUU7Z0JBQ1IsWUFBWTthQUNaO1lBQ0QsWUFBWSxFQUFFO2dCQUNYLGtCQUFrQixFQUFFLG1CQUFtQjthQUN6QztZQUNELFNBQVMsRUFBQyxDQUFDLGlCQUFpQixDQUFDO1lBQzdCLE9BQU8sRUFBRSxDQUFDLG1CQUFtQixDQUFDO1NBQy9CLENBQUM7T0FDVyxnQkFBZ0IsQ0FBSTtJQUFELHVCQUFDO0NBQUEsQUFBakMsSUFBaUMsQ0FBRSw0REFBNEQ7U0FBbEYsZ0JBQWdCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgTmdNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcclxuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAgJ0Bhbmd1bGFyL2NvbW1vbic7XHJcbmltcG9ydCB7IFNvZnROb3RpZnlDb21wb25lbnQgfSBmcm9tICcuL2NvbXBvbmVudHMvc29mdE5vdGlmeS5jb21wb25lbnQnO1xyXG5pbXBvcnQgeyBPbkluaXROb3RpZmljYXRpb24gfSBmcm9tICcuL2NvbW1vbi9pbml0Tm90aWZpY2F0aW9uLmRpcmVjdGl2ZSc7XHJcbmltcG9ydCB7IFNvZnROb3RpZnlTZXJ2aWNlfSBmcm9tICcuL3NlcnZpY2VzL3NvZnROb3RpZnkuc2VydmljZSc7XHJcblxyXG5ATmdNb2R1bGUoeyAvL05nTW9kdWxlIGRlY29yYXRvciBmdW5jdGlvbiBkZWZpbmVzIHRoZSBtZXRhIG9iamVjdCBvZiB0aGUgTmdtb2R1bGUsXHJcblx0ICAgICAgICAvLyAgdGhpcyBoZWxwcyBhbmd1bGFyIGNvbXBpbGF0aW9uIGVuZ2luZSB0byBjb21waWxlIHRoZSBjb2RlIGluIGJlc3QgcG9zc2libGUgd2F5XHJcbiAgaW1wb3J0czogW1xyXG4gIFx0Q29tbW9uTW9kdWxlXHJcbiAgXSxcclxuICBkZWNsYXJhdGlvbnM6IFsgIC8vIGRlY2xhcmFyaW5nIGFsbCB0aGUgY29tcG9uZW50cy9kaXJlY3RpdmVzL3BpcGVzIHdoaWNoIHdvdWxkIGJlIHBhcnQgb2YgdGhpcyBORyBtb2R1bGVcclxuICAgICBPbkluaXROb3RpZmljYXRpb24sIFNvZnROb3RpZnlDb21wb25lbnRcclxuICBdLFxyXG4gIHByb3ZpZGVyczpbU29mdE5vdGlmeVNlcnZpY2VdLFxyXG4gIGV4cG9ydHMgOltTb2Z0Tm90aWZ5Q29tcG9uZW50XVxyXG59KVxyXG5leHBvcnQgY2xhc3MgU29mdE5vdGlmeU1vZHVsZSB7IH0gIC8vIGV4cG9ydCB0aGlzIGNsYXNzIHNvIHRoYXQgaXQgYWNjZXNzaWJsZSBmb3Igb3RoZXIgY2xhc3Nlc1xyXG4iXX0=