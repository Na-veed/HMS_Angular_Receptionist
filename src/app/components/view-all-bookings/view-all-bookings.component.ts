import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Booking } from 'src/app/models/booking.model';
import { ViewAllBookingService } from 'src/app/services/view-all-booking.service';

@Component({
  selector: 'app-view-all-bookings',
  templateUrl: './view-all-bookings.component.html',
  styleUrls: ['./view-all-bookings.component.css']
})
export class ViewAllBookingsComponent implements OnInit {
  errorMessage ?:string;
  successMessage ?:string;
  bookingForm?:FormGroup;
  constructor(public viewAllBookingService:ViewAllBookingService,public router:Router) { }

  booking : Booking []=[];
  item:any;
  ngOnInit(): void {
    this.viewAllBookingService.getBookings().subscribe((data : any[])=>{
      console.log("******booking received  from Spring ******");
      console.log(data);
      this.booking= data;
    },err => this.errorMessage = err)
  }

}
