import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-clinic',
  standalone: false,
  templateUrl: './clinic.component.html',
  styleUrl: './clinic.component.less'
})
export class ClinicComponent {
  clinics = [
    {
      photoUrl: 'https://via.placeholder.com/100',
      name: 'Greenfield Medical Center',
      address: '123 Main St, Cityville',
      landmark: 'Near City Mall',
      email: 'contact@greenfield.com',
      landline: '555-1234',
      mobile: '0917-123-4567',
      contactPerson: 'Jane Doe',
      schedule: [
        { day: 'Monday', time: '9:00 AM - 5:00 PM', type: 'Appointment' },
        { day: 'Wednesday', time: '10:00 AM - 4:00 PM', type: 'Walk-in' },
      ],
      showMenu: false
    },
    {
      photoUrl: 'https://via.placeholder.com/100',
      name: 'Sunrise Health Clinic',
      address: '456 Side St, Townsville',
      landmark: 'Opposite Town Park',
      email: 'info@sunrisehealth.com',
      landline: '555-5678',
      mobile: '0918-654-3210',
      contactPerson: 'Dr. Smith',
      schedule: [
        { day: 'Tuesday', time: '8:00 AM - 3:00 PM', type: 'Appointment' },
      ],
      showMenu: false
    }
  ];

  constructor(private router: Router) {}

  toggleMenu(clinic: any) {
    this.clinics.forEach(c => {
      if (c !== clinic) c.showMenu = false;
    });
    clinic.showMenu = !clinic.showMenu;
  }

  editClinic(clinic: any) {
    // Navigate to edit form
    this.router.navigate(['/doctor/clinic/edit', clinic.name]);
  }

  deleteClinic(clinic: any) {
    this.clinics = this.clinics.filter(c => c !== clinic);
  }
}
