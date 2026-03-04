import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'services',
    loadComponent: () => import('./pages/services-page/services-page.component').then(m => m.ServicesPageComponent)
  },
  {
    path: 'packages',
    loadComponent: () => import('./pages/packages-page/packages-page.component').then(m => m.PackagesPageComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact-page/contact-page.component').then(m => m.ContactPageComponent)
  },
  { path: '**', redirectTo: '' }
];
