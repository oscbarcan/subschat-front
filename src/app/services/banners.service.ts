import { Injectable } from '@angular/core';
import { Banner } from '../interfaces/banner';

@Injectable({
  providedIn: 'root'
})
export class BannersService {

  constructor() { }

  private banners:Banner[] = [
    {
      name: 'Crunchyroll',
      imageName: 'crunchy-banner.jpg'
    },
    {
      name: 'HBO',
      imageName: 'hbo-banner.jpg'
    },
    {
      name: 'Netflix',
      imageName: 'netflix-banner.jpg'
    },
    {
      name: 'Amazon Prime',
      imageName: 'prime-banner.jpg'
    },
  ];

  public getBanners() {
    return this.banners;
  }
}
