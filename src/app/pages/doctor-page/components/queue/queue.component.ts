import { Component, OnInit } from '@angular/core';

interface Clinic {
  id: number;
  name: string;
  address: string;
}

interface Patient {
  id: number;
  name: string;
  status: string;
}


@Component({
  selector: 'app-queue',
  standalone: false,
  templateUrl: './queue.component.html',
  styleUrl: './queue.component.less'
})
export class QueueComponent implements OnInit {
  clinics: Clinic[] = [
    { id: 1, name: 'Downtown Clinic', address: '123 Main Street' },
    { id: 2, name: 'Uptown Clinic', address: '456 High Avenue' }
  ];

  dates: string[] = [];

  selectedClinic: Clinic | null = null;
  selectedDate: string = '';
  today: string = '';

  queuedPatients: Patient[] = [];

  ngOnInit(): void {
    this.today = this.getTodayDate();
    this.dates = this.generateDateOptions();
    this.selectedDate = this.today;
    this.selectedClinic = this.clinics[0];

    this.loadQueue(); // mock initial queue
  }

  getTodayDate(): string {
    const today = new Date();
    return today.toISOString().split('T')[0];
  }

  generateDateOptions(): string[] {
    const dates: string[] = [];
    const today = new Date();

    for (let i = -2; i <= 2; i++) {
      const date = new Date(today);
      date.setDate(today.getDate() + i);
      dates.push(date.toISOString().split('T')[0]);
    }

    return dates;
  }

  loadQueue(): void {
    // Mock patient data
    this.queuedPatients = [
      { id: 1, name: 'Alber Tan', status: 'Waiting' },
      { id: 2, name: 'Chris Lee', status: 'In Consultation' },
      { id: 3, name: 'Jane Doe', status: 'Waiting' },
      { id: 4, name: 'Mark Smith', status: 'Completed' },
      { id: 5, name: 'Anna Ray', status: 'Waiting' }
    ];
  }
}
