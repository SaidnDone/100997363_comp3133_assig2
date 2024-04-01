import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Apollo } from 'apollo-angular';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import gql from 'graphql-tag';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-view-employee',
  templateUrl: './view-employee.component.html',
  styleUrls: ['./view-employee.component.css']
})
export class ViewEmployeeComponent implements OnInit {
  employeeId!: string;
  employee$!: Observable<Employee>;

  constructor(private route: ActivatedRoute, private apollo: Apollo) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.employeeId = params.get('id') || '';
      this.getEmployee();
    });
  }

  getEmployee(): void {
    this.employee$ = this.apollo.watchQuery<any>({
      query: gql`
        query GetEmployee($id: ID!) {
          getEmployeeById(id: $id) {
            id
            first_name
            last_name
            email
            gender
            salary
            // Add other fields you need
          }
        }
      `,
      variables: {
        id: this.employeeId
      }
    }).valueChanges.pipe(
      map(result => result.data.getEmployeeById)
    );
  }
}
