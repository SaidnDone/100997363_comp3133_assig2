import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';
import { Employee } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private baseUrl = environment.apiUrl;

  constructor(private http: HttpClient) { }

  login(credentials: { usernameOrEmail: string, password: string }): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/login`, credentials);
  }

  signup(userData: { username: string, email: string, password: string }): Observable<User> {
    return this.http.post<User>(`${this.baseUrl}/signup`, userData);
  }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.baseUrl}/employees`);
  }

  addEmployee(employeeData: Employee): Observable<Employee> {
    return this.http.post<Employee>(`${this.baseUrl}/employees`, employeeData);
  }

  updateEmployee(employeeId: string, employeeData: Employee): Observable<Employee> {
    return this.http.put<Employee>(`${this.baseUrl}/employees/${employeeId}`, employeeData);
  }

  deleteEmployee(employeeId: string): Observable<Employee> {
    return this.http.delete<Employee>(`${this.baseUrl}/employees/${employeeId}`);
  }
}
