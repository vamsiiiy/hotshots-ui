import { Injectable } from '@angular/core';
import { RestAPIService } from '../shared/services/rest-api.service';
import { Observable } from 'rxjs';
import { CourtDetails } from './model/booking-detail';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private restAPI: RestAPIService) { }

  getDetails(): Observable<CourtDetails> {
    return this.restAPI.get();
  }
}
