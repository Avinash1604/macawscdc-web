import { Component } from '@angular/core';
import { GetAppointmentComponent } from '../../components/get-appointment/get-appointment.component';

@Component({
  selector: 'app-school-readiness-page',
  standalone: true,
  imports: [GetAppointmentComponent],
  templateUrl: './school-readiness.component.html',
  styleUrls: ['./school-readiness.component.css']
})
export class SchoolReadinessPageComponent {}
