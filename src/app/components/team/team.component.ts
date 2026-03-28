import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-team',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="team" class="team-section">
      <div class="container">
        <div class="text-center mb-5">
          <div class="section-badge">Our Experts</div>
          <h2 class="section-title">Meet Our <span class="text-primary">Caring Team</span></h2>
          <p class="section-subtitle">
            Our licensed therapists and child psychologists bring warmth, expertise,
            and genuine care to every session.
          </p>
        </div>

        <div class="row g-4 justify-content-center">
          <div class="col-sm-6 col-lg-3" *ngFor="let member of team">
            <div class="team-card">
              <div class="team-avatar" [style.background]="member.bg">
                <span class="team-emoji">{{ member.emoji }}</span>
              </div>
              <div class="team-info">
                <div class="team-name">{{ member.name }}</div>
                <div class="team-role">{{ member.role }}</div>
                <div class="team-exp">{{ member.exp }}</div>
                <div class="team-socials">
                  <a href="#"><i class="bi bi-linkedin"></i></a>
                  <a href="#"><i class="bi bi-envelope-fill"></i></a>
                  <a href="#"><i class="bi bi-telephone-fill"></i></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  `,
  styles: [`
    .team-section {
      padding: 80px 0;
      background: #f8fafb;
    }

    .team-card {
      background: #fff;
      border-radius: var(--border-radius-lg);
      overflow: hidden;
      box-shadow: 0 4px 15px rgba(0,0,0,0.08);
      transition: transform 0.3s, box-shadow 0.3s;
      text-align: center;
    }
    .team-card:hover {
      transform: translateY(-6px);
      box-shadow: 0 16px 48px rgba(23, 162, 162, 0.12);
    }
    .team-avatar {
      height: 180px;
      display: flex; align-items: center; justify-content: center;
    }
    .team-emoji { font-size: 80px; }
    .team-info { padding: 20px; }
    .team-name {
      font-size: 17px; font-weight: 800;
      color: var(--kindera-heading); margin-bottom: 4px;
    }
    .team-role {
      font-size: 13px; color: var(--kindera-primary);
      font-weight: 700; margin-bottom: 6px;
    }
    .team-exp {
      font-size: 12px; color: var(--kindera-text);
      margin-bottom: 14px;
    }
    .team-socials { display: flex; justify-content: center; gap: 10px; }
    .team-socials a {
      width: 34px; height: 34px;
      background: rgba(23, 162, 162, 0.1);
      color: var(--kindera-primary);
      border-radius: 8px;
      display: flex; align-items: center; justify-content: center;
      font-size: 14px; text-decoration: none;
      transition: all 0.2s;
    }
    .team-socials a:hover {
      background: var(--kindera-primary); color: #fff;
    }
  `]
})
export class TeamComponent {
  team = [
    { emoji: '👩‍⚕️', name: 'Dr. Sarah Mitchell', role: 'Lead Child Psychologist', exp: '12 years experience', bg: 'rgba(23, 162, 162, 0.10)' },
    { emoji: '👨‍⚕️', name: 'Dr. James Foster', role: 'Play Therapy Specialist', exp: '9 years experience',  bg: 'rgba(109, 213, 255, 0.10)' },
    { emoji: '👩‍🏫', name: 'Dr. Emily Chen',    role: 'CBT & Anxiety Expert',   exp: '11 years experience', bg: 'rgba(255, 183, 3, 0.10)' },
    { emoji: '👨‍🎨', name: 'Dr. Mark Torres',   role: 'ADHD & Behavior Coach',  exp: '8 years experience',  bg: 'rgba(233, 30, 140, 0.10)' }
  ];
}
