import { Component } from '@angular/core';
import { animations } from '../../reusables/animations';
import { Router } from '@angular/router';

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
  protected isLoading: boolean = false;

  constructor(private readonly routerService: Router) {}

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

  /**
   * Navigates to the home page when the login button is clicked.
   * Also toggles the loading spinner for a set duration.
   */
  protected onClickLogin(): void {
    this.routerService.navigate(['/home']);
    this.toggleSpinner();
  }

  /**
   * Handles the sign-up button click event.
   * Currently toggles the loading spinner.
   */
  protected onClickSignup(): void {
    this.toggleSpinner();
  }

  /**
   * Handles the "Send Email" button click event for password reset.
   * Toggles the loading spinner to simulate the email sending process.
   */
  protected onClickSendEmail(): void {
    this.toggleSpinner();
  }

  /**
   * Toggles between the Create Account and Login views.
   * Resets the button and error states based on the active view.
   */
  protected onClickGoToCreateOrLogin(): void {
    if (this.isCreateAccount) {
      this.buttonState = new Array(2).fill('normal');
      this.errorState = new Array(4).fill('');
    } else {
      this.buttonState = new Array(2).fill('normal');
      this.errorState = new Array(2).fill('');
    }

    this.isCreateAccount = !this.isCreateAccount;
  }

  /**
   * Toggles between the Forgot Password and Login views.
   */
  protected onClickGoToForgetPasswordOrLogin(): void {
    this.isForgotPassword = !this.isForgotPassword;
  }

  /**
   * Toggles the visibility of the loading spinner.
   * The spinner is visible for 3 seconds before being hidden.
   */
  protected toggleSpinner(): void {
    this.isLoading = true;
    setTimeout(() => (this.isLoading = false), 3000);
  }
}
