import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-packages',
  standalone: true,
  imports: [RouterLink],
  template: `
  <section class="packages-section">
    <div class="container">
      <div class="section-header">
        <div class="label"><span>Tour Packages</span></div>
        <h2>Curated <span>Tirupati Packages</span></h2>
        <p>Pre-planned cab packages for pilgrims, tourists, and corporate travelers at the best rates.</p>
      </div>

      <div class="packages-grid">
        @for (pkg of packages; track pkg.title) {
          <div class="package-card" [class.featured]="pkg.featured">
            @if (pkg.featured) {
              <div class="featured-badge">Most Popular</div>
            }
            <div class="pkg-header" [style.background]="pkg.gradient">
              <div class="pkg-icon"><i [class]="pkg.icon"></i></div>
              <h3>{{ pkg.title }}</h3>
              <div class="pkg-duration"><i class="fas fa-clock"></i> {{ pkg.duration }}</div>
            </div>
            <div class="pkg-body">
              <div class="pkg-price">
                <span>Starting from</span>
                <strong>{{ pkg.price }}</strong>
              </div>
              <ul class="pkg-includes">
                @for (item of pkg.includes; track item) {
                  <li><i class="fas fa-check"></i> {{ item }}</li>
                }
              </ul>
              <a href="tel:+919666650595" class="pkg-btn" [class.featured-btn]="pkg.featured">
                Book This Package <i class="fas fa-arrow-right"></i>
              </a>
            </div>
          </div>
        }
      </div>
    </div>
  </section>
  `,
  styles: [`
  .packages-section {
    padding: 6rem 0;
    background: #fff;
  }

  .packages-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(290px, 1fr));
    gap: 1.75rem;
    align-items: start;
  }

  .package-card {
    border-radius: 20px;
    overflow: hidden;
    border: 1.5px solid #f0ebe0;
    transition: all 0.35s;
    position: relative;

    &:hover {
      transform: translateY(-6px);
      box-shadow: 0 24px 60px rgba(0,0,0,0.12);
    }

    &.featured {
      border-color: #e07b39;
      box-shadow: 0 12px 40px rgba(224, 123, 57, 0.2);
    }
  }

  .featured-badge {
    position: absolute;
    top: 1rem;
    right: 1rem;
    background: #fff;
    color: #e07b39;
    padding: 0.3rem 0.9rem;
    border-radius: 50px;
    font-size: 0.72rem;
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.06em;
    box-shadow: 0 2px 10px rgba(0,0,0,0.1);
  }

  .pkg-header {
    padding: 2rem;
    color: #fff;
    position: relative;
  }

  .pkg-icon {
    font-size: 2rem;
    margin-bottom: 0.75rem;
  }

  h3 {
    font-family: 'Playfair Display', serif;
    font-size: 1.25rem;
    font-weight: 700;
    margin-bottom: 0.5rem;
  }

  .pkg-duration {
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    background: rgba(255,255,255,0.2);
    padding: 0.3rem 0.75rem;
    border-radius: 50px;
    font-size: 0.8rem;
  }

  .pkg-body {
    padding: 1.75rem;
    background: #fff;
  }

  .pkg-price {
    display: flex;
    flex-direction: column;
    margin-bottom: 1.25rem;
    padding-bottom: 1.25rem;
    border-bottom: 1px dashed #f0ebe0;

    span { font-size: 0.75rem; color: #999; text-transform: uppercase; letter-spacing: 0.05em; }
    strong { font-family: 'Playfair Display', serif; font-size: 1.6rem; color: #e07b39; }
  }

  .pkg-includes {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    li {
      display: flex;
      align-items: center;
      gap: 0.6rem;
      font-size: 0.87rem;
      color: #555;

      i { color: #27ae60; font-size: 0.7rem; flex-shrink: 0; }
    }
  }

  .pkg-btn {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    padding: 0.85rem;
    border-radius: 12px;
    font-size: 0.9rem;
    font-weight: 600;
    background: #f5f0e8;
    color: #1c1c2e;
    transition: all 0.25s;

    i { transition: transform 0.25s; }
    &:hover i { transform: translateX(4px); }

    &:hover { background: #f0ebe0; }

    &.featured-btn {
      background: linear-gradient(135deg, #e07b39, #c8922a);
      color: #fff;
      box-shadow: 0 4px 16px rgba(224, 123, 57, 0.3);

      &:hover { box-shadow: 0 6px 24px rgba(224, 123, 57, 0.45); }
    }
  }
  `]
})
export class PackagesComponent {
  packages = [
    {
      title: 'Tirumala Darshan',
      icon: 'fas fa-om',
      duration: 'Full Day',
      price: '₹1,350',
      featured: false,
      gradient: 'linear-gradient(135deg, #8b1a1a, #c0392b)',
      includes: ['Tirupati pickup & drop', 'Tirumala darshan route', 'Waiting charges included', 'Up to 8 hours', 'Swift Dzire / Etios']
    },
    {
      title: 'Tirupati City Tour',
      icon: 'fas fa-map-marked-alt',
      duration: 'Full Day',
      price: '₹1,750',
      featured: true,
      gradient: 'linear-gradient(135deg, #e07b39, #c8922a)',
      includes: ['Padmavathi Temple', 'Kapilathertham', 'Zoo Park & ISKCON', 'Chandragiri Fort', 'All parking included']
    },
    {
      title: 'Airport Transfer',
      icon: 'fas fa-plane',
      duration: 'One Way',
      price: '₹950',
      featured: false,
      gradient: 'linear-gradient(135deg, #0f2027, #203a43)',
      includes: ['Flight tracking', 'On-time pickup', 'Luggage assistance', 'Air-conditioned', 'Driver with nameplate']
    },
    {
      title: 'Tirupati to Chennai',
      icon: 'fas fa-road',
      duration: 'One Way ~3h',
      price: '₹3,500',
      featured: false,
      gradient: 'linear-gradient(135deg, #2c7873, #1a4a46)',
      includes: ['Door-to-door service', 'Experienced highway driver', 'AC vehicle', 'Toll charges included', 'Innova / Crysta']
    },
    {
      title: 'Corporate Package',
      icon: 'fas fa-briefcase',
      duration: 'Monthly',
      price: 'Custom',
      featured: false,
      gradient: 'linear-gradient(135deg, #1a1a2e, #2d2d44)',
      includes: ['Dedicated vehicles', 'Uniformed drivers', 'Monthly invoicing', 'Priority booking', 'Premium fleet only']
    },
    {
      title: 'Group Pilgrimage',
      icon: 'fas fa-users',
      duration: '2 Days',
      price: '₹5,200',
      featured: false,
      gradient: 'linear-gradient(135deg, #5b2a86, #8e44ad)',
      includes: ['Tempo Traveller (15-seat)', 'Tirumala & local sightseeing', 'Experienced driver', 'All routes covered', 'Group discount']
    }
  ];
}
