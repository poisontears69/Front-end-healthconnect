import { Routes } from '@angular/router';
import { DashboardComponent } from '../../layouts/patient-layout/dashboard.component';
import { DoctorsComponent } from './component/doctors/doctors.component';
import { FilesComponent } from './component/files/files.component';
import { HomeComponent } from './component/home/home.component';
import { MessagesComponent } from './component/messages/messages.component';
import { ProfileDetailsComponent } from './component/profile/profile-details/profile-details.component';
import { ProfileComponent } from './component/profile/profile.component';
import { SearchDoctorComponent } from './component/search-doctor/search-doctor.component';

export const routes: Routes = [
  {
    path: '',
    component: DashboardComponent,
    children: [
      { path: 'home', component: HomeComponent },
      { path: 'profile', component: ProfileComponent },
      { path: 'profile/details', component: ProfileDetailsComponent },
      { path: 'files', component: FilesComponent },
      { path: 'doctors', component: DoctorsComponent },
      { path: 'messages', component: MessagesComponent },
      { path: 'search-doctor', component: SearchDoctorComponent },
      // add more sidebar-based routes here
    ],
  },
];
