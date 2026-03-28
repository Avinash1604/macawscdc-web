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
  categories = ['PAYMENT QUESTIONS', 'THERAPY SESSIONS', 'GENERAL INFO'];
  selectedCategory = 'PAYMENT QUESTIONS';
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
    if (this.selectedCategory === 'THERAPY SESSIONS') return [this.faqs[0], this.faqs[1], this.faqs[4], this.faqs[6]];
    return [this.faqs[3]];
  }

  faqs = [
    {
      q: 'At what age can children start therapy?',
      a: 'We work with children from age 3 through 18. Our approaches are tailored to each developmental stage, from toddlers using play-based methods to teenagers using talk therapy and CBT.'
    },
    {
      q: 'How long does a typical therapy session last?',
      a: 'Most sessions run 50 minutes. For younger children (ages 3–6), we sometimes use 30-minute sessions to match their attention spans. Your therapist will recommend the best format for your child.'
    },
    {
      q: 'Do you accept insurance?',
      a: 'Yes, we accept most major insurance plans including BlueCross, Aetna, Cigna, and United Healthcare. We also offer a sliding scale fee for families who need financial assistance.'
    },
    {
      q: 'Will I be involved in my child\'s therapy?',
      a: 'Absolutely. Family involvement is a key part of our approach. We offer regular parent check-ins, and some treatment plans include joint family sessions to strengthen communication at home.'
    },
    {
      q: 'How many sessions will my child need?',
      a: 'This varies greatly by the child and presenting concerns. Some children benefit from 6–10 sessions, while others with more complex needs may continue longer. We review progress together every 4–6 sessions.'
    },
    {
      q: 'Is everything my child says kept confidential?',
      a: 'Yes. Confidentiality is fundamental to therapy. The only exceptions are when there is risk of harm to the child or others, which we always explain clearly to families before starting.'
    },
    {
      q: 'Do you offer online/telehealth sessions?',
      a: 'Yes! We offer secure telehealth sessions for families who prefer remote appointments. Our online platform is HIPAA-compliant and works on any device.'
    }
  ];
}
