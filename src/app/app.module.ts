import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { RoomsComponent } from './components/rooms/rooms.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ElementsComponent } from './components/elements/elements.component';
import { ConactComponent } from './components/conact/conact.component';
import { AboutComponent } from './components/about/about.component';
import { BookingsComponent } from './components/bookings/bookings.component';
import { HttpClientModule } from '@angular/common/http';
import { DatePipe } from '@angular/common';
import { CancellationComponent } from './components/cancellation/cancellation.component';
import { BookingsHistoryComponent } from './components/bookings-history/bookings-history.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    FooterComponent,
    NavbarComponent,
    RoomsComponent,
    BlogsComponent,
    ElementsComponent,
    ConactComponent,
    AboutComponent,
    BookingsComponent,
    CancellationComponent,
    BookingsHistoryComponent,
   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [DatePipe],
  bootstrap: [AppComponent]
})
export class AppModule { }
