/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { DiscriptionAlibabComponent } from './discriptionAlibab.component';

describe('DiscriptionAlibabComponent', () => {
  let component: DiscriptionAlibabComponent;
  let fixture: ComponentFixture<DiscriptionAlibabComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DiscriptionAlibabComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DiscriptionAlibabComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
