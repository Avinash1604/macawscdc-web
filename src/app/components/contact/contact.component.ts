import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent {
  submitted = false;

  form = {
    parentName: '', childName: '', email: '',
    phone: '', age: '', service: '', message: ''
  };

  contactItems = [
    { icon: 'bi-geo-alt-fill',    label: 'Address',    value: '35, 22nd Cross Rd, Jaya Nagar 1st Block East, Jayanagar, Bengaluru, Karnataka 560011', bg: 'rgba(255,255,255,0.2)', color: '#fff' },
    { icon: 'bi-telephone-fill',  label: 'Phone',      value: '+91-9071499599, +91-9071699599', bg: 'rgba(255,255,255,0.2)', color: '#fff' },
    { icon: 'bi-envelope-fill',   label: 'Email',      value: 'director@macawscdc.com', bg: 'rgba(255,255,255,0.2)', color: '#fff' }
  ];

  submitForm() {
    if (this.form.parentName && this.form.email) {
      this.submitted = true;
    }
  }
}
