import { Component } from '@angular/core';
import { PackagesComponent } from '../../components/packages/packages.component';
import { TestimonialsComponent } from '../../components/testimonials/testimonials.component';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-packages-page',
  standalone: true,
  imports: [PackagesComponent, TestimonialsComponent, ContactComponent],
  template: `
    <div class="page-hero">
      <div class="container">
        <div class="breadcrumb"><a href="/">Home</a> / Packages</div>
        <h1>Tour <span>Packages</span></h1>
        <p>Pre-planned packages for pilgrims, tourists, and corporate travelers at the best rates.</p>
      </div>
    </div>
    <app-packages></app-packages>
    <app-testimonials></app-testimonials>
    <app-contact></app-contact>
  `,
  styles: [`
  .page-hero {
    background: linear-gradient(135deg, #8b1a1a, #c0392b);
    padding: 9rem 0 4rem;
    color: #fff;

    h1 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(2rem, 5vw, 3.5rem);
      margin-bottom: 0.75rem;
      span { color: #f0c060; }
    }

    p { color: rgba(255,255,255,0.75); font-size: 1.05rem; }
  }

  .breadcrumb {
    font-size: 0.82rem;
    color: rgba(255,255,255,0.5);
    margin-bottom: 1rem;
    text-transform: uppercase;
    letter-spacing: 0.06em;

    a { color: #f0c060; }
  }
  `]
})
export class PackagesPageComponent {}
