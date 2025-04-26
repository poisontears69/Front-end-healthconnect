import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';
import { MatIcon } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';


interface SidebarItem {
  label: string;
  icon: string;
  route: string;
}

@Component({
  selector: 'app-admin-sidebar',
  standalone: true,
  imports: [
    MatIcon,
    RouterModule,
    CommonModule
  ],
  templateUrl: './admin-sidebar.component.html',
  styleUrl: './admin-sidebar.component.less',
})
export class AdminSidebarComponent {
  isCollapsed = false;

  @Output() toggleCollapse = new EventEmitter<boolean>();

  menuItems: SidebarItem[] = [
    { label: 'Dashboard', icon: 'dashboard', route: '/admin/dashboard' },
    { label: 'Verify Doctors', icon: 'verified', route: '/admin/verify-doctor' },
    { label: 'Manage Users', icon: 'group', route: '/admin/manage-user' }
  ];
  

  toggleSidebar() {
    this.isCollapsed = !this.isCollapsed;
    this.toggleCollapse.emit(this.isCollapsed);
  }
}
