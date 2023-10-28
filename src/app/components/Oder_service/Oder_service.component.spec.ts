/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Oder_serviceComponent } from './Oder_service.component';

describe('Oder_serviceComponent', () => {
  let component: Oder_serviceComponent;
  let fixture: ComponentFixture<Oder_serviceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Oder_serviceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Oder_serviceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
