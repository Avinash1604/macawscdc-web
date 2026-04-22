import { Component } from '@angular/core';
import { GetAppointmentComponent } from '../../components/get-appointment/get-appointment.component';

@Component({
  selector: 'app-occupational-therapy-page',
  standalone: true,
  imports: [GetAppointmentComponent],
  templateUrl: './occupational-therapy.component.html',
  styleUrls: ['./occupational-therapy.component.css']
})
export class OccupationalTherapyPageComponent {}
