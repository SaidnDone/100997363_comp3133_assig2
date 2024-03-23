import { Component } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  username: string = '';
  email: string = '';
  password: string = '';

  constructor(private userService: UserService) { }

  onSubmit() {
    const userData = {
      username: this.username,
      email: this.email,
      password: this.password
    };

    this.userService.signup(userData).subscribe(
      (response) => {
        console.log('Signup successful:', response);
        // Redirect to login page or show success message
      },
      (error) => {
        console.error('Signup failed:', error);
        // Handle signup error (show error message, reset form, etc.)
      }
    );
  }
}
