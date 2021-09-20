import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReceptionistBookingDashboardComponent } from './receptionist-booking-dashboard.component';

describe('ReceptionistBookingDashboardComponent', () => {
  let component: ReceptionistBookingDashboardComponent;
  let fixture: ComponentFixture<ReceptionistBookingDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReceptionistBookingDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReceptionistBookingDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
