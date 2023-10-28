/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { Product_boxComponent } from './product_box.component';

describe('Product_boxComponent', () => {
  let component: Product_boxComponent;
  let fixture: ComponentFixture<Product_boxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Product_boxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Product_boxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
