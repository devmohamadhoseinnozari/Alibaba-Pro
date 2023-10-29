/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Main_suportComponent } from './main_suport.component';

describe('Main_suportComponent', () => {
  let component: Main_suportComponent;
  let fixture: ComponentFixture<Main_suportComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Main_suportComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Main_suportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
