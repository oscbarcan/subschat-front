import { Component, signal } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-profile',
  imports: [NavbarComponent],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
export class ProfileComponent {
  cards = signal([
    {
      subscription: 'Crunchyroll Pack',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: 'Crunchyroll Pack',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: 'Crunchyroll Pack',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: 'Crunchyroll Pack',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: 'Crunchyroll Pack',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: 'Crunchyroll Pack',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: 'Crunchyroll Pack',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: 'Crunchyroll Pack',
      persons: 4,
      price: 25,
      timestamp: 2,
    }
  ]);

  cards2 = signal([
    {
      subscription: 'Crunchyroll Pack',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: 'Crunchyroll Pack',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: 'Crunchyroll Pack',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: 'Crunchyroll Pack',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: 'Crunchyroll Pack',
      persons: 4,
      price: 25,
      timestamp: 2,
    }
  ]);
}
