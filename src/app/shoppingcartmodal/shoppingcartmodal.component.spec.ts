import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShoppingcartmodalComponent } from './shoppingcartmodal.component';

describe('ShoppingcartmodalComponent', () => {
  let component: ShoppingcartmodalComponent;
  let fixture: ComponentFixture<ShoppingcartmodalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShoppingcartmodalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShoppingcartmodalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
