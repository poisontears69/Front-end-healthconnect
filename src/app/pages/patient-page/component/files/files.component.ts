import { Component } from '@angular/core';

@Component({
  selector: 'app-files',
  standalone: false,
  templateUrl: './files.component.html',
  styleUrl: './files.component.less'
})
export class FilesComponent {
  activeTab = 'all';
  files = [
    { title: 'Prescription 1', description: 'Ibuprofen 200mg', date: '2025-04-01', type: 'prescriptions' },
    { title: 'Lab Test - Blood', description: 'Routine check', date: '2025-03-21', type: 'lab-tests' },
    { title: 'Note - Diet', description: 'Follow-up recommendation', date: '2025-03-15', type: 'notes' }
  ];
  filteredFiles = this.files;

  setTab(tab: string) {
    this.activeTab = tab;
    this.filterFiles();
  }

  onSearch(query: string) {
    this.filteredFiles = this.files.filter(file =>
      file.title.toLowerCase().includes(query.toLowerCase()) ||
      file.description.toLowerCase().includes(query.toLowerCase())
    );
  }

  filterFiles() {
    if (this.activeTab === 'all') {
      this.filteredFiles = this.files;
    } else {
      this.filteredFiles = this.files.filter(f => f.type === this.activeTab);
    }
  }
}
