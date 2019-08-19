import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
// import { BookingOutletComponent } from './booking-details/booking-outlet.component';
// import {BookingInforComponent } from './booking-details/booking-infor/booking-infor.component'
// import { SharedModule } from './shared/shared.module';
import {BookingDetailsModule} from './booking-details/booking-details.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    NgbModule,
    BookingDetailsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
  
})
export class AppModule { }
