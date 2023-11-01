/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Register__subComponent } from './register__sub.component';

describe('Register__subComponent', () => {
  let component: Register__subComponent;
  let fixture: ComponentFixture<Register__subComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Register__subComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Register__subComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
