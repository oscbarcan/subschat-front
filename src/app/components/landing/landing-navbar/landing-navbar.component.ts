import { Component, signal } from '@angular/core';
import { ClickOutsideDirective } from '../../../directives/click-outside.directive';
import { RouterLink } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
import { LoaderComponent } from '../../loader/loader.component';

@Component({
  selector: 'landing-navbar',
  imports: [ClickOutsideDirective, RouterLink, ReactiveFormsModule, LoaderComponent],
  templateUrl: './landing-navbar.component.html',
  styleUrl: './landing-navbar.component.css',
})
  
export class LandingNavbarComponent {
  protected isLogued = signal<boolean>(true);
  protected showDropdown = signal<boolean>(false);
  protected showSearchDropdown = signal<boolean>(false);

  protected showInputSearcher = signal<boolean>(true);

  protected productInput = new FormControl('');

  protected openDropdown() {
    this.showDropdown.set(true);
  }

  protected toggleSearchDropdown() {
    this.showSearchDropdown.set(!this.showSearchDropdown());
  }

  protected searchProduct() {
    /* Missing logic of sending info to the backend */    
    this.productInput.setValue('');
    this.showInputSearcher.set(false);

    // Now we should subscribe to the observer making a post request. When it is completed, set the showInputSearcher to true again
  }
}
