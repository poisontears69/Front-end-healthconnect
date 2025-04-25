import { Component } from '@angular/core';

@Component({
  selector: 'app-doctor-sidebar',
  standalone: false,
  templateUrl: './doctor-sidebar.component.html',
  styleUrl: './doctor-sidebar.component.less'
})
export class DoctorSidebarComponent {
  isSidebarOpen = false;

  toggleSidebar(): void {
    this.isSidebarOpen = !this.isSidebarOpen;
  }

  logout(): void {
    // TODO: Implement logout logic
    console.log('Logging out...');
  }
}
