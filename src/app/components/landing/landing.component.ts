import { Component } from '@angular/core';
import { LandingNavbarComponent } from "./landing-navbar/landing-navbar.component";
import { PlatsExplorerComponent } from './plats-explorer/plats-explorer.component';
import { LandingBannerComponent } from './landing-banner/landing-banner.component';

@Component({
  selector: 'app-landing',
  imports: [PlatsExplorerComponent, LandingNavbarComponent, LandingBannerComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
