import { Component } from '@angular/core';
import { AuthComponent } from '@triwebdev/auth-component';
import { LandingNavbarComponent } from '../landing/landing-navbar/landing-navbar.component';

@Component({
  selector: 'app-login',
  imports: [AuthComponent, LandingNavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
