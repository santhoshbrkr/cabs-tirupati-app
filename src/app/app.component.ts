import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  template: `
    <app-navbar></app-navbar>
    <main>
      <router-outlet></router-outlet>
    </main>
    <app-footer></app-footer>
    <!-- Floating CTA -->
    <a href="tel:+919666650595" class="float-call-btn" aria-label="Call us">
      <i class="fas fa-phone"></i>
    </a>
    <a href="https://wa.me/919666650595" target="_blank" class="float-whatsapp-btn" aria-label="WhatsApp">
      <i class="fab fa-whatsapp"></i>
    </a>
  `,
  styleUrls: ['./app.component.scss']
})
export class AppComponent {}
