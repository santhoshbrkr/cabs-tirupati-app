import { Component } from '@angular/core';
import { ServicesComponent } from '../../components/services/services.component';
import { FleetComponent } from '../../components/fleet/fleet.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-services-page',
  standalone: true,
  imports: [ServicesComponent, FleetComponent, TestimonialsComponent, ContactComponent],
  template: `
    <div class="page-hero">
      <div class="container">
        <div class="breadcrumb"><a href="/">Home</a> / Services</div>
        <h1>Our <span>Services</span></h1>
        <p>Comprehensive cab solutions for every travel need in Tirupati.</p>
      </div>
    </div>
    <app-services></app-services>
    <app-fleet></app-fleet>
    <app-testimonials></app-testimonials>
    <app-contact></app-contact>
  `,
  styles: [`
  .page-hero {
    background: linear-gradient(135deg, #1a1a2e, #0f3460);
    padding: 9rem 0 4rem;
    color: #fff;

    h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2rem, 5vw, 3.5rem);
      margin-bottom: 0.75rem;
      span { color: #e07b39; }
    }

    p { color: rgba(255,255,255,0.65); font-size: 1.05rem; }
  }

  .breadcrumb {
    font-size: 0.82rem;
    color: rgba(255,255,255,0.45);
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;

    a { color: #e07b39; }
  }
  `]
})
export class ServicesPageComponent {}
