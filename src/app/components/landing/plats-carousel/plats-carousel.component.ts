import { Component, input, signal } from '@angular/core';

@Component({
  selector: 'plats-carousel',
  imports: [],
  templateUrl: './plats-carousel.component.html',
  styleUrl: './plats-carousel.component.css',
})
export class PlatsCarouselComponent {
  public mode = input<'complex'|'simple'>('complex');
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
    },
    {
      subscription: '7',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '8',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '9',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '10',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
  ]);

  // FIXME: Refactor this method
  scrollLeft() {
    const card = document.querySelector('.card-container');
    const cardDimension = card?.getBoundingClientRect();
    const containerWidth = cardDimension?.width;
    const content = document.querySelector('.content');
    content!.scrollLeft -= containerWidth! + 20;
  }

  // FIXME: Refactor this method
  scrollRight() {
    const card = document.querySelector('.card-container');
    const cardDimension = card?.getBoundingClientRect();
    const containerWidth = cardDimension?.width;
    const content = document.querySelector('.content');
    content!.scrollLeft += containerWidth! + 20;
  }
}
