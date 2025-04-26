import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less'],
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule,
  ],
})
export class DashboardComponent implements OnInit {
  // Summary metrics
  summaryCards = [
    { title: 'Total Users', value: '2,453', change: 8.2, icon: 'people' },
    { title: 'Revenue', value: '$12,345', change: 12.5, icon: 'attach_money' },
    { title: 'Conversion', value: '3.6%', change: -1.2, icon: 'trending_up' },
    { title: 'Active Now', value: '327', change: 4.3, icon: 'flash_on' },
  ];

  // Recent activity
  recentActivity = [
    {
      user: 'John Doe',
      action: 'placed a new order',
      time: '2 min ago',
      icon: 'shopping_cart',
    },
    {
      user: 'Jane Smith',
      action: 'subscribed to premium',
      time: '10 min ago',
      icon: 'star',
    },
    {
      user: 'Robert Johnson',
      action: 'cancelled subscription',
      time: '25 min ago',
      icon: 'cancel',
    },
    {
      user: 'Emily Davis',
      action: 'submitted a ticket',
      time: '1 hour ago',
      icon: 'support',
    },
  ];

  // Quick actions
  quickActions = [
    { title: 'Add User', icon: 'person_add' },
    { title: 'Create Report', icon: 'assessment' },
    { title: 'Settings', icon: 'settings' },
    { title: 'View Analytics', icon: 'analytics' },
  ];

  ngOnInit(): void {
    // Initialize any data fetching here
  }

  handleAction(action: string): void {
    console.log('Action:', action);
    // Implement action logic here
  }
}
