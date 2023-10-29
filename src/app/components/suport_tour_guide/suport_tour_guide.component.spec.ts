/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Suport_tour_guideComponent } from './suport_tour_guide.component';

describe('Suport_tour_guideComponent', () => {
  let component: Suport_tour_guideComponent;
  let fixture: ComponentFixture<Suport_tour_guideComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Suport_tour_guideComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Suport_tour_guideComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
