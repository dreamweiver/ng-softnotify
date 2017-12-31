import { TestBed } from '@angular/core/testing';

import { DashboardComponent}  from './dashboard.component';

import {} from 'jasmine';


describe('App', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({ declarations: [DashboardComponent]});
  });

  it ('should work', () => {
    let fixture = TestBed.createComponent(DashboardComponent);
    expect(fixture.componentInstance instanceof DashboardComponent).toBe(true, 'should create DashboardComponent');
  });
});