import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuardService {

  // constructor(private router: Router, private authService: AuthService) {}

  // canActivate(): boolean {
  //   // Use AuthService to check if the user is logged in
  //   if (this.authService.isLoggedIn()) {
  //     return true;  // Allow access to the admin route
  //   } else {
  //     this.router.navigate(['/login']);  // Redirect to login if not logged in
  //     return false;
  //   }
  // }
}
