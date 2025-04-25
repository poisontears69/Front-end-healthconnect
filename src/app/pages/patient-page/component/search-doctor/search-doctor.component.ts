import { Component, ViewChild, TemplateRef } from '@angular/core';

@Component({
  selector: 'app-search-doctor',
  standalone: false,
  templateUrl: './search-doctor.component.html',
  styleUrl: './search-doctor.component.less'
})
export class SearchDoctorComponent {
  searchQuery = '';
  selectedLocation = '';
  selectedFilters: string[] = [];

  showFilterModal = false;

  openFilterModal() {
    this.showFilterModal = true;
  }

  closeFilterModal() {
    this.showFilterModal = false;
  }

  // Optional: you can add a method to apply filters later
  applyFilters(newFilters: string[]) {
    this.selectedFilters = newFilters;
    this.closeFilterModal();
  }

  filterValues = {
    specialty: '',
    availability: '',
    timePreference: '',
    consultation: {
      online: false,
      physical: false,
    },
    location: ''
  };
  
  applyFilterValues() {
    this.selectedFilters = [];
  
    if (this.filterValues.specialty) {
      this.selectedFilters.push(`Specialty: ${this.filterValues.specialty}`);
    }
    if (this.filterValues.availability) {
      this.selectedFilters.push(`Available on: ${this.filterValues.availability}`);
    }
    if (this.filterValues.timePreference) {
      this.selectedFilters.push(`Time: ${this.filterValues.timePreference}`);
    }
    if (this.filterValues.consultation.online) {
      this.selectedFilters.push('Online Consultation');
    }
    if (this.filterValues.consultation.physical) {
      this.selectedFilters.push('Physical Consultation');
    }
    if (this.filterValues.location) {
      this.selectedFilters.push(`Location: ${this.filterValues.location}`);
    }
  
    this.closeFilterModal();
  }
}
