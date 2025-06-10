import { Component, signal } from '@angular/core';
import { ClickOutsideDirective } from '../../../directives/click-outside.directive';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'landing-navbar',
  imports: [ClickOutsideDirective, RouterLink],
  templateUrl: './landing-navbar.component.html',
  styleUrl: './landing-navbar.component.css',
})
export class LandingNavbarComponent {
  protected isLogued = signal<boolean>(true);
  protected showDropdown = signal<boolean>(false);

  protected openDropdown() {
    this.showDropdown.set(true);
  }
}
