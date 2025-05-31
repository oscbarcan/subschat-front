import { Component, signal } from '@angular/core';
import { ClickOutsideDirective } from '../../../directives/click-outside.directive';

@Component({
  selector: 'landing-navbar',
  imports: [ClickOutsideDirective],
  templateUrl: './landing-navbar.component.html',
  styleUrl: './landing-navbar.component.css',
})
export class LandingNavbarComponent {
  protected isLogued = signal<boolean>(false);
  protected showDropdown = signal<boolean>(false);

  protected openDropdown() {
    this.showDropdown.set(true);
  }
}
