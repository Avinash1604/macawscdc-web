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
      description: 'Elit fusce natoque egestas libero finibus si vestibulum commodo id pulvinar venenatis.',
      fullDescription: 'Commodo consequat at parturient est sagittis tellus vestibulum ultrices laoreet. Pellentesque risus nam cubilia nascetur morbi odio erat.',
      image: 'assets/theme/little-children-in-art-class-with-teacher.jpg',
      icon: 'bi-heart-pulse',
      isHighlighted: false
    },
    {
      id: 2,
      title: 'Physical Therapy',
      description: 'Commodo consequat at parturient est sagittis tellus vestibulum ultrices laoreet. Pellentesque risus nam cubilia nascetur morbi odio erat.',
      fullDescription: 'Commodo consequat at parturient est sagittis tellus vestibulum ultrices laoreet. Pellentesque risus nam cubilia nascetur morbi odio erat.',
      image: 'assets/theme/expressing-emotions-through-art.jpg',
      icon: 'bi-activity',
      isHighlighted: true
    },
    {
      id: 3,
      title: 'Speech Therapy',
      description: 'Elit fusce natoque egestas libero finibus si vestibulum commodo id pulvinar venenatis.',
      fullDescription: 'Commodo consequat at parturient est sagittis tellus vestibulum ultrices laoreet. Pellentesque risus nam cubilia nascetur morbi odio erat.',
      image: 'assets/theme/happy-family-with-parents-and-kids-posing-together-in-kitchen-preparing-meal-for-christmas-or.jpg',
      icon: 'bi-chat-dots',
      isHighlighted: false
    }
  ];
}
