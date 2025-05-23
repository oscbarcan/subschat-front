import { Component } from '@angular/core';
import { LandingNavbarComponent } from "./landing-navbar/landing-navbar.component";

@Component({
  selector: 'app-landing',
  imports: [LandingNavbarComponent],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {

}
