
import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllocateRoomsComponent } from './components/allocate-rooms/allocate-rooms.component';
import { ReceptionistForgetpasswordComponent } from './components/receptionist-forgetpassword/receptionist-forgetpassword.component';
import { ReceptionistLoginComponent } from './components/receptionist-login/receptionist-login.component';
import { ReceptionistOperationsComponent } from './components/receptionist-operations/receptionist-operations.component';
import { ReceptionistProfileUpdateComponent } from './components/receptionist-profile-update/receptionist-profile-update.component';
import { ReceptionistProfileComponent } from './components/receptionist-profile/receptionist-profile.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { UnBookedListComponent } from './components/un-booked-list/un-booked-list.component';
import { ViewAllBookingsComponent } from './components/view-all-bookings/view-all-bookings.component';

const routes: Routes = [
  {path:'receptionistprofile/:receptionistId', component: ReceptionistProfileComponent},
  {path:'receptionistlogin', component: ReceptionistLoginComponent},
  {path: 'receptionistprofileupdate/:receptionistId', component: ReceptionistProfileUpdateComponent},
  {path:'receptionistoperations/:receptionistId', component:ReceptionistOperationsComponent},
  {path: 'receptionistforgetPassword', component:ReceptionistForgetpasswordComponent},
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
