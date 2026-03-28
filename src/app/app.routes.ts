import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutPageComponent)
  },
  {
    path: 'appointment',
    loadComponent: () => import('./pages/appointment/appointment.component').then(m => m.AppointmentPageComponent)
  },
  {
    path: 'team',
    loadComponent: () => import('./components/team/team.component').then(m => m.TeamComponent)
  },
  {
    path: 'faq',
    loadComponent: () => import('./components/faq/faq.component').then(m => m.FaqComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactPageComponent)
  },
  { path: '**', redirectTo: '' }
];
