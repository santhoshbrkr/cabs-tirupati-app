import { Component, OnInit, OnDestroy, signal } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit, OnDestroy {
  currentSlide = signal(0);
  private interval?: ReturnType<typeof setInterval>;

  slides = [
    {
      title: 'Your Sacred Journey',
      subtitle: 'Begins Here',
      desc: 'Comfortable, reliable cab service for Tirupati Tirumala & beyond. Available 24/7 with experienced drivers.',
      bg: 'slide-1'
    },
    {
      title: 'Airport Transfers',
      subtitle: 'On Time, Every Time',
      desc: 'Punctual airport pick-up & drop service. We track your flight and ensure you never miss it.',
      bg: 'slide-2'
    },
    {
      title: 'Outstation Travel',
      subtitle: 'Across Andhra Pradesh',
      desc: 'From Tirupati to Chennai, Bengaluru, Hyderabad — we take you everywhere comfortably.',
      bg: 'slide-3'
    }
  ];

  stats = [
    { value: '10+', label: 'Years Experience' },
    { value: '5000+', label: 'Happy Customers' },
    { value: '24/7', label: 'Available' },
    { value: '50+', label: 'Vehicles' }
  ];

  ngOnInit() {
    this.interval = setInterval(() => {
      this.currentSlide.update(s => (s + 1) % this.slides.length);
    }, 5000);
  }

  ngOnDestroy() {
    if (this.interval) clearInterval(this.interval);
  }

  setSlide(index: number) {
    this.currentSlide.set(index);
  }
}
