import { Component, OnInit } from '@angular/core';
import { WhoWeAreComponent } from '../../components/who-we-are/who-we-are.component';
import { GetAppointmentComponent } from '../../components/get-appointment/get-appointment.component';

@Component({
  selector: 'app-about-page',
  standalone: true,
  imports: [WhoWeAreComponent, GetAppointmentComponent],
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutPageComponent implements OnInit {
  ngOnInit(): void {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' });
  }
}
