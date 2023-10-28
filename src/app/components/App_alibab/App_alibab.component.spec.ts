/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { App_alibabComponent } from './App_alibab.component';

describe('App_alibabComponent', () => {
  let component: App_alibabComponent;
  let fixture: ComponentFixture<App_alibabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ App_alibabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(App_alibabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
