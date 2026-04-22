import { Component } from '@angular/core';
import { GetAppointmentComponent } from '../../components/get-appointment/get-appointment.component';

@Component({
  selector: 'app-behaviour-therapy-page',
  standalone: true,
  imports: [GetAppointmentComponent],
  templateUrl: './behaviour-therapy.component.html',
  styleUrls: ['./behaviour-therapy.component.css']
})
export class BehaviourTherapyPageComponent {}
