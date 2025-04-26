import { Status } from "../enum/doctor-verification-enum";

export interface DoctorDataPayload {
    id: number;
    name: string;
    email: string;
    submittedDate: string; // ISO date string
    status: Status | String;
}
