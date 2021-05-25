import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService implements CanActivate {
  constructor(public auth: AuthService, public router: Router) {}


  // canActivate(): boolean {
  //   if (!this.auth.isAdminAuthenticated()) {
  //     this.router.navigate(['/dashboardlogin']);
  //     return false;
  //   }
  //   return true;

  // }

  canActivate(): boolean {
    if (!this.auth.isAdminAuthenticated()) {
      this.router.navigate(['/dashboardlogin']);
      return false;
    }
    return true;

  }




}
