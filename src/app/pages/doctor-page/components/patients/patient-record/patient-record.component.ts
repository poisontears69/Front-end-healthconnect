import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-patient-record',
  standalone: false,
  templateUrl: './patient-record.component.html',
  styleUrl: './patient-record.component.less'
})
export class PatientRecordComponent {

  patient = {
    name: 'Jane Doe',
    birthdate: '1990-05-15',
    age: 33,
    gender: 'Female',
    photo: 'https://via.placeholder.com/48'
  };

  tabs = [
    'Patient Profile',
    'Vitals',
    "Doctor's Notes",
    'Health Records',
    'Queue Options'
  ];

  selectedType: string = '';
  selectedDate: string = '';

healthRecords = [
  {
    type: 'Lab Result',
    lab: 'HealthLab Diagnostics',
    date: '2025-04-01',
    remarks: 'Blood test shows elevated cholesterol.',
    file: 'labresult1.pdf'
  },
  {
    type: 'X-Ray',
    lab: 'Radiology Clinic',
    date: '2025-03-15',
    remarks: 'No fractures detected.',
    file: 'xray1.jpg'
  }
];

  dummyNotes = [
    {
      date: 'April 18, 2025',
      time: '10:15 AM',
      content: 'Patient reported mild headache and fatigue. Advised rest and hydration. No medication prescribed at this time.'
    },
    {
      date: 'April 12, 2025',
      time: '3:00 PM',
      content: 'Follow-up visit. Patient responding well to treatment. Continue with current medication and return in 1 week.'
    }
  ];

  activeTab = 'Patient Profile';

  patientProfileForm!: FormGroup;

  constructor(private fb: FormBuilder, private route: ActivatedRoute) {}

  ngOnInit() {
    const patientId = this.route.snapshot.paramMap.get('id');
  // Use patientId to fetch patient details from backend or state
    this.patientProfileForm = this.fb.group({
      firstName: ['Jane', Validators.required],
      lastName: ['Doe', Validators.required],
      birthdate: ['1990-05-15', Validators.required],
      gender: ['Female', Validators.required],
      contact: ['09123456789', Validators.required],
      email: ['janedoe@example.com', [Validators.required, Validators.email]],
    });
  }

  selectTab(tab: string) {
    this.activeTab = tab;
  }

  savePatientProfile() {
    if (this.patientProfileForm.valid) {
      const updatedPatient = this.patientProfileForm.value;
      console.log('Saved Patient Profile:', updatedPatient);
      // You can now send this data to your backend
    }
  }

  printRecord() {
    window.print();
  }

  closeRecord() {
    // Example: navigate back or close modal
    console.log('Record closed');
  }

  vitalsView = 'table';
selectedRange = 'week';

vitalTypes = ['Blood Pressure', 'Heart Rate', 'Respiratory Rate', 'Temperature', 'Oxygen Saturation'];
vitalDates = ['Apr 15', 'Apr 16', 'Apr 17', 'Apr 18', 'Apr 19'];

setVitalsView(view: string) {
  this.vitalsView = view;
}

addVitals() {
  console.log('Add vitals clicked');
  // Open modal or form to input vitals
}

editVitals() {
  console.log('Edit vitals clicked');
  // Toggle editable rows or open edit modal
}

get availableDates() {
  return [...new Set(this.healthRecords.map(r => r.date))];
}

filteredRecords() {
  return this.healthRecords.filter(record =>
    (!this.selectedType || record.type === this.selectedType) &&
    (!this.selectedDate || record.date === this.selectedDate)
  );
}

// Simulate if the patient has an appointment today
hasAppointmentToday: boolean = true;

queueOptionsToday: string[] = [
  'Enter note',
  'Schedule next appointment',
  'Finish checkup',
  'Cancel appointment',
  'Skip this patient',
  'Remove appointment and finish checkup'
];

queueOptionsNoAppointment: string[] = [
  'Enter appointment notes',
  'Schedule next appointment'
];

selectedAction: string = '';

}

