import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-get-appointment',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './get-appointment.component.html',
  styleUrls: ['./get-appointment.component.css']
})
export class GetAppointmentComponent implements AfterViewInit, OnDestroy {
  formData = {
    name: '',
    phone: '',
    email: '',
    date: '',
    time: '',
    message: ''
  };

  send() {
    const mailto = `mailto:accounts@macawscdc.com?subject=Appointment%20Request&body=` +
      encodeURIComponent(
        `Name: ${this.formData.name}\nPhone: ${this.formData.phone}\nEmail: ${this.formData.email}\nDate: ${this.formData.date}\nTime: ${this.formData.time}\nMessage: ${this.formData.message}`
      );
    window.location.href = mailto;
  }

  private io?: IntersectionObserver | null;

  ngAfterViewInit(): void {
    const els = Array.from(document.querySelectorAll('.pre-enter-left, .pre-enter-right')) as HTMLElement[];

    if (!els.length) return;

    if (!('IntersectionObserver' in window)) {
      // fallback: reveal immediately
      els.forEach(el => {
        if (el.classList.contains('pre-enter-left')) el.classList.add('enter-left');
        if (el.classList.contains('pre-enter-right')) el.classList.add('enter-right');
      });
      return;
    }

    this.io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const el = entry.target as HTMLElement;
        if (el.classList.contains('pre-enter-left')) el.classList.add('enter-left');
        if (el.classList.contains('pre-enter-right')) el.classList.add('enter-right');
        this.io?.unobserve(el);
      });
    }, { threshold: 0.12 });

    els.forEach(el => this.io!.observe(el));
  }

  ngOnDestroy(): void {
    if (this.io) {
      this.io.disconnect();
      this.io = null;
    }
  }
}
