import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingPopupConfirmationComponent } from './booking-popup-confirmation.component';

describe('BookingPopupConfirmationComponent', () => {
  let component: BookingPopupConfirmationComponent;
  let fixture: ComponentFixture<BookingPopupConfirmationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingPopupConfirmationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingPopupConfirmationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
