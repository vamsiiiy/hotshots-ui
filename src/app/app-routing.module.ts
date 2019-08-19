import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BookingOutletComponent } from './booking-details/booking-outlet.component';

const routes: Routes = [
  {
    "path":"home",
    "component":BookingOutletComponent
  },
  {
    "path":"",
    "component":BookingOutletComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
