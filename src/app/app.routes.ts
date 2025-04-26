import { Routes } from '@angular/router';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { PublicComponent } from './layouts/public-layout/public.component';
import { LandingComponent } from './pages/landing-page/landing/landing.component';

export const routes: Routes = [
  {
    title: 'HealthConnect',
    path: '',
    component: PublicComponent,
    children: [
      { path: '', component: LandingComponent }
    ],
  },
  {
    title: 'HealthConnect',
    path: 'login',
    component: LoginPageComponent,
  },
  {
    path: 'admin',
    loadChildren: () =>
      import('./pages/admin-page/admin-page.module').then(
        (m) => m.AdminPageModule
      ),
  },
  {
    path: 'patient',
    loadChildren: () =>
      import('./pages/patient-page/patient.module').then(
        (m) => m.PatientModule
      ),
  },
  {
    path: 'doctor',
    loadChildren: () =>
      import('./pages/doctor-page/doctor.module').then((m) => m.DoctorModule),
  },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];
