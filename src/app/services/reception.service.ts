import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {retry, catchError} from 'rxjs/operators'
import { Observable, throwError } from 'rxjs';
import { Receptionist } from '../models/receptionist';
const receptionUrl = "http://localHost:9090/Reception"
@Injectable({
  providedIn: 'root'
})
export class ReceptionService {
  httpOptions ={
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }
  constructor(public http: HttpClient) { }

  receptionistLogin(receptionistId: number, receptionistPassword: String): Observable<Receptionist>{
    return this.http.get<Receptionist>(`${receptionUrl}/searchByReceptionistIdAndReceptionistPassword/${receptionistId}/${receptionistPassword}`)
    .pipe(
      retry(0),
      catchError(this.errorHandler)
    )
   }
 
   getReceptionistById(receptionistId: number): Observable<Receptionist>{
     return this.http.get<Receptionist>(`${receptionUrl}/searchByReceptionistId/${receptionistId}`)
     .pipe(
       retry(0),
       catchError(this.errorHandler)
     )
   }
   getReceptionistByEmailId(receptionistEmail: String): Observable<Receptionist>{
     return this.http.get<Receptionist>(`${receptionUrl}/forgetpassword/${receptionistEmail}`)
     .pipe(
      retry(0),
      catchError(this.errorHandler)
    )
   }

   updateReceptionist(receptionist: Receptionist): Observable<Receptionist> {
     return this.http.put<Receptionist>(receptionUrl, receptionist, this.httpOptions)
       .pipe(
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
       // Get server-side error
       errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
     }
     console.log(errorMessage);
     return throwError(errorMessage);
   }
 
}
