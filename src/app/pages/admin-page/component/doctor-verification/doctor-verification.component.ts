import { Component, OnInit } from '@angular/core';
import { DoctorDataPayload } from './interfaces/doctor-data-payload'; // Adjust path if needed
import { Status } from './enum/doctor-verification-enum';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-verification',
  standalone : true,
  imports: [
    CommonModule
  ],
  templateUrl: './doctor-verification.component.html',
  styleUrls: ['./doctor-verification.component.less'],
})
export class DoctorVerificationComponent implements OnInit {
  doctors: DoctorDataPayload[] = []; // Full list of doctors
  pendingDoctors: DoctorDataPayload[] = [];
  verifiedDoctors: DoctorDataPayload[] = [];
  blacklistedDoctors: DoctorDataPayload[] = [];

  selectedDoctor?: DoctorDataPayload;

  constructor() {}

  ngOnInit(): void {
    // TODO: Replace with backend fetch
    this.doctors = [
      {
        id: 1,
        name: 'Dr. Alice Reyes',
        email: 'alice@example.com',
        submittedDate: '2025-04-20',
        status: Status.PENDING,
      },
      {
        id: 2,
        name: 'Dr. Bob Santos',
        email: 'bob@example.com',
        submittedDate: '2025-03-15',
        status: Status.VERIFIED,
      },
      {
        id: 3,
        name: 'Dr. Carol Dela Cruz',
        email: 'carol@example.com',
        submittedDate: '2025-04-10',
        status: Status.BLACKLISTED,
      },
    ];

    this.splitDoctorsByStatus();
  }

  splitDoctorsByStatus(): void {
    this.pendingDoctors = this.doctors.filter(
      (doc) => doc.status === Status.PENDING
    );
    this.verifiedDoctors = this.doctors.filter(
      (doc) => doc.status === Status.VERIFIED
    );
    this.blacklistedDoctors = this.doctors.filter(
      (doc) => doc.status === Status.BLACKLISTED
    );
  }

  openReviewModal(doctor: DoctorDataPayload): void {
    this.selectedDoctor = doctor;
  }

  closeModal(): void {
    this.selectedDoctor = undefined;
  }

  verifyDoctor(doctor: DoctorDataPayload): void {
    // TODO: Connect to backend
    doctor.status = Status.VERIFIED;
    this.splitDoctorsByStatus();
    this.closeModal();
  }

  blacklistDoctor(doctor: DoctorDataPayload): void {
    // TODO: Connect to backend
    doctor.status = Status.BLACKLISTED;
    this.splitDoctorsByStatus();
    this.closeModal();
  }

  reinstateDoctor(doctor: DoctorDataPayload) {
    // Update the doctor's status to VERIFIED
    doctor.status = Status.VERIFIED;
  
    // Move the doctor from blacklistedDoctors to verifiedDoctors
    this.blacklistedDoctors = this.blacklistedDoctors.filter(d => d.id !== doctor.id);
    this.verifiedDoctors.push(doctor);
  
    // In the future, you'd also want to call the backend here:
    // this.doctorService.updateDoctorStatus(doctor.id, Status.VERIFIED).subscribe(...)
  }
}
