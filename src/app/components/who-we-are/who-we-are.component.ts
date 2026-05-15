import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-who-we-are',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './who-we-are.component.html',
  styleUrls: ['./who-we-are.component.css']
})
export class WhoWeAreComponent {
  features = [
    {
      title: 'Evidence-Based Care',
      description: 'Proven therapy methods backed by clinical research. We use scientifically validated therapy approaches to ensure safe, effective, and measurable outcomes. Our programs are built on standardized assessments and globally recognized techniques to support consistent progress in communication, behavior, learning, and development.'
    },
    {
      title: 'Holistic Approach',
      description: 'Supporting the whole child—mind, body, and behavior. We go beyond isolated therapy by addressing your child’s overall development. Our integrated approach combines communication, motor skills, emotional well-being, and social interaction—ensuring balanced growth across all developmental areas. '
    },
    {
      title: 'Parent Report Support',
      description: 'Regular updates and clear progress reports for parents. We believe parents are key partners in a child’s development. Our team provides structured reports, progress tracking, and actionable insights so you can support your child’s growth at home with confidence.'
    },
    {
      title: 'Free Consultations',
      description: 'Start with a no-obligation expert consultation. We offer an initial consultation to understand your child’s needs, discuss concerns, and guide you on the right therapy path. This helps parents make informed decisions without pressure.'
    }
  ];
}
