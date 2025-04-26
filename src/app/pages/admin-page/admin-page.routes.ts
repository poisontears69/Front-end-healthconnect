import { Routes } from '@angular/router';
import { AdminDashboardComponent } from '../../layouts/admin-layout/admin-dashboard.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { DoctorVerificationComponent } from './component/doctor-verification/doctor-verification.component';
import { UserManagementComponent } from './component/user-management/user-management.component';

export const routes: Routes = [
  {
    path: '',
    component: AdminDashboardComponent,
    children: [
      { path: 'dashboard', component: DashboardComponent },
      { path: 'verify-doctor', component: DoctorVerificationComponent },
      { path: 'manage-user', component: UserManagementComponent },
    ],
  },
];