import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  standalone: false,
  templateUrl: './home.component.html',
  styleUrl: './home.component.less'
})
export class HomeComponent {
  showModal = false;

  openBookingInstructions() {
    this.showModal = true;
  }

  closeModal() {
    this.showModal = false;
  }
}
