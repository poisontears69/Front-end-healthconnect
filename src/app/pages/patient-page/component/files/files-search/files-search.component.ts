import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-files-search',
  standalone: false,
  templateUrl: './files-search.component.html',
  styleUrl: './files-search.component.less'
})
export class FilesSearchComponent {
  @Output() search = new EventEmitter<string>();

  onSearchChange(event: Event): void {
    const input = event.target as HTMLInputElement;
    this.search.emit(input.value);
  }
}
