/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Question_youComponent } from './question_you.component';

describe('Question_youComponent', () => {
  let component: Question_youComponent;
  let fixture: ComponentFixture<Question_youComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Question_youComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Question_youComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
