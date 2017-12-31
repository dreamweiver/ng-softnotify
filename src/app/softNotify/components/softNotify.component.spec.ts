import { TestBed } from '@angular/core/testing';

import { SoftNotifyComponent } from './softNotify.component';

import {} from 'jasmine';


describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [SoftNotifyComponent]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(SoftNotifyComponent);
    expect(fixture.componentInstance instanceof SoftNotifyComponent).toBe(true, 'should create SoftNotificationComponent');
  });
});