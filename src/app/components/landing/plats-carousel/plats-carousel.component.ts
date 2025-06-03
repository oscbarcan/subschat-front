import { Component, signal } from '@angular/core';

@Component({
  selector: 'plats-carousel',
  imports: [],
  templateUrl: './plats-carousel.component.html',
  styleUrl: './plats-carousel.component.css'
})
export class PlatsCarouselComponent {
  cards = signal([
    {
      subscription: 'crunchiroll',
      persons: 4,
      price: 25,
      timestamp: 2
    }, {
      subscription: 'crunchiroll',
      persons: 4,
      price: 25,
      timestamp: 2
    }, {
      subscription: 'crunchiroll',
      persons: 4,
      price: 25,
      timestamp: 2
    }, {
      subscription: 'crunchiroll',
      persons: 4,
      price: 25,
      timestamp: 2
    }, {
      subscription: 'crunchiroll',
      persons: 4,
      price: 25,
      timestamp: 2
    }, {
      subscription: 'crunchiroll',
      persons: 4,
      price: 25,
      timestamp: 2
    }
  ])
}
