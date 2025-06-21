import { Routes } from '@angular/router';
import { LandingComponent } from './components/landing/landing.component';
import { LoginComponent } from './components/login/login.component';
import { LoaderComponent } from './components/loader/loader.component';
import { PlatsCarouselComponent } from './components/landing/plats-carousel/plats-carousel.component';

export const routes: Routes = [
  {
    path: '',
    component: LandingComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'loader',
    component: LoaderComponent,
  },
  {
    path: 'carousel',
    component: PlatsCarouselComponent,
  },
];
