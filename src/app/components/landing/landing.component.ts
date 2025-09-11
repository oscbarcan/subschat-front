import { Component, signal } from '@angular/core';
import { PlatsExplorerComponent } from './plats-explorer/plats-explorer.component';
import { LandingBannerComponent } from './landing-banner/landing-banner.component';
import { PlatformName } from '../../types/platformName';
import { LandingFooterComponent } from './landing-footer/landing-footer.component';
import { NavbarComponent } from '../navbar/navbar.component';
import { CarouselComponent } from '@triwebdev/carousel';
import { CardComponent } from './card/card.component';
import { ModalComponent } from './card/modal/modal.component';

@Component({
  selector: 'app-landing',
  imports: [
    PlatsExplorerComponent,
    NavbarComponent,
    LandingBannerComponent,
    LandingFooterComponent,
    CarouselComponent,
    CardComponent,
    ModalComponent
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css',
})
export class LandingComponent {
  protected bannerChangeDealer = signal<PlatformName>('Crunchyroll');

  
  protected modalInfo = signal<any>({});
  protected showModal = signal<boolean>(false);


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

  receiveBannerNameChange(newName: PlatformName) {
    this.bannerChangeDealer.set(newName);
  }

  protected updateModalInfo(cardInfo: any) {
    this.showModal.set(true);
    this.modalInfo.set(cardInfo);
  } 
}
