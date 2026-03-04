import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  destinations = [
    'Tirupati to Chennai', 'Tirupati to Hyderabad', 'Tirupati to Bengaluru',
    'Tirupati to Nellore', 'Tirupati to Vijayawada', 'Tirupati to Kadapa'
  ];

  services = [
    { label: 'Airport Cabs', path: '/services' },
    { label: 'Tirumala Darshan', path: '/services' },
    { label: 'Outstation Cabs', path: '/services' },
    { label: 'Local Sightseeing', path: '/services' },
    { label: 'Corporate Travel', path: '/services' },
    { label: 'Group Tours', path: '/services' }
  ];
}
