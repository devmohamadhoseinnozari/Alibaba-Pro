/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FooterseviceComponent } from './Footersevice.component';

describe('FooterseviceComponent', () => {
  let component: FooterseviceComponent;
  let fixture: ComponentFixture<FooterseviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FooterseviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterseviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
