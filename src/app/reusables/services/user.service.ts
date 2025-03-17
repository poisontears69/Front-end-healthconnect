import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import {
  LogInPayloadInterface,
  SignUpPayloadInterface,
} from '../../pages/login-page/interfaces/user-data-payload.interface';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  private endpoint: string = 'http://localhost:8080/user';

  constructor(private readonly http: HttpClient) {}

  public loginUser(
    userData: LogInPayloadInterface
  ): Observable<LogInPayloadInterface> {
    return this.http
      .post<LogInPayloadInterface>(this.endpoint + '/login', userData)
      .pipe(
        catchError((error) => {
          console.error('Registration error:', error);
          return throwError(
            () => new Error('Registration failed. Please try again.')
          );
        })
      );
  }

  public registerUser(
    userData: SignUpPayloadInterface
  ): Observable<SignUpPayloadInterface> {
    return this.http
      .post<SignUpPayloadInterface>(this.endpoint + '/register', userData)
      .pipe(
        catchError((error) => {
          console.error('Registration error:', error);
          return throwError(
            () => new Error('Registration failed. Please try again.')
          );
        })
      );
  }

  public checkUsernameAvailability(username: string): Observable<boolean> {
    const url = `${this.endpoint}/check-username`;
    const params = new HttpParams().set('username', username);

    return this.http.get<boolean>(url, { params }).pipe(
      catchError((error) => {
        console.error('Username availability check failed:', error);
        return throwError(
          () =>
            new Error(
              'Unable to check username availability. Please try again.'
            )
        );
      })
    );
  }
}
