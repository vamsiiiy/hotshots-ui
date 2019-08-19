import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookingInforComponent } from './booking-infor.component';

describe('BookingInforComponent', () => {
  let component: BookingInforComponent;
  let fixture: ComponentFixture<BookingInforComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookingInforComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookingInforComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
