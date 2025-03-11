import { Component } from '@angular/core';
import { animations } from '../../../assets/animations';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.less',
  animations: [animations],
})
export class LoginPageComponent {
  protected buttonState: string[] = new Array(2).fill('normal');
  protected errorState: string[] = new Array(2).fill('');
  protected isCreateAccount: boolean = false;
  protected isForgotPassword: boolean = false;

  /**
   * Handles the hover event for a button.
   *
   * @param index - The index of the button being hovered.
   */
  protected onButtonHover(index: number) {
    this.buttonState[index] = 'hovered';
  }

  /**
   * Handles the event when a button is no longer being hovered over.
   *
   * @param index - The index of the button in the buttonState array.
   */
  protected onButtonLeave(index: number) {
    this.buttonState[index] = 'normal';
  }

  /**
   * Displays an error state for a specified index and then clears it after a delay.
   *
   * @param {number} index - The index of the error state to display.
   */
  protected showError(index: number) {
    this.errorState[index] = 'error';
    setTimeout(() => (this.errorState[index] = ''), 1000);
  }

  protected onClickGoToCreateOrLogin() {
    if (this.isCreateAccount) {
      this.buttonState = new Array(2).fill('normal');
      this.errorState = new Array(4).fill('');
    } else {
      this.buttonState = new Array(2).fill('normal');
      this.errorState = new Array(2).fill('');
    }

    this.isCreateAccount = !this.isCreateAccount;
  }

  protected onClickGoToForgetPasswordOrLogin() {
    this.isForgotPassword = !this.isForgotPassword;
  }
}
