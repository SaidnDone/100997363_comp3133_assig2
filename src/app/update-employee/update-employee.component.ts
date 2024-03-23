import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-update-employee',
  templateUrl: './update-employee.component.html',
  styleUrls: ['./update-employee.component.css']
})
export class UpdateEmployeeComponent implements OnInit {
  employeeId: string | null = null; // Initialize employeeId to null
  employee: Employee = { _id: '', first_name: '', last_name: '', email: '', gender: '', salary: 0 };

  constructor(private route: ActivatedRoute, private employeeService: EmployeeService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id !== null) {
      this.employeeId = id;
      this.getEmployee();
    } else {
      // Handle the case where employeeId is null
    }
  }

  getEmployee(): void {
    if (this.employeeId !== null) {
      this.employeeService.getEmployeeById(this.employeeId)
        .subscribe(employee => this.employee = employee);
    } else {
      // Handle the case where employeeId is null
    }
  }

  updateEmployee(): void {
    if (this.employeeId !== null) {
      this.employeeService.updateEmployee(this.employeeId, this.employee)
        .subscribe(updatedEmployee => {
          // Handle success
        });
    } else {
      // Handle the case where employeeId is null
    }
  }
}
