  import { Component, output } from '@angular/core';

@Component({
  selector: 'app-landing-navbar',
  imports: [],
  templateUrl: './landing-navbar.component.html',
  styleUrl: './landing-navbar.component.css'
})
export class LandingNavbarComponent {
  isLogin = false;
  showDropdown = false;
  appLayoutChange = output();

  openDropdown() {
    this.showDropdown = !this.showDropdown;
    this.appLayoutChange.emit();
  }
}
