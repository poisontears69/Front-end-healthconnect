import { FormControl } from "@angular/forms";

export interface LoginFormGroupInterface {
  email: FormControl<string | null>;
  password: FormControl<string | null>;
}

export interface SignUpFormGroupInterface {
  username: FormControl<string | null>;
  email: FormControl<string | null>;
  password: FormControl<string | null>;
  confirmPassword: FormControl<string | null>;
}

export interface ForgotPasswordFormGroupInterface {
  email: FormControl<string | null>;
}
