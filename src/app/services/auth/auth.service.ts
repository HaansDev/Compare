import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(public jwtHelper: JwtHelperService) {}
// ...
public isAdminAuthenticated(): boolean {
const token = localStorage.getItem('token') || "";
return !this.jwtHelper.isTokenExpired(token);
}

// public isUserAuthenticated(): boolean {
//   const token = localStorage.getItem('token_user') || "";
//   return !this.jwtHelper.isTokenExpired(token);
//   }
}
