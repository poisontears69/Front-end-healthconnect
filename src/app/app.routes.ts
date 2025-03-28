import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { MainPageComponent } from './pages/main-page/main-page.component';
import { ClinicPageComponent } from './pages/clinic-page/clinic-page.component';
import { sessionGuard } from './guards/session.guard';

export const routes: Routes = [
  { title: 'HealthConnect', path: '', component: LoginPageComponent },
  {
    title: 'HealthConnect',
    path: 'home',
    component: MainPageComponent,
    canActivate: [sessionGuard],
  },
  { title: 'HealthConnect', path: 'clinic', component: ClinicPageComponent },
  { path: '**', redirectTo: '/login', pathMatch: 'full' },
];
