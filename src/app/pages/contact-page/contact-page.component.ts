import { Component } from '@angular/core';
import { ContactComponent } from '../../components/contact/contact.component';

@Component({
  selector: 'app-contact-page',
  standalone: true,
  imports: [ContactComponent],
  template: `
    <div class="page-hero">
      <div class="container">
        <div class="breadcrumb"><a href="/">Home</a> / Contact</div>
        <h1>Get In <span>Touch</span></h1>
        <p>Ready to book your cab? Contact us or fill the form below — we respond within minutes!</p>
      </div>
    </div>
    <app-contact></app-contact>

    <!-- Map Embed -->
    <div class="map-section">
      <div class="container">
        <h3>Find Us in Tirupati</h3>
        <div class="map-embed">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3875.4!2d79.4192!3d13.6288!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMTPCsDM3JzQ0LjAiTiA3OcKwMjUnMDkuMiJF!5e0!3m2!1sen!2sin!4v1234567890"
            width="100%"
            height="350"
            style="border:0;"
            allowfullscreen=""
            loading="lazy">
          </iframe>
        </div>
      </div>
    </div>
  `,
  styles: [`
  .page-hero {
    background: linear-gradient(135deg, #0f2027, #203a43);
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

  .map-section {
    padding: 4rem 0 6rem;
    background: #fdf8f0;

    h3 {
      font-family: 'Playfair Display', serif;
      font-size: 1.5rem;
      color: #1c1c2e;
      margin-bottom: 1.5rem;
    }
  }

  .map-embed {
    border-radius: 16px;
    overflow: hidden;
    box-shadow: 0 8px 32px rgba(0,0,0,0.1);
  }
  `]
})
export class ContactPageComponent {}
