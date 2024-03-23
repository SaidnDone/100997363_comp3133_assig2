import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  isLoggedIn() {
      throw new Error('Method not implemented.');
  }

  constructor(private router: Router) { }

  logout(): void {
    // Perform any necessary cleanup (e.g., clearing session data)
    // Redirect to login page
    this.router.navigate(['/login']);
  }
}
