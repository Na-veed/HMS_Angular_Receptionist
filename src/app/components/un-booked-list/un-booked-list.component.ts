import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Booking } from 'src/app/models/booking.model';
import { Room } from 'src/app/models/room.model';
import { ViewAllBookingService } from 'src/app/services/view-all-booking.service';

@Component({
  selector: 'app-un-booked-list',
  templateUrl: './un-booked-list.component.html',
  styleUrls: ['./un-booked-list.component.css']
})
export class UnBookedListComponent implements OnInit {
  bookedList : Booking[] = [];
  roomNumber ?:number;
  roomStatus?:boolean;
  userName?:string;
  rooms:Room[] = [];
  item?:any;
  booking?:Booking;
  constructor(public activedRoute:ActivatedRoute,public formBuilder:FormBuilder,public viewAllBookingService:ViewAllBookingService,public router:Router) { }

  ngOnInit(): void {
    this.refreshPage();
  }

  bookRoomPage(customerUserName?:string)
  {
    //console.log(customerUserName)
    this.userName = customerUserName;
    this.viewAllBookingService.getRecordByUserName(this.userName)
    .subscribe(data=>{
      console.log(data),
      this.booking=data
      this.booking.roomNumber=this.roomNumber;
      console.log("from bookRoomPage "+this.booking.roomNumber)
      this.updated(this.userName,this.roomNumber)
     /*  this.viewAllBookingService.sendEmail(this.userName)
      console.log("updating mail room") */
      })


      //this.viewAllBookingService.

  }

  refreshPage()
  {
    this.roomNumber = 0;
    this.viewAllBookingService.getBookingRooms(this.roomNumber)
    .subscribe(data=>{
      console.log(data),
      this.bookedList=data
    })
    this.roomStatus=false;
    this.viewAllBookingService.getAllRoomsByStatus(this.roomStatus)
    .subscribe(data=>{
      console.log(data),
      this.rooms=data
    })
  }

  updated(userName?:string,roomNumber?:number)
  {

    this.viewAllBookingService.updateBookingRecord(roomNumber,userName).subscribe(data=>{
      console.log("updating room")
      this.roomStatus=true;
      this.viewAllBookingService.updateRoomByStatus(this.roomStatus,this.roomNumber)
      .subscribe(updateRoomdata=>{
        this.refreshPage()
        this.viewAllBookingService.sendEmail(this.userName)
        .subscribe(data1=>{

        })
      })

       console.log("updating mail room")
    })

  }

  selecteditem(item:any)
  {
    this.roomNumber=this.item;
    console.log(this.roomNumber)

  }
}
