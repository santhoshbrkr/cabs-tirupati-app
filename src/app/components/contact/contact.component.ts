import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  formData = {
    name: '',
    phone: '',
    email: '',
    from: '',
    to: '',
    date: '',
    vehicle: '',
    message: ''
  };
  submitted = signal(false);

  vehicles = ['Swift Dzire', 'Toyota Etios', 'Toyota Innova', 'Innova Crysta', 'Tavera', 'Tempo Traveller'];

  onSubmit() {
    this.submitted.set(true);
    // Reset form after submission
    setTimeout(() => {
      this.formData = { name: '', phone: '', email: '', from: '', to: '', date: '', vehicle: '', message: '' };
      this.submitted.set(false);
    }, 4000);
  }
}
