import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-therapies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './therapies.component.html',
  styleUrls: ['./therapies.component.css']
})
export class TherapiesComponent {
  therapies = [
    {
      id: 1,
      title: 'Occupational Therapy',
      description: 'Enhancing motor skills for confident, independent living.',
      fullDescription: 'Our occupational therapy programs are designed to strengthen motor development, sensory processing, and coordination. Through structured, child-friendly activities, we help children gain the skills they need to perform daily tasks with ease and confidence.',
      image: 'assets/img/OT.png',
      icon: 'bi-heart-pulse',
      isHighlighted: true
    },
    {
      id: 2,
      title: 'School Readiness Program',
      description: 'Build skills for a confident start to school.',
      fullDescription: 'Our school readiness program helps children develop attention, communication, early learning skills, and classroom behavior. Through structured and play-based activities, we prepare children to adapt confidently to school routines and learning environments.',
      image: 'assets/img/SRP.png',
      icon: 'bi-activity',
      isHighlighted: true
    },
    {
      id: 3,
      title: 'Behaviour Therapy',
      description: 'Build positive behaviors and improve focus.',
      fullDescription: 'Our behavior therapy programs focus on improving attention, emotional regulation, and social interaction. Through personalized strategies and consistent reinforcement, we help children build meaningful behavior patterns and everyday skills.',
      image: 'assets/img/BT.png',
      icon: 'bi-chat-dots',
      isHighlighted: true
    }
  ];
}
