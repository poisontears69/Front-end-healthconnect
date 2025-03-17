import { Component, HostListener, OnInit } from '@angular/core';
import { animations } from '../../reusables/animations';
import { Router } from '@angular/router';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  ValidationErrors,
  ValidatorFn,
  Validators,
} from '@angular/forms';
import {
  ForgotPasswordFormGroupInterface,
  LoginFormGroupInterface,
  SignUpFormGroupInterface,
  SignUpFormPhase2GroupInterface,
} from './interfaces/login-page.interface';
import { MobileViewService } from '../../reusables/services/mobile-view.service';
import { Role } from './enum/login-page.enum';
import { UserService } from '../../reusables/services/user.service';
import {
  LogInPayloadInterface,
  SignUpPayloadInterface,
} from './interfaces/user-data-payload.interface';
import { firstValueFrom } from 'rxjs';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.less',
  animations: [animations],
})
export class LoginPageComponent implements OnInit {
  protected loginForm!: FormGroup<LoginFormGroupInterface>;
  protected signupForm!: FormGroup<SignUpFormGroupInterface>;
  protected signupPhase2Form!: FormGroup<SignUpFormPhase2GroupInterface>;
  protected forgotPasswordForm!: FormGroup<ForgotPasswordFormGroupInterface>;
  protected buttonState: string[] = new Array(2).fill('normal');
  protected errorState: string[] = new Array(2).fill('');
  protected showErrorModal = false;
  protected isCreateAccount: boolean = false;
  protected isForgotPassword: boolean = false;
  protected isLoading: boolean = false;
  protected isPlayingIntro: boolean = true;
  protected isMobileView: boolean = false;
  protected isCreateAccountPhase2: boolean = false;
  protected isSubmitClicked: boolean = false;
  protected isInvalidLogin = false;
  protected isUsernameNotTaken = true;

