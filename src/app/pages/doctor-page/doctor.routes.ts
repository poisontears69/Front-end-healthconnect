import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ClinicComponent } from './components/clinic/clinic.component';
import { DoctorHomeComponent } from './components/doctor-home/doctor-home.component';
import { DoctorProfileComponent } from './components/doctor-profile/doctor-profile.component';
import { PatientsComponent } from './components/patients/patients.component';
import { QueueComponent } from './components/queue/queue.component';
import { DoctorSettingsComponent } from './components/doctor-settings/doctor-settings.component';
import { MessagesComponentDoctor } from './components/messages/messages.component';
import { PatientRecordComponent } from './components/patients/patient-record/patient-record.component';
import { DoctorDashboardComponent } from '../../layouts/doctor-layout/doctor-dashboard.component';

export const routes: Routes = [
  {
    path: '',
    component: DoctorDashboardComponent,
    children: [
      { path: 'dashboard', component: DoctorHomeComponent },
      { path: 'calendar', component: CalendarComponent },
      { path: 'queue', component: QueueComponent },
      { path: 'patients', component: PatientsComponent },
      { path: 'profile', component: DoctorProfileComponent },
      { path: 'clinic', component: ClinicComponent },
      { path: 'settings', component: DoctorSettingsComponent },
      { path: 'messages', component: MessagesComponentDoctor },
      { path: 'patient-record/:id', component: PatientRecordComponent },
    ],
  },
];
