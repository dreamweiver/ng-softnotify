import { NgModule } from '@angular/core';
import { CommonModule } from  '@angular/common';
import { SoftNotifyComponent } from './components/softNotify.component';
import { OnInitNotification } from './common/initNotification.directive';
import { SoftNotifyService} from './services/softNotify.service';

@NgModule({ //NgModule decorator function defines the meta object of the Ngmodule,
	        //  this helps angular compilation engine to compile the code in best possible way
  imports: [
  	CommonModule
  ],
  declarations: [  // declararing all the components/directives/pipes which would be part of this NG module
     OnInitNotification, SoftNotifyComponent
  ],
  providers:[SoftNotifyService],
  exports :[SoftNotifyComponent]
})
export class SoftNotifyModule { }  // export this class so that it accessible for other classes
