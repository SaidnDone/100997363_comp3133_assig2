import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import gql from 'graphql-tag';
import { map } from 'rxjs/operators';
import { Employee } from '../models/employee.model';
import { EmployeeInput } from '../models/employee.model';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {
  constructor(private apollo: Apollo) { }

  getAllEmployees(): Observable<Employee[]> {
    return this.apollo.watchQuery<any>({
      query: gql`
        query {
          getAllEmployees {
            id
            firstName
            lastName
            email
            gender
            salary
            // Add other fields you need
          }
        }
      `
    }).valueChanges.pipe(
      map(result => result.data.getAllEmployees)
    );
  }

  getEmployeeById(id: string): Observable<Employee> {
    return this.apollo.watchQuery<any>({
      query: gql`
        query GetEmployeeById($id: ID!) {
          getEmployeeById(id: $id) {
            id
            firstName
            lastName
            email
            gender
            salary
            // Add other fields you need
          }
        }
      `,
      variables: {
        id: id
      }
    }).valueChanges.pipe(
      map(result => result.data.getEmployeeById)
    );
  }

  addEmployee(employeeData: EmployeeInput): Observable<Employee> {
    return this.apollo.mutate<any>({
      mutation: gql`
        mutation AddEmployee($input: EmployeeInput!) {
          addEmployee(input: $input) {
            id
            firstName
            lastName
            email
            gender
            salary
            // Add other fields you need
          }
        }
      `,
      variables: {
        input: employeeData
      }
    }).pipe(
      map(result => result.data.addEmployee)
    );
  }

  updateEmployee(employeeId: string, employeeData: EmployeeInput): Observable<Employee> {
    return this.apollo.mutate<any>({
      mutation: gql`
        mutation UpdateEmployee($id: ID!, $input: EmployeeInput!) {
          updateEmployee(id: $id, input: $input) {
            id
            firstName
            lastName
            email
            gender
            salary
            // Add other fields you need
          }
        }
      `,
      variables: {
        id: employeeId,
        input: employeeData
      }
    }).pipe(
      map(result => result.data.updateEmployee)
    );
  }

  deleteEmployee(employeeId: string): Observable<Employee> {
    return this.apollo.mutate<any>({
      mutation: gql`
        mutation DeleteEmployee($id: ID!) {
          deleteEmployee(id: $id) {
            id
            firstName
            lastName
            email
            gender
            salary
            // Add other fields you need
          }
        }
      `,
      variables: {
        id: employeeId
      }
    }).pipe(
      map(result => result.data.deleteEmployee)
    );
  }
}
