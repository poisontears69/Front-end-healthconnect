import { Role } from '../enum/login-page.enum';

export interface SignUpPayloadInterface {
  username: string;
  email: string;
  contactNumber: string;
  password: string;
  role: Role | string;
}

export interface LogInPayloadInterface {
  username: string;
  password: string;
}

export interface LogInTokenInterface { 
  token: string;
}

export interface LogInTokenResponseInterface { 
  sub: string;
  role: string;
  iat: string;
  exp: string;
}

export interface EmailVerificationPayloadInterface {
  email: string;
  otp: string;
}
