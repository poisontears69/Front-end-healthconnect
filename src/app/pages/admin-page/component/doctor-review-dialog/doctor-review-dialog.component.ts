import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-doctor-review-dialog',
  standalone: true, // if you are using standalone component (most likely yes)
  imports: [
    CommonModule,
  ],
  templateUrl: './doctor-review-dialog.component.html',
  styleUrls: ['./doctor-review-dialog.component.less']
})
export class DoctorReviewDialogComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public doctor: any,
    private dialogRef: MatDialogRef<DoctorReviewDialogComponent>
  ) {}

  verifyDoctor() {
    // Your verify logic here
    console.log('Verified doctor:', this.doctor);
    this.dialogRef.close('verified');
  }

  rejectDoctor() {
    // Your reject logic here
    console.log('Rejected doctor:', this.doctor);
    this.dialogRef.close('rejected');
  }

  close() {
    this.dialogRef.close();
  }
}
