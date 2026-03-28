import { Component } from '@angular/core';
import { AppointmentComponent } from '../../components/appointment/appointment.component';

@Component({
  selector: 'app-appointment-page',
  standalone: true,
  imports: [AppointmentComponent],
  templateUrl: './appointment.component.html'
})
export class AppointmentPageComponent {}
