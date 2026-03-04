import { Component, signal } from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'app-fleet',
  standalone: true,
  imports: [TitleCasePipe],
  templateUrl: './fleet.component.html',
  styleUrls: ['./fleet.component.scss']
})
export class FleetComponent {
  activeFilter = signal('all');

  filters = ['all', 'sedan', 'suv', 'minivan'];

  vehicles = [
    { name: 'Swift Dzire', type: 'sedan', seats: 4, ac: true, tag: 'Economy', icon: '🚗', price: '₹11/km', features: ['Air Conditioned', 'Music System', 'GPS Tracking'] },
    { name: 'Toyota Etios', type: 'sedan', seats: 4, ac: true, tag: 'Comfort', icon: '🚙', price: '₹14/km', features: ['Air Conditioned', 'USB Charging', 'Spacious Boot'] },
    { name: 'Toyota Innova', type: 'suv', seats: 7, ac: true, tag: 'Popular', icon: '🚐', price: '₹17/km', features: ['7 Seater', 'Ample Luggage', 'Premium Comfort'] },
    { name: 'Innova Crysta', type: 'suv', seats: 7, ac: true, tag: 'Premium', icon: '🏎️', price: '₹20/km', features: ['Luxury Interior', '7 Seater', 'Entertainment System'] },
    { name: 'Tavera', type: 'suv', seats: 9, ac: true, tag: 'Group', icon: '🚌', price: '₹16/km', features: ['9 Seater', 'Group Travel', 'Air Conditioned'] },
    { name: 'Tempo Traveller', type: 'minivan', seats: 15, ac: true, tag: 'Large Group', icon: '🚐', price: '₹24/km', features: ['15 Seater', 'Pilgrimage Groups', 'Luggage Rack'] }
  ];

  get filteredVehicles() {
    const filter = this.activeFilter();
    return filter === 'all' ? this.vehicles : this.vehicles.filter(v => v.type === filter);
  }

  setFilter(f: string) {
    this.activeFilter.set(f);
  }
}
