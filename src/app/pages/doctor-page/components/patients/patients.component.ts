import { Component } from '@angular/core';

@Component({
  selector: 'app-patients',
  standalone: false,
  templateUrl: './patients.component.html',
  styleUrl: './patients.component.less'
})
export class PatientsComponent {
  searchQuery: string = '';
  patients = [
    { name: 'Alber' },
    { name: 'Chris' },
    { name: 'Brian' },
    { name: 'Alex' },
    { name: 'David' }
  ];
  sortedPatients: any[] = [];

  ngOnInit() {
    this.groupPatients();
  }

  groupPatients() {
    const grouped = this.patients
      .filter(p => p.name.toLowerCase().includes(this.searchQuery.toLowerCase()))
      .sort((a, b) => a.name.localeCompare(b.name))
      .reduce((acc, patient) => {
        const letter = patient.name[0].toUpperCase();
        if (!acc[letter]) acc[letter] = [];
        acc[letter].push(patient);
        return acc;
      }, {} as Record<string, any[]>);

    this.sortedPatients = Object.keys(grouped)
      .sort()
      .map(letter => ({
        letter,
        patients: grouped[letter]
      }));
  }

  filterPatients() {
    this.groupPatients();
  }

  addPatient() {
    // Add logic to open modal/form here
  }
}
