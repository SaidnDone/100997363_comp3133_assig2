import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../models/employee.model';
import { EmployeeInput } from '../models/employee.model';


@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  private apiUrl = '/employee'; // Update the base URL to match your backend API endpoint

  constructor(private http: HttpClient) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(`${this.apiUrl}/getAllEmployees`);
  }

  getEmployeeById(id: string): Observable<Employee> {
    return this.http.get<Employee>(`${this.apiUrl}/searchEmployeeByEid/${id}`);
  }

  addEmployee(employeeData: EmployeeInput): Observable<Employee> {
    return this.http.post<Employee>(`${this.apiUrl}/addNewEmployee`, employeeData);
  }

  updateEmployee(employeeId: string, employeeData: EmployeeInput): Observable<Employee> {
    return this.http.put<Employee>(`${this.apiUrl}/updateEmployeeByEid/${employeeId}`, employeeData);
  }

  deleteEmployee(employeeId: string): Observable<Employee> {
    return this.http.delete<Employee>(`${this.apiUrl}/deleteEmployeeByEid/${employeeId}`);
  }
}
