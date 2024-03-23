import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrlSignup = '/api/signup'; // URL for signup endpoint
  private apiUrlLogin = '/api/login'; // URL for login endpoint

  constructor(private http: HttpClient) { }

  signup(userData: { username: string, email: string, password: string }): Observable<User> {
    return this.http.post<User>(this.apiUrlSignup, userData);
  }

  login(credentials: { usernameOrEmail: string, password: string }): Observable<User> {
    return this.http.post<User>(this.apiUrlLogin, credentials);
  }
}
