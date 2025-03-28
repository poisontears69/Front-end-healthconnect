import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { EmailVerificationPayloadInterface } from '../../pages/login-page/interfaces/user-data-payload.interface';
import { ClinicsDataInterface } from '../../pages/main-page/interfaces/main-page.interface';

@Injectable({
  providedIn: 'root',
})
export class ClinicsService {
  private baseUrl: string = 'http://localhost:8080';
  private clinicEndpoint: string = this.baseUrl + '/clinic';

  constructor(private readonly http: HttpClient) {}

  public getAllClinics(): Observable<ClinicsDataInterface[]> {
    return this.http
      .get<ClinicsDataInterface[]>(this.clinicEndpoint + '/all')
      .pipe(
        catchError((error) => {
          console.error('Send failed:', error);
          return throwError(() => new Error('Send failed. Please try again.'));
        })
      );
  }
}
