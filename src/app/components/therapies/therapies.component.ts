import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-therapies',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './therapies.component.html',
  styleUrls: ['./therapies.component.css']
})
export class TherapiesComponent {

  constructor(private router: Router) {}


  therapies = [
    {
      id: 1,
      title: 'Occupational Therapy',
      description: 'Occupational therapy provides individualized support to help children develop motor, sensory, and daily living skills for greater independence and participation in everyday activities.',
      fullDescription: 'Our occupational therapy programs are designed to strengthen motor development, sensory processing, and coordination. Through structured, child-friendly activities, we help children gain the skills they need to perform daily tasks with ease and confidence.',
      image: 'assets/img/OT.png',
      icon: 'bi-heart-pulse',
      isHighlighted: true,
      route: 'occupational-therapy',
    },
    {
      id: 2,
      title: 'Speech Therapy',
      description: 'Improves a child’s communication by developing clear speech, language understanding, and confidence in expressing thoughts.',
      fullDescription: 'Speech therapy helps children improve communication skills, including speech clarity, language understanding, and expression.It uses structured, play-based techniques to develop speaking, listening, and social interaction abilities.The goal is to build confidence, effective communication, and everyday independence.',
      image: 'assets/img/speachTherapy.png',
      icon: 'bi-chat-dots',
      isHighlighted: true,
      route: 'therapy4'
    },
    {
      id: 3,
      title: 'Behaviour Therapy',
      description: 'Behavior therapy provides individualized support to help children develop positive behaviors, communication, and social skills for improved independence and everyday functioning.',
      fullDescription: 'Our behavior therapy programs focus on improving attention, emotional regulation, and social interaction. Through personalized strategies and consistent reinforcement, we help children build meaningful behavior patterns and everyday skills.',
      image: 'assets/img/BT.png',
      icon: 'bi-chat-dots',
      isHighlighted: true,
      route: 'behaviour-therapy'
    },
    {
      id: 4,
       title: 'School Readiness Program',
      description: 'School Readiness Program provides structured support to help children develop early learning, social, and behavioral skills for a smooth and confident transition into school.',
      fullDescription: 'Our school readiness program helps children develop attention, communication, early learning skills, and classroom behavior. Through structured and play-based activities, we prepare children to adapt confidently to school routines and learning environments.',
      image: 'assets/img/SRP.png',
      icon: 'bi-activity',
      isHighlighted: true,
      route: 'school-readiness',
    },
    {
      id: 5,
      title: 'Special Education',
      description: 'Special education provides individualized teaching and support tailored to help children with diverse learning needs develop academic, social, and life skills.',
      fullDescription: 'Special education provides individualized support to help children with developmental or learning challenges succeed.It uses tailored teaching methods and therapies to improve communication, behavior, and life skills.The goal is to build independence, confidence, and overall development.',
      image: 'assets/img/speducation.png',
      icon: 'bi-chat-dots',
      isHighlighted: true,
      route: 'therapy5'
    }
  ];

  onLearnMore(therapy: any) {
  console.log('Clicked:', therapy);
  this.router.navigate(['/', therapy]);  
}
}