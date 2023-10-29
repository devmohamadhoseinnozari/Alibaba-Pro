/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Support_pageComponent } from './Support_page.component';

describe('Support_pageComponent', () => {
  let component: Support_pageComponent;
  let fixture: ComponentFixture<Support_pageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Support_pageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Support_pageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
