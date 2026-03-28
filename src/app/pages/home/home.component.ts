import { Component } from '@angular/core';
import { HeroComponent }         from '../../components/hero/hero.component';
// AboutComponent removed
import { ApproachComponent }     from '../../components/approach/approach.component';
import { WhoWeAreComponent }     from '../../components/who-we-are/who-we-are.component';
import { TherapiesComponent }    from '../../components/therapies/therapies.component';
import { WhyChooseUsComponent }  from '../../components/why-choose-us/why-choose-us.component';
// TeamComponent removed
import { TestimonialsCarouselComponent } from '../../components/testimonials-carousel/testimonials-carousel.component';
import { FaqComponent }          from '../../components/faq/faq.component';
import { GetAppointmentComponent } from '../../components/get-appointment/get-appointment.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ApproachComponent,
    WhoWeAreComponent,
    TherapiesComponent,
    WhyChooseUsComponent,
    TestimonialsCarouselComponent,
    FaqComponent,
    GetAppointmentComponent,
  ],
  template: `
    <app-hero></app-hero>
    <app-get-appointment></app-get-appointment>
    <app-approach></app-approach>
    <app-who-we-are></app-who-we-are>
    <app-therapies></app-therapies>
    <app-why-choose-us></app-why-choose-us>
    <app-testimonials-carousel></app-testimonials-carousel>
    <app-faq></app-faq>
  `
})
export class HomeComponent {}
