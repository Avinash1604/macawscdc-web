import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
  quickLinks = [
    { href:'#home',label:'Home' },{ href:'#about',label:'About Us' },
    { href:'#services',label:'Services' },{ href:'#team',label:'Our Team' },
    { href:'#testimonials',label:'Reviews' },{ href:'#faq',label:'FAQ' },{ href:'#contact',label:'Contact' }
  ];
  services = ['Play Therapy','Behavioral Therapy','Occupational Therapy','School Readiness','Social Skills Training'];
}
