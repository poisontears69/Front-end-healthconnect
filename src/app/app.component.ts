import { Component, HostListener, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { animations } from './reusables/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.less',
    animations: [animations]
})
export class AppComponent {
  protected isNavbarScrolled: boolean = false;

  constructor(private routerService: Router) {}

  /**
   * Handles the window scroll event to update the `isNavbarScrolled` property.
   * Sets `isNavbarScrolled` to `true` if the window has been scrolled down, otherwise sets it to `false`.
   */
  @HostListener('window:scroll', ['$event'])
  protected onWindowScroll() {
    this.isNavbarScrolled = window.scrollY > 0;
  }

  /**
   * Gets the current route URL from the router service.
   *
   * @protected
   * @returns {string} The current route URL.
   */
  protected get currentRoute(): string {
    return this.routerService.url;
  }
}
