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
    path: 'occupational-therapy',
    loadComponent: () => import('./pages/occupational-therapy/occupational-therapy.component').then(m => m.OccupationalTherapyPageComponent)
  },
  {
    path: 'behaviour-therapy',
    loadComponent: () => import('./pages/behaviour-therapy/behaviour-therapy.component').then(m => m.BehaviourTherapyPageComponent)
  },
  /* {
    path: 'school-readiness',
    loadComponent: () => import('./pages/school-readiness/school-readiness.component').then(m => m.SchoolReadinessPageComponent)
  }, */
    {
    path: 'school-readiness',
    loadComponent: () => import('./pages/school-readiness/school-readiness.component').then(m => m.SchoolReadinessPageComponent)
  },
    {
    path: 'school-readiness',
    loadComponent: () => import('./pages/school-readiness/school-readiness.component').then(m => m.SchoolReadinessPageComponent)
  },
  {
    path: 'therapy4',
    loadComponent: () => import('./pages/therapy4/therapy4.component').then(m => m.Therapy4)
  },
  {
    path: 'therapy5',
    loadComponent: () => import('./pages/therapy5/therapy5.component').then(m => m.Therapy5)
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
