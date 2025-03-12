import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { SignUpPayloadInterface } from '../../pages/login-page/interfaces/user-data-payload.interface';

@Injectable({
  providedIn: 'root',
})
export class CreateAccountService {
  private endpoint: string = 'http://localhost:8080/user/register';

  constructor(private readonly http: HttpClient) {}

  public registerUser(
    userData: SignUpPayloadInterface
  ): Observable<SignUpPayloadInterface> {
    return this.http.post<SignUpPayloadInterface>(this.endpoint, userData).pipe(
      catchError((error) => {
        console.error('Registration error:', error);
        return throwError(
          () => new Error('Registration failed. Please try again.')
        );
      })
    );
  }
}
