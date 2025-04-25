import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class CalendarService {
  getMonthView(date: Date): any[] {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const days = [];
    for (let day = 1; day <= daysInMonth; day++) {
      const dateObj = new Date(year, month, day);
      days.push({
        date: dateObj,
        events: this.getEventsForDate(dateObj)
      });
    }

    return days;
  }

  getEventsForDate(date: Date): any[] {
    // Placeholder events; replace with API call
    if (date.getDate() === 10) {
      return [{ title: 'Consultation @ 9AM' }, { title: 'Follow-up @ 2PM' }];
    }
    return [];
  }
}
 