import { Injectable } from '@angular/core';
import { RestAPIService } from '../core/rest-api.service';
import { Observable, Subject } from 'rxjs';
import { CourtDetails } from './model/booking-detail';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  public refresh = new Subject<any>();

  updateTimeSlotDetails(date: string, data: CourtDetails) {
    return this.restAPI.post('http://localhost:8080/hot-shots/api/updateCourtDetails/' + date, data);
  }

  createNewBookingDate(data: any){
    return this.restAPI.post('http://localhost:8080/hot-shots/api/createNew', data);
  }

  constructor(private restAPI: RestAPIService) { }

  getDetails(date: string): Observable<CourtDetails> {
    return this.restAPI.get(date);
  }
}
