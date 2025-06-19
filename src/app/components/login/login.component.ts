import { Component } from '@angular/core';
import { AuthComponent } from '@triwebdev/auth-component';
import { NavbarComponent } from '../navbar/navbar.component';

@Component({
  selector: 'app-login',
  imports: [AuthComponent, NavbarComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
