import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-approach',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './approach.component.html',
  styleUrls: ['./approach.component.css']
})
export class ApproachComponent {
  steps = [
    {
      number: 1,
      title: 'Schedule Your Consultation',
      description: 'Easily book your child’s assessment with our expert therapists at your convenience. Choose a time that works for you and take the first step toward understanding your child’s developmental needs.'
    },
    {
      number: 2,
      title: 'Consultation with Our Specialist',
      description: 'Our certified child specialists connect with you and your child to understand concerns, developmental history, and behavioral patterns in a warm, child-friendly environment.'
    },
    {
      number: 3,
      title: 'Comprehensive Assessment',
      description: 'We conduct detailed assessments using evidence-based tools to identify developmental delays, sensory challenges, or behavioral concerns, ensuring an accurate and personalized therapy plan.'
    },
    {
      number: 4,
      title: 'Start Therapy Program',
      description: 'Based on the assessment, we design a customized therapy program focused on improving communication, behavior, motor skills, and overall development—while continuously tracking progress.'
    }
  ];
}
