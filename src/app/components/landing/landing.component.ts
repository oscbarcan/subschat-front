import { Component } from '@angular/core';
import { LandingNavbarComponent } from "./landing-navbar/landing-navbar.component";
import { PlatsExplorerComponent } from './plats-explorer/plats-explorer.component';

@Component({
  selector: 'app-landing',
  imports: [PlatsExplorerComponent, LandingNavbarComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  
}
