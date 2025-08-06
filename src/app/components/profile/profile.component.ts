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
      subscription: '1',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '2',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '3',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '4',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '5',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '6',
      persons: 4,
      price: 25,
      timestamp: 2,
    }
  ]);

  cards2 = signal([
    {
      subscription: '1',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '2',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '3',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '4',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '5',
      persons: 4,
      price: 25,
      timestamp: 2,
    }
  ]);
}
