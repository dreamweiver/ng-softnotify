import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import {SoftNotifyModule} from 'ng-softnotify';

@NgModule({
  imports:      [ BrowserModule, BrowserAnimationsModule, FormsModule , SoftNotifyModule, ],
  declarations: [ AppComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
