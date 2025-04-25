import { Component } from '@angular/core';

@Component({
  selector: 'app-messages',
  standalone: false,
  templateUrl: './messages.component.html',
  styleUrl: './messages.component.less'
})
export class MessagesComponent {
  activeTab: string = 'all-messages';

  setTab(tab: string) {
    this.activeTab = tab;
  }
}
