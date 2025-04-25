import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-home',
  standalone: false,
  templateUrl: './doctor-home.component.html',
  styleUrl: './doctor-home.component.less'
})
export class DoctorHomeComponent {
  clinics = [
    { name: 'Health First Clinic', address: '123 Main St, Cityville', patients: 12 },
    { name: 'Downtown Wellness', address: '456 Elm St, Townsburg', patients: 8 },
    { name: 'Uptown Medical', address: '789 Oak Ave, Metropolis', patients: 20 }
  ];
  
}
