import { Component, OnInit } from '@angular/core';
import { animations } from '../../reusables/animations';
import { Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { LoginFormGroupInterface } from './interfaces/login-page.interface';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.less',
  animations: [animations],
})
export class LoginPageComponent implements OnInit {
  protected loginForm!: FormGroup<LoginFormGroupInterface>;
  protected signupForm!: FormGroup;
  protected forgotPasswordForm!: FormGroup;
  protected buttonState: string[] = new Array(2).fill('normal');
  protected errorState: string[] = new Array(2).fill('');
  protected isCreateAccount: boolean = false;
  protected isForgotPassword: boolean = false;
  protected isLoading: boolean = false;
  protected isPlayingIntro: boolean = true;

  constructor(private readonly routerService: Router) {}

  /**
   * Lifecycle hook that is called after data-bound properties of a directive are initialized.
   * This method is used to perform any necessary setup or initialization for the component.
   *
   * In this implementation, it calls two methods:
   * 1. `playIntro()`: Plays the introductory animation or sequence.
   * 2. `initializeForm()`: Sets up the form controls and validation.
   */
  public ngOnInit(): void {
    this.playIntro();
    this.initializeForm();
  }

  /**
   * Initializes the forms used in the login page component.
   *
   * - `loginForm`: Form group for user login containing:
   *   - `email`: A required email field.
   *   - `password`: A required password field.
   *
   * - `signupForm`: Form group for user signup containing:
   *   - `username`: A required username field.
   *   - `email`: A required email field.
   *   - `password`: A required password field.
   *   - `confirmPassword`: A required confirm password field.
   *
   * - `forgotPasswordForm`: Form group for password recovery containing:
   *   - `email`: A required email field.
   */
  private initializeForm(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
    });

    this.signupForm = new FormGroup({
      username: new FormControl('', Validators.required),
      email: new FormControl('', [Validators.required, Validators.email]),
      password: new FormControl('', Validators.required),
      confirmPassword: new FormControl('', Validators.required),
    });

    this.forgotPasswordForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
    });
  }

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
    if (this.loginForm.valid) {
      console.log('Form Value:', this.loginForm.value);
      this.toggleSpinner();
      // Perform your login logic here, e.g., call an authentication service.
    } else {
      console.log('Form is invalid.' + this.loginForm.get('email')?.value + this.loginForm.get('password')?.value);
      // Optionally, mark all fields as touched to trigger validation messages
      this.loginForm.markAllAsTouched();
    }
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

  /**
   * Plays the introductory animation or sequence.
   *
   * This method sets the `isPlayingIntro` and `isLoading` flags to `true`,
   * then waits for 2 seconds before setting them back to `false`.
   *
   * @protected
   */
  protected playIntro() {
    this.isPlayingIntro = true;
    this.isLoading = true;
    setTimeout(() => {
      this.isPlayingIntro = false;
      this.isLoading = false;
    }, 2000);
  }
}
