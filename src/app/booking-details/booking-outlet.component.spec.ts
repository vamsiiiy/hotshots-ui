import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingOutletComponent } from './booking-outlet.component';

describe('BookingOutletComponent', () => {
  let component: BookingOutletComponent;
  let fixture: ComponentFixture<BookingOutletComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingOutletComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingOutletComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
