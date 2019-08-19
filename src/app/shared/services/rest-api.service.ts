import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class RestAPIService {

  // apiURL = 'https://api.mockaroo.com/api/56dcfd40?count=1&key=b25b1840';
  // apiURL = 'http://localhost:3000/';
  // apiURL = 'http://www.mocky.io/v2/5cc74587320000b139b95193';


  //apiURL = 'http://www.mocky.io/v2/5ccb233f610000d60116233c';
  // apiURL = 'http://www.mocky.io/v2/5ccb36186100005900162391';

  // apiURL = 'http://www.mocky.io/v2/5ccb42b0610000910f1623b5';
  
  
  // apiURL = 'http://www.mocky.io/v2/5ccd90f92e00005c15182a9e';


  apiURL = 'http://www.mocky.io/v2/5cd9a9b63000006621c01784';
  constructor(private http: HttpClient) { 

  }

  get(): Observable<any>{
    return this.http.get(this.apiURL);
  }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  private getHeaders(){
    // I included these headers because otherwise FireFox
    // will request text/html instead of application/json
    let headers = new Headers();
    headers.append('Accept', 'application/json');
    headers.append('Content-Type', 'application/json');
    return headers;
  }
  
  handleError(error) {
    let errorMessage = '';
    if(error.error instanceof ErrorEvent) {
      // Get client-side error
      errorMessage = error.error.message;
    } else {
      // Get server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    window.alert(errorMessage);
    return throwError(errorMessage);
 }
}
