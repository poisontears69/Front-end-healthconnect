import { Component } from '@angular/core';
import { CalendarOptions } from '@fullcalendar/core';
import dayGridPlugin from '@fullcalendar/daygrid';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrl: './calendar.component.less',
})
export class CalendarComponent {
  calendarOptions: CalendarOptions = {
    plugins: [dayGridPlugin],
    initialView: 'dayGridMonth',
    weekends: true,
    events: [{ title: 'Meeting', start: new Date() }],
  };
  public selectedDate: Date = new Date();
  public eventSettings: Record<string, any> = {
    dataSource: [
      {
        Id: 1,
        Subject: 'Consultation - John Doe',
        StartTime: new Date(2025, 3, 25, 10, 0),
        EndTime: new Date(2025, 3, 25, 11, 0),
        IsAllDay: false,
      },
      {
        Id: 2,
        Subject: 'Follow-up - Jane Smith',
        StartTime: new Date(2025, 3, 26, 12, 0),
        EndTime: new Date(2025, 3, 26, 13, 0),
        IsAllDay: false,
      },
    ],
  };
}
