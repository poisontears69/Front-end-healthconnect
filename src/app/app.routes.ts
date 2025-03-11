import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';

export const routes: Routes = [
  { title: 'HealthConnect', path: '', component: LoginPageComponent },
  { path: '**', redirectTo: 'home', pathMatch: 'full' },
];
