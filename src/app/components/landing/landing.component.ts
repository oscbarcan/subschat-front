import { Component, signal } from '@angular/core';
import { LandingNavbarComponent } from "./landing-navbar/landing-navbar.component";
import { PlatsExplorerComponent } from './plats-explorer/plats-explorer.component';
import { LandingBannerComponent } from './landing-banner/landing-banner.component';
import { PlatformName } from '../../types/platformName';
import { PlatsCarouselComponent } from "./plats-carousel/plats-carousel.component";

@Component({
  selector: 'app-landing',
  imports: [PlatsExplorerComponent, LandingNavbarComponent, LandingBannerComponent, PlatsCarouselComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

  protected bannerChangeDealer = signal<PlatformName>('Crunchyroll');

  receiveBannerNameChange(newName: PlatformName) {
    this.bannerChangeDealer.set(newName);
  }
}
