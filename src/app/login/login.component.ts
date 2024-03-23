import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usernameOrEmail: string = '';
  password: string = '';

  constructor(private userService: UserService) { }

  onSubmit() {
    const credentials = {
      usernameOrEmail: this.usernameOrEmail,
      password: this.password
    };

    this.userService.login(credentials).subscribe(
      (response) => {
        console.log('Login successful:', response);
        // Redirect to dashboard or desired page
      },
      (error) => {
        console.error('Login failed:', error);
        // Handle login error (show error message, reset form, etc.)
      }
    );
  }
}
