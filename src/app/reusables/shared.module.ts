import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { SpinnerComponent } from './components/spinner/spinner.component';
import { DoctorSidebarComponent } from './components/doctor-sidebar/doctor-sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { NavbarLoggedComponent } from './components/navbar-logged/navbar-logged.component';
import { SearchBarComponent } from './components/search-bar/search-bar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { RouterModule } from '@angular/router';
import { FullCalendarModule } from '@fullcalendar/angular';

@NgModule({
  declarations: [
    SpinnerComponent,
    DoctorSidebarComponent,
    FooterComponent,
    NavbarLoggedComponent,
    SearchBarComponent,
    SidebarComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    RouterModule,
    FullCalendarModule
  ],
  exports: [
    CommonModule,
    SpinnerComponent,
    DoctorSidebarComponent,
    FooterComponent,
    NavbarLoggedComponent,
    SearchBarComponent,
    SidebarComponent,
    FullCalendarModule
  ],
})
export class SharedModule {}
