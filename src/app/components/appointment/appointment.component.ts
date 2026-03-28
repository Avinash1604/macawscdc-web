import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent {
  formData = {
    name: '',
    phone: '',
    email: '',
    date: '',
    time: ''
  };

  bookAppointment() {
    const mailtoLink = `mailto:web.macawscdc@gmail.com?subject=Book Appointment&body=Name: ${this.formData.name}%0DPhone: ${this.formData.phone}%0DEmail: ${this.formData.email}%0DDate: ${this.formData.date}%0DTime: ${this.formData.time}`;
    window.location.href = mailtoLink;
  }
}
