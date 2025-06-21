import { NgClass } from '@angular/common';
import { Component, ElementRef, inject, input, OnInit, signal } from '@angular/core';

@Component({
  selector: 'plats-carousel',
  imports: [NgClass], 
  templateUrl: './plats-carousel.component.html',
  styleUrl: './plats-carousel.component.css',
})
export class PlatsCarouselComponent implements OnInit {
  public mode = input<'complex' | 'simple'>('complex');
  public scrollBehaviour = input<'auto' | 'manual-only'>('manual-only');


  private element = inject(ElementRef).nativeElement as HTMLElement;
  protected scrollLocked = signal<boolean>(false);
  cards = signal([
    {
      subscription: '1',
      imageSrc: '/img/carousel/crunchyroll-carousel.jpg',
      imageAlt: 'Crunchy carousel image',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '2',
      imageSrc: '/img/carousel/crunchyroll-carousel.jpg',
      imageAlt: 'Crunchy carousel image',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '3',
      imageSrc: '/img/carousel/crunchyroll-carousel.jpg',
      imageAlt: 'Crunchy carousel image',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '4',
      imageSrc: '/img/carousel/crunchyroll-carousel.jpg',
      imageAlt: 'Crunchy carousel image',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '5',
      imageSrc: '/img/carousel/crunchyroll-carousel.jpg',
      imageAlt: 'Crunchy carousel image',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '6',
      imageSrc: '/img/carousel/crunchyroll-carousel.jpg',
      imageAlt: 'Crunchy carousel image',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '7',
      imageSrc: '/img/carousel/crunchyroll-carousel.jpg',
      imageAlt: 'Crunchy carousel image',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '8',
      imageSrc: '/img/carousel/crunchyroll-carousel.jpg',
      imageAlt: 'Crunchy carousel image',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '9',
      imageSrc: '/img/carousel/crunchyroll-carousel.jpg',
      imageAlt: 'Crunchy carousel image',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
    {
      subscription: '10',
      imageSrc: '/img/carousel/crunchyroll-carousel.jpg',
      imageAlt: 'Crunchy carousel image',
      persons: 4,
      price: 25,
      timestamp: 2,
    },
  ]);

  ngOnInit(): void {
    if (this.scrollBehaviour() == 'auto') {
      this.startAutoScroll();
    }
  }

  private startAutoScroll(direction: 'right' | 'left' = 'right') {
      let msPerMove = 2000;
      let intervalCounter = 0;
      const showedCards = Number(getComputedStyle(this.element).getPropertyValue('--cards-number'));
      const currentInterval = setInterval(() => {
        intervalCounter++;
        this.scrollContainer(direction);
        if (intervalCounter == this.cards().length - showedCards) {
          clearInterval(currentInterval);
          const nextDirection = direction == 'right' ? 'left' : 'right';
          this.startAutoScroll(nextDirection);
        }
      }, msPerMove);
  }

  protected scrollContainer(direction: 'left' | 'right') {
    this.scrollLocked.set(true);
    const content = this.element.querySelector('.content') as HTMLElement;
    const card = this.element.querySelector('.card-container');
    const cardDimension = card?.getBoundingClientRect();
    const containerWidth = cardDimension?.width;
    if (direction == 'right') {
      content.scrollLeft += (containerWidth! + 20);
    } else {
      content.scrollLeft -= (containerWidth! + 20);
    }
    setTimeout(() => {
      this.scrollLocked.set(false);
    }, 1000);
  }
}
