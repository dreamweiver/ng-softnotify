import {Directive , Output, EventEmitter} from '@angular/core';

@Directive({
  selector: '[onInitNotification]'
})
export class OnInitNotification {
	@Output() onInitNotification: EventEmitter<any> = new EventEmitter<any>();
  constructor() {}
  ngOnInit() {      
     this.onInitNotification.emit();
  } 

}