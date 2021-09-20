import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable,throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { Booking } from '../models/booking.model';
import { Room } from '../models/room.model';

const bookingURL="http://localhost:9090/bookRoom";
const roomURL="http://localhost:9090/room";
@Injectable({
  providedIn: 'root'
})
export class ViewAllBookingService {


  // Http Headers
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  //DI
  constructor(public http: HttpClient) { }
  getBookings():Observable<Booking[]>{
    return this.http.get<Booking[]>(bookingURL)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
  }




  getRecordByUserName(userName ?: string) : Observable<Booking>
  {
  return this.http.get<Booking>(`${bookingURL}/bookingByUserName/${userName}`)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    )
}

getBookingRooms(roomNumber:number):Observable<Booking[]>{
  return this.http.get<Booking[]>(`${bookingURL}/RetrieveBookingRoom/${roomNumber}`)
  .pipe(
    retry(1),
    catchError(this.errorHandler)
  );
  }

  updateBookingRecord(roomNumber:number,userName:string):Observable<Booking>
  {
    console.log("method calling - update")
    return this.http.put<Booking>(`${bookingURL}/updateBookingByRoomNumber/${roomNumber}/${userName}`,this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  getAllRoomsByStatus(roomStatus:boolean) : Observable<Room[]>
  {
    return this.http.get<Room[]>(`${roomURL}/roomByStatus/${roomStatus}`)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  updateRoomByStatus(roomStatus:boolean,roomId:number)
  {
    console.log("method calling - update")
    return this.http.put<Room>(`${roomURL}/updateRoomByStatus/${roomId}/${roomStatus}`,this.httpOptions)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    )
  }

  sendEmail(userName:string):Observable<Booking[]>
  {
    return this.http.get<Booking[]>(`${bookingURL}/tosendMail/${userName}`)
    .pipe(
      retry(1),
      catchError(this.errorHandler)
    );
    }

getAllRooms():Observable<Room[]>
{
  return this.http.get<Room[]>(`${roomURL}`)
  .pipe(
    retry(1),
    catchError(this.errorHandler)
  )

}

  errorHandler(error:{error:{ message : string;};status:any;message:any;}){
    let errorMessage ="";
    if(error.error instanceof ErrorEvent)
    {
      errorMessage = error.error.message;
    }else{
      errorMessage = `Error Code:${error.status}\nMessage:${error.message}`;
    }
    console.log(errorMessage);
    return throwError(errorMessage);
  }
}
