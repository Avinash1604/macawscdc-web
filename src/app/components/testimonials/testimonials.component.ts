import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="testimonials" class="testimonials-section">
      <div class="container">
        <div class="text-center mb-5">
          <div class="section-badge">Parent Reviews</div>
          <h2 class="section-title">What <span class="text-primary">Families</span> Say About Us</h2>
          <p class="section-subtitle">
            Real stories from parents whose children have blossomed through our care.
          </p>
        </div>

        <div class="row g-4">
          <div class="col-md-6 col-lg-4" *ngFor="let t of testimonials">
            <div class="testi-card">
              <div class="testi-stars">
                <i class="bi bi-star-fill" *ngFor="let s of [1,2,3,4,5]"></i>
              </div>
              <p class="testi-text">"{{ t.text }}"</p>
              <div class="testi-author">
                <div class="testi-avatar">{{ t.avatar }}</div>
                <div>
                  <div class="testi-name">{{ t.name }}</div>
                  <div class="testi-child">{{ t.child }}</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- Rating summary -->
        <div class="rating-summary mt-5">
          <div class="row g-4 text-center">
            <div class="col-6 col-md-3" *ngFor="let stat of ratingStats">
              <div class="rs-num">{{ stat.num }}</div>
              <div class="rs-label">{{ stat.label }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .testimonials-section {
      padding: 80px 0;
      background: #ffffff;
    }

    .testi-card {
      background: #fff;
      border-radius: var(--border-radius-lg);
      padding: 32px 28px;
      box-shadow: 0 4px 15px rgba(0,0,0,0.08);
      height: 100%;
      transition: transform 0.3s, box-shadow 0.3s;
      border-top: 4px solid var(--kindera-primary);
    }
    .testi-card:hover {
      transform: translateY(-5px);
      box-shadow: 0 16px 48px rgba(23, 162, 162, 0.12);
    }
    .testi-stars { color: var(--kindera-accent); font-size: 14px; margin-bottom: 14px; display: flex; gap: 3px; }
    .testi-text {
      font-size: 15px; color: var(--kindera-text); line-height: 1.8;
      margin-bottom: 20px; font-style: italic;
    }
    .testi-author { display: flex; align-items: center; gap: 12px; }
    .testi-avatar {
      width: 48px; height: 48px; border-radius: 50%;
      background: rgba(23, 162, 162, 0.12);
      display: flex; align-items: center; justify-content: center;
      font-size: 24px; flex-shrink: 0;
    }
    .testi-name { font-weight: 800; font-size: 15px; color: var(--kindera-heading); }
    .testi-child { font-size: 12px; color: var(--kindera-text); }

    .rating-summary {
      background: linear-gradient(135deg, var(--kindera-light-bg), #e8f8f8);
      border-radius: var(--border-radius-xl);
      padding: 48px 32px;
    }
    .rs-num {
      font-size: 40px; font-weight: 900;
      color: var(--kindera-primary);
      font-family: 'Quicksand', sans-serif;
      margin-bottom: 6px;
    }
    .rs-label { font-size: 14px; font-weight: 700; color: var(--kindera-text); }
  `]
})
export class TestimonialsComponent {
  testimonials = [
    {
      avatar: '👩', name: 'Amanda Torres', child: 'Mom of Lily, age 7',
      text: 'Dr. Mitchell helped our daughter overcome her school anxiety in just a few months. The play therapy approach was perfect — Lily actually looks forward to her sessions!'
    },
    {
      avatar: '👨', name: 'David Kim', child: 'Dad of Noah, age 9',
      text: 'We were struggling with Noah\'s ADHD for years. Dr. Foster gave us practical tools and genuine compassion. Noah\'s confidence has soared since starting here.'
    },
    {
      avatar: '👩', name: 'Maria Gonzalez', child: 'Mom of twins, age 6',
      text: 'The family therapy sessions completely transformed how we communicate at home. Both our kids are happier and so are we. Truly life-changing.'
    },
    {
      avatar: '👨', name: 'James Patel', child: 'Dad of Emma, age 11',
      text: 'Emma was struggling with depression after we moved cities. The team here was incredibly patient and kind. She has blossomed into a confident, happy child again.'
    },
    {
      avatar: '👩', name: 'Rachel White', child: 'Mom of Oliver, age 8',
      text: 'The social skills group was exactly what Oliver needed. He has made real friends for the first time and his teacher has noticed a huge improvement at school.'
    },
    {
      avatar: '👨', name: 'Carlos Rivera', child: 'Dad of Sofia, age 5',
      text: 'From the moment we walked in, Sofia felt safe. The warm environment and dedicated staff make this place truly special. We are so grateful we found Kindera.'
    }
  ];

  ratingStats = [
    { num: '5.0 ⭐', label: 'Average Rating' },
    { num: '200+',   label: 'Parent Reviews' },
    { num: '98%',    label: 'Would Recommend' },
    { num: '500+',   label: 'Families Helped' }
  ];
}
