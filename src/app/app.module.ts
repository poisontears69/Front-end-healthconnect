import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { routes } from './app.routes';
import { SharedModule } from './reusables/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { LandingComponent } from './pages/landing-page/landing/landing.component';
import { AdminDashboardComponent } from './layouts/admin-layout/admin-dashboard.component';
import { DoctorDashboardComponent } from './layouts/doctor-layout/doctor-dashboard.component';
import { DashboardComponent } from './layouts/patient-layout/dashboard.component';
import { PublicComponent } from './layouts/public-layout/public.component';
import { CalendarComponent } from './pages/doctor-page/components/calendar/calendar.component';
import { ClinicComponent } from './pages/doctor-page/components/clinic/clinic.component';
import { DoctorHomeComponent } from './pages/doctor-page/components/doctor-home/doctor-home.component';
import { DoctorProfileComponent } from './pages/doctor-page/components/doctor-profile/doctor-profile.component';
import { DoctorSettingsComponent } from './pages/doctor-page/components/doctor-settings/doctor-settings.component';
import { MessagesComponentDoctor } from './pages/doctor-page/components/messages/messages.component';
import { PatientRecordComponent } from './pages/doctor-page/components/patients/patient-record/patient-record.component';
import { PatientsComponent } from './pages/doctor-page/components/patients/patients.component';
import { QueueComponent } from './pages/doctor-page/components/queue/queue.component';
import { CtaComponent } from './pages/landing-page/cta/cta.component';
import { FeaturesComponent } from './pages/landing-page/features/features.component';
import { HeroComponent } from './pages/landing-page/hero/hero.component';
import { NavbarComponent } from './pages/landing-page/navbar/navbar.component';
import { DoctorsComponent } from './pages/patient-page/component/doctors/doctors.component';
import { FilesSearchComponent } from './pages/patient-page/component/files/files-search/files-search.component';
import { FilesComponent } from './pages/patient-page/component/files/files.component';
import { HomeComponent } from './pages/patient-page/component/home/home.component';
import { MessagesComponent } from './pages/patient-page/component/messages/messages.component';
import { ProfileDetailsComponent } from './pages/patient-page/component/profile/profile-details/profile-details.component';
import { ProfileComponent } from './pages/patient-page/component/profile/profile.component';
import { SearchDoctorComponent } from './pages/patient-page/component/search-doctor/search-doctor.component';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

@NgModule({
  declarations: [
    AppComponent,
    LandingComponent,
    LoginPageComponent,
    AppComponent,
    NavbarComponent,
    LandingComponent,
    MessagesComponentDoctor,
    HeroComponent,
    FeaturesComponent,
    CtaComponent,
    HomeComponent,
    DashboardComponent,
    PublicComponent,
    DoctorDashboardComponent,
    AdminDashboardComponent,
    FilesComponent,
    FilesSearchComponent,
    DoctorsComponent,
    MessagesComponent,
    SearchDoctorComponent,
    ProfileComponent,
    ProfileDetailsComponent,
    CalendarComponent,
    QueueComponent,
    PatientsComponent,
    DoctorProfileComponent,
    ClinicComponent,
    DoctorSettingsComponent,
    DoctorHomeComponent,
    PatientRecordComponent,
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    SharedModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule,
    CalendarModule,
    ScheduleModule,
  ],
  providers: [CookieService],
  bootstrap: [AppComponent],
})
export class AppModule {}