  constructor(
    private readonly routerService: Router,
    private readonly mobileViewService: MobileViewService,
    private readonly userService: UserService
  ) {}

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
    this.isMobileView = this.mobileViewService?.isMobileView;
  }

  @HostListener('window:resize', ['$event'])
  onResize() {
    this.isMobileView = this.mobileViewService?.isMobileView;
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
    this.loginForm = new FormGroup<LoginFormGroupInterface>({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });

    const passwordMatchValidator: ValidatorFn = (
      control: AbstractControl
    ): ValidationErrors | null => {
      const password = control.get('password');
      const confirmPassword = control.get('confirmPassword');

      return password?.value === confirmPassword?.value
        ? null
        : { passwordMismatch: true };
    };

    this.signupForm = new FormGroup<SignUpFormGroupInterface>(
      {
        username: new FormControl('', Validators.required),
        email: new FormControl('', [Validators.required, Validators.email]),
        phoneNumber: new FormControl('', Validators.required),
        password: new FormControl('', Validators.required),
        confirmPassword: new FormControl('', Validators.required),
      },
      { validators: passwordMatchValidator }
    );

    this.signupPhase2Form = new FormGroup<SignUpFormPhase2GroupInterface>({
      role: new FormControl(null, Validators.required),
    });

    this.forgotPasswordForm = new FormGroup<ForgotPasswordFormGroupInterface>({
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

  protected checkSignupFormValidations(value: string): void {
    const control = this.signupForm?.get(value);

    if (control) {
      const currentValue = control.value ?? '';
      const sanitizedValue = currentValue.toString().replaceAll(' ', '');
      control.setValue(sanitizedValue, { emitEvent: false });

      if (sanitizedValue === '') {
        control.markAsUntouched();
      }
    }
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
    this.isInvalidLogin = false;
    this.isSubmitClicked = true;

    if (this.loginForm.valid) {
      const payload: LogInPayloadInterface = {
        username: this.loginForm.get('username')?.value || '',
        password: this.loginForm.get('password')?.value || '',
      };

      this.isLoading = true;
      this.userService.loginUser(payload).subscribe({
        next: (response) => {
          this.isLoading = false;
          console.log('Registration successful!', response);
        },
        error: () => {
          this.isLoading = false;
          this.isInvalidLogin = true;
        },
      });
      this.toggleSpinner();
    } else {
      this.loginForm.markAllAsTouched();
    }
  }

  /**
   * Handles the sign-up button click event.
   * Currently toggles the loading spinner.
   */
  protected async onClickSignup(): Promise<void> {
    this.checkIsUsernameNotTaken(
      this.signupForm?.get('username')?.value as string
    )
      .then(() => {
        this.isSubmitClicked = true;

        if (
          this.signupForm?.valid &&
          this.checkIsPasswordMatch() &&
          this.checkIsPasswordValid() &&
          this.isUsernameNotTaken
        ) {
          this.isCreateAccount = false;
          this.isCreateAccountPhase2 = true;
          this.isSubmitClicked = false;
        } else {
          this.openModal();
          this.loginForm.markAllAsTouched();
        }
      })
      .catch(() => {
        this.isSubmitClicked = true;
        this.openModal();
        this.loginForm.markAllAsTouched();
      });
  }

  /**
   * Handles the sign-up button click event.
   * Currently toggles the loading spinner.
   */
  protected onClickFinalizedSignup(): void {
    const role = this.signupPhase2Form.get('role')?.value;
    const payload: SignUpPayloadInterface = {
      username: this.signupForm.get('username')?.value || '',
      email: this.signupForm.get('email')?.value || '',
      contactNumber: this.signupForm.get('phoneNumber')?.value || '',
      password: this.signupForm.get('password')?.value || '',
      role: role?.toUpperCase() || Role.PATIENT,
    };

    this.isLoading = true;
    role &&
      this.userService.registerUser(payload).subscribe({
        next: (response) => {
          this.isLoading = false;
          console.log('Registration successful!', response);
        },
        error: (err) => {
          this.isLoading = false;
          alert('Registration failed:' + err.message);
        },
      });
  }

  protected checkIsValidUsername(): boolean {
    const username = this.signupForm.get('username');
    return username?.valid || false;
  }

  protected async checkIsUsernameNotTaken(username: string): Promise<void> {
    return firstValueFrom(this.userService.checkUsernameAvailability(username))
      .then((isNotTaken) => {
        this.isUsernameNotTaken = isNotTaken;
      })
      .catch((error) => {
        this.isUsernameNotTaken = true;
        alert('Error validating username: ' + (error as Error).message);
      });
  }

  protected checkIsValidEmail(): boolean {
    const email = this.signupForm.get('email');
    return email?.valid || false;
  }

  protected checkIsPasswordMatch(): boolean {
    return (
      this.signupForm.get('password')?.value ===
      this.signupForm.get('confirmPassword')?.value
    );
  }

  protected checkIsPasswordValid(): boolean {
    const password = this.signupForm.get('password')?.value || '';
    const confirmPassword = this.signupForm.get('confirmPassword')?.value || '';

    // Check for non-empty fields
    if (password === '' || confirmPassword === '') {
      return false;
    }

    // Check password requirements
    const hasMinimumLength = password.length > 6;
    const hasAlphabet = /[a-zA-Z]/.test(password);
    const hasNumber = /\d/.test(password);

    return hasMinimumLength && hasAlphabet && hasNumber;
  }

  protected checkIsPhoneNumberValid(): boolean {
    const phoneNumber = this.signupForm.get('phoneNumber')?.value;
    return phoneNumber?.length === 10;
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
   * Toggles between the Create Account and Login views.
   * Resets the button and error states based on the active view.
   */
  protected onClickGoToFinalizedCreateOrLogin(): void {
    if (this.isCreateAccountPhase2) {
      this.buttonState = new Array(2).fill('normal');
      this.errorState = new Array(4).fill('');
    } else {
      this.buttonState = new Array(2).fill('normal');
      this.errorState = new Array(2).fill('');
    }

    this.isCreateAccountPhase2 = !this.isCreateAccountPhase2;
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

  openModal() {
    this.showErrorModal = true;
  }

  closeModal() {
    this.showErrorModal = false;
  }
}
