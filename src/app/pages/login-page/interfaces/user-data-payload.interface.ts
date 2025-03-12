import { Role } from "../enum/login-page.enum";

export interface SignUpPayloadInterface {
  username: string;
  email: string;
  contactNumber: string;
  password: string;
  role: Role | string;
}