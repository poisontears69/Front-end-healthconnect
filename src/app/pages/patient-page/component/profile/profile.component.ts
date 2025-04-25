import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  standalone: false,
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.less'
})
export class ProfileComponent {
  editMode = false;
  formData = {
    firstName: 'John',
    middleName: 'M.',
    lastName: 'Doe',
    birthdate: '',
    mobile: '',
    email: ''
  };

  originalData = { ...this.formData };

  toggleEdit(): void {
    this.editMode = true;
  }

  cancelEdit(): void {
    this.formData = { ...this.originalData };
    this.editMode = false;
  }

  saveChanges(): void {
    this.originalData = { ...this.formData };
    this.editMode = false;
    console.log('Saved:', this.formData);
  }

  logout(): void {
    console.log('Logging out...');
  }

  goBack(): void {
    window.history.back();
  }
}
