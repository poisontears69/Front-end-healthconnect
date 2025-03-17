import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { EmailVerificationPayloadInterface } from '../../pages/login-page/interfaces/user-data-payload.interface';

@Injectable({
  providedIn: 'root',
})
export class OneTimePinService {
  private baseUrl: string = 'http://localhost:8080';
  private registerEndpoint: string = this.baseUrl + '/register';

  constructor(private readonly http: HttpClient) {}

  public sendEmailVerification(email: string): Observable<string> {
    return this.http
      .post<string>(this.registerEndpoint + '/generateOtp', { email })
      .pipe(
        catchError((error) => {
          console.error('Send failed:', error);
          return throwError(() => new Error('Send failed. Please try again.'));
        })
      );
  }

  public verifyOneTimePinFromEmail(
    userData: EmailVerificationPayloadInterface
  ): Observable<EmailVerificationPayloadInterface> {
    return this.http
      .post<EmailVerificationPayloadInterface>(
        this.registerEndpoint + '/verifyOtp',
        userData
      )
      .pipe(
        catchError((error) => {
          console.error('Verification error:', error);
          return throwError(
            () => new Error('Verification failed. Please try again.')
          );
        })
      );
  }
}
