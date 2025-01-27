import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  // private isLoggedInSubject: BehaviorSubject<boolean>; // Manages the login state
  // isLoggedIn$; // Exposes login state as an observable

  // constructor() {
  //   const initialLoginState = this.getInitialLoginState();
  //   this.isLoggedInSubject = new BehaviorSubject<boolean>(initialLoginState);
  //   this.isLoggedIn$ = this.isLoggedInSubject.asObservable();
  // }

  // private getInitialLoginState(): boolean {
  //   if (typeof window !== 'undefined' && localStorage) {
  //     try {
  //       return JSON.parse(localStorage.getItem('isLoggedIn') || 'false');
  //     } catch {
  //       return false; // Default to not logged in if parsing fails
  //     }
  //   }
  //   return false; // Default to not logged in for non-browser environments
  // }

  // login() {
  //   this.isLoggedInSubject.next(true); // Update login state to true
  //   if (typeof window !== 'undefined' && localStorage) {
  //     localStorage.setItem('isLoggedIn', 'true');
  //   }
  // }

  // logout() {
  //   this.isLoggedInSubject.next(false); // Update login state to false
  //   if (typeof window !== 'undefined' && localStorage) {
  //     localStorage.setItem('isLoggedIn', 'false');
  //   }
  // }

  // // Getter for immediate access to the current login state (useful for guards)
  // isLoggedIn(): boolean {
  //   return this.isLoggedInSubject.getValue();
  // }
}
