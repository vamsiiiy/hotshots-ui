import { NgModule, APP_INITIALIZER } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingInforComponent } from './booking-infor/booking-infor.component';
import { BookingOutletComponent } from './booking-outlet.component';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [BookingInforComponent, BookingOutletComponent],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule
  ],
  entryComponents: [BookingInforComponent]
})
export class BookingDetailsModule { }
