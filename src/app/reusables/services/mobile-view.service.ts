import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class MobileViewService {
  private _isMobileView: boolean = false;

  get isMobileView(): boolean {
    this.checkScreenWidth();
    return this._isMobileView;
  }

  checkScreenWidth() {
    this._isMobileView = window.innerWidth < 768;
  }
}
