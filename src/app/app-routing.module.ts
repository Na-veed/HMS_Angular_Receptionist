import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { BookingsHistoryComponent } from './components/bookings-history/bookings-history.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { CancellationComponent } from './components/cancellation/cancellation.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {path:"aboutus" , component:AboutComponent},
  {path:"", component:HomeComponent},
  {path:"bookingsPage", component:BookingsComponent},
  {path:"cancellationPage", component:CancellationComponent},
  {path:"bookingsHistory", component:BookingsHistoryComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
