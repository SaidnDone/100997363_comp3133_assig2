import { Component } from '@angular/core';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-add-employee',
  templateUrl: './add-employee.component.html',
  styleUrls: ['./add-employee.component.css']
})
export class AddEmployeeComponent {
  firstName: string = '';
  lastName: string = '';
  email: string = '';
  gender: 'Male' | 'Female' | 'Other' = 'Male'; // Default gender
  salary: number = 0;

  constructor(private employeeService: EmployeeService) { }

  onSubmit() {
    const employeeData = {
      first_name: this.firstName,
      last_name: this.lastName,
      email: this.email,
      gender: this.gender,
      salary: this.salary
    };

    this.employeeService.addEmployee(employeeData).subscribe(
      (response) => {
        console.log('Employee added successfully:', response);
        // Redirect to employee list or show success message
      },
      (error) => {
        console.error('Failed to add employee:', error);
        // Handle error (show error message, reset form, etc.)
      }
    );
  }
}
