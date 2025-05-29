  import { Component, output, signal } from '@angular/core';

@Component({
  selector: 'landing-navbar',
  imports: [],
  templateUrl: './landing-navbar.component.html',
  styleUrl: './landing-navbar.component.css'
})
export class LandingNavbarComponent {
  protected isLogued = signal<boolean>(false);
  protected showDropdown = signal<boolean>(false);
  appLayoutChange = output();

  openDropdown() {
    this.showDropdown.set(!this.showDropdown());
    this.appLayoutChange.emit();
  }
}
