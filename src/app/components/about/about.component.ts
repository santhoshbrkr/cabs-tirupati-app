import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {
  features = [
    { icon: 'fas fa-shield-alt', title: 'Safe & Secure', desc: 'All vehicles are GPS-tracked with verified, background-checked drivers for your safety.' },
    { icon: 'fas fa-clock', title: 'On-Time Pickup', desc: 'Punctuality is our promise. We arrive 10 minutes before the scheduled time.' },
    { icon: 'fas fa-rupee-sign', title: 'Transparent Billing', desc: 'No hidden charges. What you see is what you pay — always.' },
    { icon: 'fas fa-headset', title: '24/7 Support', desc: 'Our customer support team is available round the clock for any assistance.' },
    { icon: 'fas fa-car', title: 'Well Maintained Fleet', desc: 'Vehicles are cleaned, inspected, and serviced regularly for a premium experience.' },
    { icon: 'fas fa-mobile-alt', title: 'Easy Booking', desc: 'Book via call, WhatsApp, or our website — simple, fast, and confirmed instantly.' }
  ];
}
