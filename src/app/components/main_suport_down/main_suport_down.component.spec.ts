/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Main_suport_downComponent } from './main_suport_down.component';

describe('Main_suport_downComponent', () => {
  let component: Main_suport_downComponent;
  let fixture: ComponentFixture<Main_suport_downComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main_suport_downComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main_suport_downComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
