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
    { icon: 'bi-geo-alt-fill',    label: 'Address',    value: '123 Healing Way, Suite 201, New York, NY 10001', bg: 'rgba(255,255,255,0.2)', color: '#fff' },
    { icon: 'bi-telephone-fill',  label: 'Phone',      value: '+1 (555) 123-4567', bg: 'rgba(255,255,255,0.2)', color: '#fff' },
    { icon: 'bi-envelope-fill',   label: 'Email',      value: 'hello@kinderapsy.com', bg: 'rgba(255,255,255,0.2)', color: '#fff' }
  ];

  submitForm() {
    if (this.form.parentName && this.form.email) {
      this.submitted = true;
    }
  }
}
