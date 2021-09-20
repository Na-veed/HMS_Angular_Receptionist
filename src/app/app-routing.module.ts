import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllocateRoomsComponent } from './components/allocate-rooms/allocate-rooms.component';
import { ReceptionistBookingDashboardComponent } from './components/receptionist-booking-dashboard/receptionist-booking-dashboard.component';
import { UnBookedListComponent } from './components/un-booked-list/un-booked-list.component';
import { ViewAllBookingsComponent } from './components/view-all-bookings/view-all-bookings.component';

const routes: Routes = [
  {path:'',component:ReceptionistBookingDashboardComponent},
  {path:'viewAllBookings',component:ViewAllBookingsComponent },
  {path:'allocateRoom',component:AllocateRoomsComponent},
  {path:'allocateRoom/:userName',component:AllocateRoomsComponent},
  {path:'unBooked',component:UnBookedListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
