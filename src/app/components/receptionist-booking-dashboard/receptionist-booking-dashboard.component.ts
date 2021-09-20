import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ViewAllBookingService } from 'src/app/services/view-all-booking.service';

@Component({
  selector: 'app-receptionist-booking-dashboard',
  templateUrl: './receptionist-booking-dashboard.component.html',
  styleUrls: ['./receptionist-booking-dashboard.component.css']
})
export class ReceptionistBookingDashboardComponent implements OnInit {

  constructor(public router:Router) { }

  ngOnInit(): void {
  }
  viewBookings(){

    this.router.navigate(['viewAllBookings'])
    console.log("view All Booking records called")
  }

}
