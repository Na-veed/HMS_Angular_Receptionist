import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { ReceptionistBookingDashboardComponent } from './components/receptionist-booking-dashboard/receptionist-booking-dashboard.component';
import { ViewAllBookingsComponent } from './components/view-all-bookings/view-all-bookings.component';
import { AllocateRoomsComponent } from './components/allocate-rooms/allocate-rooms.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UnBookedListComponent } from './components/un-booked-list/un-booked-list.component';

@NgModule({
  declarations: [
    AppComponent,
    ReceptionistBookingDashboardComponent,
    ViewAllBookingsComponent,
    AllocateRoomsComponent,
    UnBookedListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
