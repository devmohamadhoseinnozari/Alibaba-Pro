/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Suport_quickComponent } from './suport_quick.component';

describe('Suport_quickComponent', () => {
  let component: Suport_quickComponent;
  let fixture: ComponentFixture<Suport_quickComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Suport_quickComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Suport_quickComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
