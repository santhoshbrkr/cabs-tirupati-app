import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-services',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent {
  services = [
    {
      icon: 'fas fa-plane-arrival',
      title: 'Airport Transfers',
      desc: 'Seamless pick-up and drop at Tirupati Airport. We track your flight and arrive right on time.',
      features: ['Flight tracking', 'Meet & greet', '24/7 available'],
      color: '#e07b39'
    },
    {
      icon: 'fas fa-om',
      title: 'Tirumala Darshan',
      desc: 'Devoted pilgrimage cab service to Tirumala. We ensure your journey to Lord Venkateswara is comfortable.',
      features: ['Via Alipiri steps', 'Tirumala road', 'Local guides available'],
      color: '#c8922a'
    },
    {
      icon: 'fas fa-road',
      title: 'Outstation Cabs',
      desc: 'Travel from Tirupati to Chennai, Hyderabad, Bengaluru and any city across South India.',
      features: ['One-way & round trip', 'Experienced drivers', 'Affordable fares'],
      color: '#8b1a1a'
    },
    {
      icon: 'fas fa-city',
      title: 'Local Sightseeing',
      desc: 'Explore all the sacred and scenic spots of Tirupati — Padmavathi Temple, Chandragiri Fort & more.',
      features: ['Half & full day', 'Custom itinerary', 'Knowledgeable drivers'],
      color: '#2c7873'
    },
    {
      icon: 'fas fa-briefcase',
      title: 'Corporate Travel',
      desc: 'Premium, punctual business travel with luxury vehicles for executives and corporate groups.',
      features: ['Luxury fleet', 'Uniformed drivers', 'Invoice billing'],
      color: '#1a1a2e'
    },
    {
      icon: 'fas fa-users',
      title: 'Group Tours',
      desc: 'Comfortable Tempo Travellers and Innova Crysta for family groups and pilgrim groups.',
      features: ['Up to 15 passengers', 'Tempo Traveller', 'Customized routes'],
      color: '#5b2a86'
    }
  ];
}
