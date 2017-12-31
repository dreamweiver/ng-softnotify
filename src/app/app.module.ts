import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { SoftNotifyModule } from './softNotify/softNotify.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';


@NgModule({ //NgModule decorator function defines the meta object of the Ngmodule,
	        //  this helps angular compilation engine to compile the code in best possible way
  imports: [
     BrowserModule, // importing "BrowserModule" needed for every browser app,  
    			// It also includes common directives like NgIf and NgFor,
    			// which become immediately visible and usable in any of this NgModule's component templates.
     SoftNotifyModule  //custom module for showing soft Notifications,
  ],
  declarations: [  // declararing all the components/directives/pipes which would be part of this NG module
      DashboardComponent
  ],
  providers: [], // Service provider to be injected for whole of ng module, accessible to all components 
  bootstrap: [ DashboardComponent ] // defining components for bootstrapping in this module later in cycle.
})
export class AppModule { }  // export this class so that it accessible for other classes