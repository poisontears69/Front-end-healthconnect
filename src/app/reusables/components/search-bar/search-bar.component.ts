import { Component } from '@angular/core';

@Component({
  selector: 'app-search-bar',
  standalone: false,
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.less'
})
export class SearchBarComponent {
  query: string = '';

  onSearch(): void {
    console.log('Search query:', this.query);
    // You can emit this to parent or filter results here
  }
}
