import { Component } from '@angular/core';

@Component({
  selector: 'app-calendar',
  standalone: false,
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.less'
})
export class CalendarComponent {
  public selectedDate: Date = new Date();
  public eventSettings: Record<string, any> = {
    dataSource: [
      {
        Id: 1,
        Subject: 'Consultation - John Doe',
        StartTime: new Date(2025, 3, 25, 10, 0),
        EndTime: new Date(2025, 3, 25, 11, 0),
        IsAllDay: false
      },
      {
        Id: 2,
        Subject: 'Follow-up - Jane Smith',
        StartTime: new Date(2025, 3, 26, 12, 0),
        EndTime: new Date(2025, 3, 26, 13, 0),
        IsAllDay: false
      }
    ]
  };
}
