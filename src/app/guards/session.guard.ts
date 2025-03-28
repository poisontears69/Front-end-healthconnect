import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { CookieService } from 'ngx-cookie-service';
import { CookieConstants } from '../constants/cookie.constants';
import { UserService } from '../reusables/services/user.service';
import {
  LogInTokenInterface,
  LogInTokenResponseInterface,
} from '../pages/login-page/interfaces/user-data-payload.interface';

export const sessionGuard: CanActivateFn = () => {
  const cookieService = inject(CookieService);
  const userService = inject(UserService);
  const router = inject(Router);

  // 1. Check for authentication token in cookies
  if (!cookieService.get(CookieConstants.SESSION_STORAGE)) {
    // No token found, redirect to login
    cookieService.delete(CookieConstants.SESSION_STORAGE);

    return router.createUrlTree(['/']);
  }

  const sessionStorage: LogInTokenInterface = JSON.parse(
    cookieService.get(CookieConstants.SESSION_STORAGE)
  );

  try {
    // 2. Verify token validity and expiration
    const decodedToken: LogInTokenResponseInterface =
      userService.getDecodedAccessToken(sessionStorage?.token);

    const expirationDate = new Date(decodedToken.exp);

    const isExpired = Date.now() >= expirationDate.getTime() * 1000;

    if (isExpired) {
      // Token expired, clear cookie and redirect
      cookieService.delete(CookieConstants.SESSION_STORAGE);

      return router.createUrlTree(['']);
    }

    // 3. Token is valid, allow access
    return true;
  } catch (error) {
    // Invalid token format, clear cookie and redirect
    console.error('Token decoding error:', error);
    cookieService.delete(CookieConstants.SESSION_STORAGE);
    return router.createUrlTree(['']);
  }
};
