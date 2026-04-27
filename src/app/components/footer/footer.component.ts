import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  quickLinks = [
    { href:'#home',label:'Home' },{ href:'#about',label:'About Us' },
    { href:'#services',label:'Services' },{ href:'#team',label:'Our Team' },
    { href:'#testimonials',label:'Reviews' },{ href:'#faq',label:'FAQ' },{ href:'#contact',label:'Contact' }
  ];
  services = ['Speech Therapy','Behavioral Therapy','Occupational Therapy','School Readiness','Special Education'];

  linkFor(service: string) {
    const key = service.toLowerCase();
    if (key.includes('occupational')) return '/occupational-therapy';
    if (key.includes('behavior') || key.includes('behaviour')) return '/behaviour-therapy';
    if (key.includes('speech')) return '/therapy4';
    if (key.includes('school')) return '/school-readiness';
    if (key.includes('Special')) return '/school-readiness';
    // fallback: contact page
    return '/contact';
  }
}
