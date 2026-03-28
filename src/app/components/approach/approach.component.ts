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
      title: 'Get Appointment',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      number: 2,
      title: 'Meet With Our Therapist',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      number: 3,
      title: 'Diagnostic Observation',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    },
    {
      number: 4,
      title: 'Begin Therapy Service',
      description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.'
    }
  ];
}
