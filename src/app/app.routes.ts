import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { LandingPageComponent } from './pages/landing-page/landing-page.component';

export const routes: Routes = [
  { title: 'HealthConnect', path: '', component: LandingPageComponent },
  { title: 'HealthConnect', path: 'login', component: LoginPageComponent },
  { title: 'HealthConnect', path: 'home', component: MainPageComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
