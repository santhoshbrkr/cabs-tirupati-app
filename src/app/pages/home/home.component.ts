import { Component } from '@angular/core';
import { HeroComponent } from '../../components/hero/hero.component';
import { ServicesComponent } from '../../components/services/services.component';
import { AboutComponent } from '../../components/about/about.component';
import { FleetComponent } from '../../components/fleet/fleet.component';
import { PackagesComponent } from '../../components/packages/packages.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    HeroComponent,
    ServicesComponent,
    AboutComponent,
    FleetComponent,
    PackagesComponent,
    TestimonialsComponent,
    ContactComponent
  ],
  template: `
    <app-hero></app-hero>
    <app-services></app-services>
    <app-about></app-about>
    <app-fleet></app-fleet>
    <app-packages></app-packages>
    <app-testimonials></app-testimonials>
    <app-contact></app-contact>
  `
})
export class HomeComponent {}
