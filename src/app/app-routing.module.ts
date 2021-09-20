import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReceptionistForgetpasswordComponent } from './components/receptionist-forgetpassword/receptionist-forgetpassword.component';
import { ReceptionistLoginComponent } from './components/receptionist-login/receptionist-login.component';
import { ReceptionistOperationsComponent } from './components/receptionist-operations/receptionist-operations.component';
import { ReceptionistProfileUpdateComponent } from './components/receptionist-profile-update/receptionist-profile-update.component';
import { ReceptionistProfileComponent } from './components/receptionist-profile/receptionist-profile.component';
import { RoomsComponent } from './components/rooms/rooms.component';

const routes: Routes = [
  {path:'receptionistprofile/:receptionistId', component: ReceptionistProfileComponent},
  {path:'receptionistlogin', component: ReceptionistLoginComponent},
  {path: 'receptionistprofileupdate/:receptionistId', component: ReceptionistProfileUpdateComponent},
  {path:'receptionistoperations/:receptionistId', component:ReceptionistOperationsComponent},
  {path: 'receptionistforgetPassword', component:ReceptionistForgetpasswordComponent},
  {path: '', component:RoomsComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
