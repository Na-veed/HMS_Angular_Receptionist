import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Booking } from 'src/app/models/booking.model';
import { ViewAllBookingService } from 'src/app/services/view-all-booking.service';

@Component({
  selector: 'app-allocate-rooms',
  templateUrl: './allocate-rooms.component.html',
  styleUrls: ['./allocate-rooms.component.css']
})
export class AllocateRoomsComponent implements OnInit {


  roomNumber ?:number;
  userName ?:string;
  bookingForm ?:FormGroup;
  booking ?: Booking;
  bookedList : Booking[] = [];
  constructor(public activedRoute:ActivatedRoute,public formBuilder:FormBuilder,public viewAllBookingService:ViewAllBookingService,public router:Router) {

   }


  ngOnInit(): void {
   // this.booking : Booking;
    this.roomNumber = 1;

    this.viewAllBookingService.getBookingRooms(this.roomNumber)
    .subscribe(data =>{
      console.log(data),
      this.bookedList=data
    })

    /* else{
      this.viewAllBookingService.unallocatedRooms(this.roomNumber)
      .subscribe(data=>{
        console.log(data),
        this.bookedList=data
        this.bookingForm = this.formBuilder.group(
          {
            userName:[this.bookedList.value,Validators.required],
          roomNumber:[this.booking.roomNumber,Validators.required]
          }
        )
      },
      error=>console.log(error)
      )
    } */
  }

  bookRoomPage()
  {

    //this.router.navigate(['allocateRoom'])
  }
}
