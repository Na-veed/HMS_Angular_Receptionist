import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Bookings } from '../models/bookings';


const bookingsUrl  = "http://localhost:9090/bookRoom"

const receptionUrl = "http://localhost:9090/Reception"

@Injectable({
  providedIn: 'root'
})


export class ReceptionService {

  constructor(public httpClient:HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  getBookings():Observable<Bookings[]>{
   
    return this.httpClient.get<Bookings[]>(bookingsUrl).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  getBookingsHistory():Observable<Bookings[]>{
    return this.httpClient.get<Bookings[]>(bookingsUrl+"/bookingHistory").pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

 cancelBooking(userName:string,customerCheckIn:string):Observable<Bookings>{
    return this.httpClient.put<Bookings>(receptionUrl+"/"+`${userName}`+"/"+`${customerCheckIn}`,this.httpOptions).pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  } 

  getCancelBookings():Observable<Bookings[]>{
    return this.httpClient.get<Bookings[]>(receptionUrl + "/requests/yes").pipe(
      retry(0),
      catchError(this.errorHandler) 
    )
  }

  deleteHistory(bookingId:number):Observable<Bookings>{
    return this.httpClient.delete<Bookings>(bookingsUrl + "/history/" + `${bookingId}`) .pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  
errorHandler(error: { error: { message: string; }; status: any; message: any; }) {
  let errorMessage = '';
  if (error.error instanceof ErrorEvent) {
    // Get client-side error
    errorMessage = error.error.message;
  } else {
    // Get server-side message
    errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
  }

  switch (error.status) {
    case 200:    console.log("200's");

      break;
    case 401:
      break;
    case 403:
      break;
    case 0:
    case 400:
    case 405:
    case 406:
    case 409:
    case 500:
      break;
  }

  console.log(errorMessage);
  return throwError(error.status);
}
}
