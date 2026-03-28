import { Component } from '@angular/core';
import { WhoWeAreComponent } from '../../components/who-we-are/who-we-are.component';
import { GetAppointmentComponent } from '../../components/get-appointment/get-appointment.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [WhoWeAreComponent, GetAppointmentComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutPageComponent {}
