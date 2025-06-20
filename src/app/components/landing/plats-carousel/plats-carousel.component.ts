import { Component, ElementRef, inject, input, signal } from '@angular/core';

@Component({
  selector: 'plats-carousel',
  imports: [],
  templateUrl: './plats-carousel.component.html',
  styleUrl: './plats-carousel.component.css',
})
export class PlatsCarouselComponent {
  public mode = input<'complex' | 'simple'>('complex');
  private element = inject(ElementRef).nativeElement as HTMLElement;
  protected scrollLocked = signal<boolean>(false);

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

  protected scrollContainer(direction: 'left' | 'right') {
    this.scrollLocked.set(true);
    const content = this.element.querySelector('.content') as HTMLElement;
    const card = this.element.querySelector('.card-container');
    const cardDimension = card?.getBoundingClientRect();
    const containerWidth = cardDimension?.width;
    if (direction == 'right') {
      content!.scrollLeft += (containerWidth! + 20);
    } else {
      content!.scrollLeft -= (containerWidth! + 20);
    }
    setTimeout(() => {
      this.scrollLocked.set(false);
    }, 1000);
  }
}
