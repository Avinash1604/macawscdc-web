import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './get-appointment.component.html',
  styleUrls: ['./get-appointment.component.css']
})
export class GetAppointmentComponent {
  formData = {
    name: '',
    phone: '',
    email: '',
    doctor: 'Dr. Matthew Edwards',
    date: '',
    time: '',
    message: ''
  };

  doctors = [
    'Dr. Matthew Edwards',
    'Dr. Olivia Parker',
    'Dr. Samuel Lee'
  ];

  send() {
    const mailto = `mailto:accounts@macawscdc.com?subject=Appointment%20Request&body=` +
      encodeURIComponent(
        `Name: ${this.formData.name}\nPhone: ${this.formData.phone}\nEmail: ${this.formData.email}\nDoctor: ${this.formData.doctor}\nDate: ${this.formData.date}\nTime: ${this.formData.time}\nMessage: ${this.formData.message}`
      );
    window.location.href = mailto;
  }
}
