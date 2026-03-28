import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="about-section">
      <div class="container">
        <div class="row align-items-center g-5">
          <!-- Left Visual -->
          <div class="col-lg-6">
            <div class="about-visual position-relative">
              <div class="about-img-wrap">
                <div class="about-img-placeholder">
                  <div class="img-inner">
                    <span class="img-emoji">👩‍⚕️</span>
                    <p>Caring professionals<br>dedicated to your child</p>
                  </div>
                </div>
                <!-- Floating badges -->
                <div class="about-badge badge-exp">
                  <div class="badge-num">15+</div>
                  <div class="badge-txt">Years of Experience</div>
                </div>
                <div class="about-badge badge-happy">
                  <div class="d-flex align-items-center gap-2">
                    <span style="font-size:24px">😊</span>
                    <div>
                      <div class="badge-num small">500+</div>
                      <div class="badge-txt">Happy Families</div>
                    </div>
                  </div>
                </div>
              </div>
              <!-- deco -->
              <div class="about-deco-dot dot-1"></div>
              <div class="about-deco-dot dot-2"></div>
            </div>
          </div>

          <!-- Right Content -->
          <div class="col-lg-6">
            <div class="section-badge">About Us</div>
            <h2 class="section-title">We Create Safe Spaces for <span class="text-primary">Growing Minds</span></h2>
            <p class="mb-4">
              At Kindera, we believe every child deserves access to compassionate mental health support.
              Our team of licensed psychologists and therapists specializes in working with children
              aged 3–18, using evidence-based, play-centered approaches.
            </p>

            <div class="about-features">
              <div class="af-item" *ngFor="let item of features">
                <div class="af-icon" [style.background]="item.bg" [style.color]="item.color">
                  <i [class]="'bi ' + item.icon"></i>
                </div>
                <div>
                  <h6 class="af-title">{{ item.title }}</h6>
                  <p class="af-desc">{{ item.desc }}</p>
                </div>
              </div>
            </div>

            <a href="#contact" class="btn btn-primary mt-4">
              <i class="bi bi-calendar2-heart me-2"></i>Schedule a Consultation
            </a>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .about-section {
      padding: 80px 0;
      background: #ffffff;
    }

    .about-img-wrap {
      position: relative;
      display: inline-block;
      width: 100%;
    }
    .about-img-placeholder {
      background: linear-gradient(135deg, rgba(23, 162, 162, 0.12), rgba(109, 213, 255, 0.18));
      border-radius: 32px;
      height: 460px;
      display: flex; align-items: center; justify-content: center;
    }
    .img-inner { text-align: center; }
    .img-emoji { font-size: 100px; display: block; margin-bottom: 16px; }
    .img-inner p { color: var(--kindera-text); font-weight: 600; }

    .about-badge {
      position: absolute;
      background: #fff;
      border-radius: 16px;
      padding: 14px 20px;
      box-shadow: 0 8px 20px rgba(0,0,0,0.08);
    }
    .badge-exp { bottom: 30px; left: -20px; }
    .badge-happy { top: 40px; right: -20px; }
    .badge-num { font-size: 22px; font-weight: 900; color: var(--kindera-primary); font-family: 'Quicksand', sans-serif; }
    .badge-num.small { font-size: 18px; }
    .badge-txt { font-size: 11px; color: var(--kindera-text); font-weight: 600; }

    .about-deco-dot {
      position: absolute; border-radius: 50%;
    }
    .dot-1 {
      width: 80px; height: 80px;
      background: rgba(23, 162, 162, 0.15);
      top: -20px; left: -20px;
      animation: float 4s ease-in-out infinite;
    }
    .dot-2 {
      width: 50px; height: 50px;
      background: rgba(109, 213, 255, 0.2);
      bottom: 80px; right: -10px;
      animation: float 5s ease-in-out infinite 1s;
    }

    /* Features */
    .about-features { display: flex; flex-direction: column; gap: 20px; }
    .af-item { display: flex; align-items: flex-start; gap: 16px; }
    .af-icon {
      width: 52px; height: 52px; border-radius: 14px;
      display: flex; align-items: center; justify-content: center;
      font-size: 22px; flex-shrink: 0;
    }
    .af-title { font-weight: 800; font-size: 15px; color: var(--kindera-heading); margin-bottom: 4px; }
    .af-desc  { font-size: 13px; color: var(--kindera-text); margin: 0; }
  `]
})
export class AboutComponent {
  features = [
    {
      icon: 'bi-heart-pulse',
      title: 'Evidence-Based Approaches',
      desc: 'CBT, play therapy, and mindfulness methods proven to work for children.',
      bg: 'rgba(23, 162, 162, 0.12)', color: 'var(--kindera-primary)'
    },
    {
      icon: 'bi-people-fill',
      title: 'Family-Centered Care',
      desc: 'We involve parents and caregivers every step of the healing journey.',
      bg: 'rgba(109, 213, 255, 0.12)', color: 'var(--kindera-secondary)'
    },
    {
      icon: 'bi-shield-check',
      title: 'Safe & Confidential',
      desc: 'All sessions are private and follow the highest ethical standards.',
      bg: 'rgba(255, 183, 3, 0.12)', color: 'var(--kindera-accent)'
    }
  ];
}
