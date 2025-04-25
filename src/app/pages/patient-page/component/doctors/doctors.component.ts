import { Component } from '@angular/core';

@Component({
  selector: 'app-doctors',
  standalone: false,
  templateUrl: './doctors.component.html',
  styleUrl: './doctors.component.less'
})
export class DoctorsComponent {
  activeTab: string = 'consultation';

  dummyDoctors = [
    {
      name: 'Dr. Sarah Reyes',
      specialization: 'Cardiologist',
      consultationType: 'Virtual',
      date: 'April 20, 2025',
      patient: 'John Doe'
    },
    {
      name: 'Dr. Miguel Santos',
      specialization: 'Pediatrician',
      consultationType: 'Walk-in',
      date: 'April 21, 2025',
      patient: 'Jane Smith'
    }
  ];

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
