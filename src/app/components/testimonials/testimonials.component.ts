import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
  <section class="testimonials-section">
    <div class="container">
      <div class="section-header">
        <div class="label"><span>Testimonials</span></div>
        <h2>What Our <span>Passengers Say</span></h2>
        <p>Thousands of satisfied pilgrims and travelers trust us for their journeys.</p>
      </div>

      <div class="testimonials-grid">
        @for (t of testimonials; track t.name) {
          <div class="testimonial-card">
            <div class="stars">
              @for (s of [1,2,3,4,5]; track s) {
                <i class="fas fa-star" [class.dim]="s > t.rating"></i>
              }
            </div>
            <p class="quote">"{{ t.quote }}"</p>
            <div class="person">
              <div class="avatar">{{ t.name[0] }}</div>
              <div>
                <strong>{{ t.name }}</strong>
                <span>{{ t.location }}</span>
              </div>
            </div>
          </div>
        }
      </div>
    </div>
  </section>

  <!-- CTA Banner -->
  <div class="cta-banner">
    <div class="container cta-inner">
      <div class="cta-text">
        <h2>Ready for Your <span>Tirupati Journey?</span></h2>
        <p>Book your cab now and experience the most comfortable and reliable cab service in Tirupati.</p>
      </div>
      <div class="cta-actions">
        <a href="tel:+919666650595" class="cta-phone-btn">
          <i class="fas fa-phone-alt"></i>
          <div>
            <small>Call Anytime 24/7</small>
            <strong>+91 96666 50595</strong>
          </div>
        </a>
        <a href="https://wa.me/919666650595" target="_blank" class="cta-wa-btn">
          <i class="fab fa-whatsapp"></i> WhatsApp Us
        </a>
      </div>
    </div>
  </div>
  `,
  styles: [`
  .testimonials-section {
    padding: 6rem 0 4rem;
    background: linear-gradient(180deg, #fff 0%, #fdf8f0 100%);
  }

  .testimonials-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 1.5rem;
  }

  .testimonial-card {
    background: #fff;
    border-radius: 20px;
    padding: 2rem;
    border: 1px solid #f0ebe0;
    transition: all 0.3s;
    position: relative;

    &::before {
      content: '"';
      position: absolute;
      top: 1.5rem;
      right: 1.5rem;
      font-family: 'Playfair Display', serif;
      font-size: 4rem;
      line-height: 1;
      color: rgba(224,123,57,0.1);
    }

    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 16px 40px rgba(0,0,0,0.08);
      border-color: #e07b39;
    }
  }

  .stars {
    display: flex;
    gap: 3px;
    margin-bottom: 1rem;

    i {
      color: #f59e0b;
      font-size: 0.9rem;

      &.dim { color: #ddd; }
    }
  }

  .quote {
    font-size: 0.95rem;
    color: #555;
    line-height: 1.7;
    font-style: italic;
    margin-bottom: 1.5rem;
  }

  .person {
    display: flex;
    align-items: center;
    gap: 0.75rem;

    .avatar {
      width: 42px;
      height: 42px;
      border-radius: 50%;
      background: linear-gradient(135deg, #e07b39, #c8922a);
      color: #fff;
      display: flex;
      align-items: center;
      justify-content: center;
      font-weight: 700;
      font-size: 1.1rem;
      flex-shrink: 0;
    }

    strong {
      display: block;
      font-size: 0.92rem;
      color: #1c1c2e;
    }

    span {
      font-size: 0.78rem;
      color: #999;
    }
  }

  /* CTA Banner */
  .cta-banner {
    background: linear-gradient(135deg, #1a1a2e 0%, #0f3460 100%);
    padding: 4rem 0;
    position: relative;
    overflow: hidden;

    &::before {
      content: '';
      position: absolute;
      inset: 0;
      background: radial-gradient(ellipse at 80% 50%, rgba(224,123,57,0.2) 0%, transparent 50%);
    }
  }

  .cta-inner {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 2rem;
    position: relative;
    z-index: 1;
    flex-wrap: wrap;
  }

  .cta-text {
    h2 {
      font-family: 'Playfair Display', serif;
      font-size: clamp(1.5rem, 3vw, 2.2rem);
      color: #fff;
      margin-bottom: 0.5rem;

      span { color: #e07b39; }
    }

    p { color: rgba(255,255,255,0.6); font-size: 0.95rem; }
  }

  .cta-actions {
    display: flex;
    align-items: center;
    gap: 1rem;
    flex-wrap: wrap;
  }

  .cta-phone-btn {
    display: flex;
    align-items: center;
    gap: 0.75rem;
    background: linear-gradient(135deg, #e07b39, #c8922a);
    color: #fff;
    padding: 1rem 1.5rem;
    border-radius: 14px;
    text-decoration: none;
    transition: all 0.25s;
    box-shadow: 0 4px 20px rgba(224, 123, 57, 0.35);

    i { font-size: 1.4rem; }

    small { display: block; font-size: 0.7rem; opacity: 0.85; }
    strong { display: block; font-size: 1.05rem; }

    &:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(224, 123, 57, 0.45); }
  }

  .cta-wa-btn {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    background: #25d366;
    color: #fff;
    padding: 1rem 1.5rem;
    border-radius: 14px;
    font-weight: 600;
    font-size: 0.95rem;
    transition: all 0.25s;
    box-shadow: 0 4px 20px rgba(37, 211, 102, 0.3);

    i { font-size: 1.2rem; }

    &:hover { transform: translateY(-2px); box-shadow: 0 8px 28px rgba(37, 211, 102, 0.45); }
  }
  `]
})
export class TestimonialsComponent {
  testimonials = [
    { name: 'Ramesh Kumar', location: 'Chennai', rating: 5, quote: 'Excellent service! The driver was very punctual and knowledgeable about Tirupati routes. Made our pilgrimage very comfortable.' },
    { name: 'Priya Sharma', location: 'Hyderabad', rating: 5, quote: 'Booked an Innova Crysta for our family of 6. The vehicle was spotless, driver was professional. Highly recommend for Tirumala trip.' },
    { name: 'Suresh Naidu', location: 'Bengaluru', rating: 5, quote: 'Airport pickup at 3 AM and they were there on time! Reliable, safe, and affordable. Best cab service in Tirupati.' },
    { name: 'Anitha Reddy', location: 'Vijayawada', rating: 4, quote: 'Booked for local sightseeing — Padmavathi Temple, Zoo Park, Chandragiri Fort. The driver knew everything about each place.' },
    { name: 'Vikram Singh', location: 'Delhi', rating: 5, quote: 'Used for corporate travel. Very professional, clean car, and the driver was courteous. Will use again on my next Tirupati visit.' },
    { name: 'Deepa Rao', location: 'Coimbatore', rating: 5, quote: 'The Tempo Traveller for our 12-member pilgrim group was perfect. Spacious, clean, and the fare was very reasonable.' }
  ];
}
