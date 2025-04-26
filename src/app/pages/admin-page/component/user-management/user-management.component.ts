import { Component } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatOptionModule } from '@angular/material/core';
import { MatTableModule } from '@angular/material/table';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-user-management',
  standalone: true,
  imports: [
    MatButtonModule,
    MatTableModule,
    MatOptionModule,
    MatSelectModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule
  ],
  templateUrl: './user-management.component.html',
  styleUrl: './user-management.component.less',
})
export class UserManagementComponent {
  users = [
    {
      name: 'John Doe',
      role: 'doctor',
      email: 'john@example.com',
      status: 'Active',
    },
    {
      name: 'Jane Smith',
      role: 'patient',
      email: 'jane@example.com',
      status: 'Suspended',
    },
    {
      name: 'Admin User',
      role: 'admin',
      email: 'admin@example.com',
      status: 'Active',
    },
  ];

  filteredUsers = [...this.users];

  searchQuery = '';
  selectedRole = '';

  displayedColumns: string[] = ['name', 'role', 'email', 'status', 'actions'];

  applySearch() {
    this.filteredUsers = this.users.filter(
      (user) =>
        (user.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
          user.email.toLowerCase().includes(this.searchQuery.toLowerCase())) &&
        (this.selectedRole ? user.role === this.selectedRole : true)
    );
  }

  applyFilter() {
    this.applySearch();
  }

  viewUser(user: any) {
    console.log('Viewing user:', user);
    // Future: Open user detail modal
  }

  suspendUser(user: any) {
    console.log('Suspending user:', user);
    // Future: API call to suspend
  }

  deleteUser(user: any) {
    console.log('Deleting user:', user);
    // Future: Confirm and delete user
  }
}
