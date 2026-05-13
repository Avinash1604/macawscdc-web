import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HelpCardsComponent } from '../help-cards/help-cards.component';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule, HelpCardsComponent],
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.css']
})
export class FaqComponent {
  categories = ['THERAPY SESSIONS'];
  selectedCategory = 'THERAPY SESSIONS';
  openIndex: number | null = 0;

  toggle(i: number) {
    this.openIndex = this.openIndex === i ? null : i;
  }

  selectCategory(cat: string) {
    this.selectedCategory = cat;
    this.openIndex = 0; // Reset open accordion on category change
  }

  get filteredFaqs() {
    if (this.selectedCategory === 'PAYMENT QUESTIONS') return [this.faqs[2], this.faqs[5]];
    if (this.selectedCategory === 'THERAPY SESSIONS') return this.faqs;
    return [this.faqs[3]];
  }

  faqs = [
    {
      q: 'At what age can children start therapy?',
      a: 'Children can begin therapy as early as developmental concerns are noticed. Early intervention helps support better developmental outcomes and skill development.'
    },
    {
      q: 'How long does a typical therapy session last?',
      a: 'Most therapy sessions are typically 45 minutes, depending on the child’s individual needs and therapy goals.'
    },
    {
      q: 'How many sessions will my child need?',
      a: 'The number of sessions varies based on your child’s needs, progress, and therapy goals. Regular reviews are conducted to monitor progress and adjust the therapy plan accordingly.'
    },
    {
      q: 'Do you offer online/telehealth sessions?',
      a: 'Yes, online therapy and parent-guidance sessions may be available for selected services based on the child’s needs and suitability.'
    },
    {
      q: 'Will parents receive guidance or training?',
      a: 'Yes, hands-on parent training and regular guidance are provided to help parents support their child’s progress at home and in daily routines.'
    },
    {
      q: 'How do you create a therapy plan for each child?',
      a: 'Each child receives an individualized therapy plan based on detailed assessments, developmental needs, strengths, and goals.'
    },
    {
      q: 'How do I know if my child needs therapy?',
      a: 'If your child has challenges with communication, behavior, attention, learning, motor skills, social interaction, or daily activities, a developmental assessment can help identify the right support.'
    },
    {
      q: 'Do you provide progress updates?',
      a: 'Yes, regular progress reviews and parent feedback sessions are conducted to discuss the child’s development and therapy goals.'
    },
    {
      q: 'Is therapy play-based?',
      a: 'Yes, our sessions are child-friendly, engaging, and play-based to encourage learning, participation, and skill development in a comfortable environment.'
    },
    {
      q: 'Which therapies do you offer?',
      a: 'We offer Occupational Therapy, Speech and Language Therapy, Behavior Therapy, Special Education, School Readiness Programs, and parent guidance services.'
    }
  ];
}
