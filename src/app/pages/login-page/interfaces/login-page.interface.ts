import { FormControl } from '@angular/forms';
import { Role } from '../enum/login-page.enum';

export interface LoginFormGroupInterface {
  username: FormControl<string | null>;
  password: FormControl<string | null>;
}

export interface SignUpFormGroupInterface {
  username: FormControl<string | null>;
  email: FormControl<string | null>;
  phoneNumber: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
}

export interface SignUpFormPhase2GroupInterface {
  role: FormControl<Role | null>;
  otp: FormControl<string | null>;
}

export interface ForgotPasswordFormGroupInterface {
  email: FormControl<string | null>;
}
