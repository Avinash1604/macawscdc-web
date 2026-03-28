import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="faq" class="faq-section">
      <div class="container">
        <div class="row g-5 align-items-start">
          <div class="col-lg-4">
            <div class="section-badge">PAYMENT QUESTIONS</div>
            <h2 class="section-title">Most Popular <span class="text-primary">Questions</span></h2>
            <p class="mt-3 mb-4" style="color:var(--kindera-text)">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
            </p>
            <a href="#contact" class="btn btn-primary">
              <i class="bi bi-chat-dots me-2"></i>Ask Us Anything
            </a>

            <div class="faq-contact-card mt-4">
              <div class="fcc-icon">📞</div>
              <div>
                <div class="fcc-label">Still have questions?</div>
                <div class="fcc-phone">+1 (555) 123-4567</div>
              </div>
            </div>
          </div>

          <div class="col-lg-8">
            <div class="accordion faq-accordion" id="faqAccordion">
              <div class="faq-item" *ngFor="let item of faqs; let i = index">
                <div class="faq-question" (click)="toggle(i)" [class.active]="openIndex === i">
                  <span class="faq-q-text">{{ item.q }}</span>
                  <i class="bi" [ngClass]="openIndex === i ? 'bi-chevron-down' : 'bi-chevron-right'"></i>
                </div>
                <div class="faq-answer" [class.open]="openIndex === i">
                  <p>{{ item.a }}</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .faq-section {
      padding: 80px 0;
      background: #ffffff;
    }

    .faq-contact-card {
      background: #fff;
      border-radius: 16px;
      padding: 18px 20px;
      display: flex; align-items: center; gap: 14px;
      box-shadow: 0 4px 12px rgba(0,0,0,0.08);
    }
    .fcc-icon { font-size: 32px; }
    .fcc-label { font-size: 12px; color: var(--kindera-text); font-weight: 600; }
    .fcc-phone { font-size: 16px; font-weight: 800; color: var(--kindera-primary); }

    .faq-item { margin-bottom: 16px; }
    .faq-question {
      background: #f3f4f9;
      border-radius: 14px;
      padding: 20px 26px;
      display: flex; justify-content: space-between; align-items: center;
      cursor: pointer;
      font-weight: 800; font-size: 1.05rem;
      color: #333;
      box-shadow: none;
      transition: background 0.2s, color 0.2s;
      gap: 12px;
    }
    .faq-question:hover { background: #eceef6; }
    .faq-question.active { background: #eceef6; }
    .faq-question i { font-size: 22px; flex-shrink: 0; color: #333; }
    .faq-q-text { display:block; }

    .faq-answer {
      max-height: 0; overflow: hidden;
      transition: max-height 0.4s ease, padding 0.3s;
      background: #fff; border-radius: 0 0 12px 12px;
      padding: 0 22px;
      margin-top: 6px;
      box-shadow: 0 6px 18px rgba(16,71,192,0.03);
    }
    .faq-answer.open {
      max-height: 220px;
      padding: 18px 22px 22px;
    }
    .faq-answer p { margin: 0; font-size: 14px; color: var(--kindera-text); line-height: 1.8; }
  `]
})
export class FaqComponent {
  openIndex: number | null = 0;

  toggle(i: number) {
    this.openIndex = this.openIndex === i ? null : i;
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
