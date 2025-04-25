import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-settings',
  standalone: false,
  templateUrl: './doctor-settings.component.html',
  styleUrl: './doctor-settings.component.less'
})
export class DoctorSettingsComponent {
  email: string = 'doctor@example.com';
  password: string = '';
  
  editEmailMode: boolean = false;
  editPasswordMode: boolean = false;

  saveEmail() {
    console.log('Email saved:', this.email);
    this.editEmailMode = false;
  }

  cancelEmailEdit() {
    this.editEmailMode = false;
    // Optional: Reset email if needed
  }

  savePassword() {
    console.log('Password saved');
    this.editPasswordMode = false;
  }

  cancelPasswordEdit() {
    this.editPasswordMode = false;
    // Optional: Reset password if needed
  }

  logout() {
    console.log('Logging out...');
    // Handle logout
  }
}
