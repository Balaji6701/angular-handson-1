import { Component, OnInit } from '@angular/core';
import { Department } from '../department';
import { Employee } from '../employee';

@Component({
  selector: 'app-edit-emp',
  templateUrl: './edit-emp.component.html',
  styleUrls: ['./edit-emp.component.css'],
})
export class EditEmpComponent implements OnInit {
  departments: Department[];
  employee: Employee = {
    id: 1001,
    name: 'John',
    salary: 675000,
    department: { id: 1, name: 'Payroll' },
    permanent: true,
    skill: [
      { id: 1, name: 'HTML' },
      { id: 2, name: 'CSS' },
      { id: 3, name: 'JAVASCRIPT' },
    ],
    dateOfBirth: new Date('12/31/2000'),
  };

  onSubmit() {
    alert(this.employee);
  }

  constructor() {}

  ngOnInit() {
    this.departments = [
      { id: 1, name: 'Payroll' },
      { id: 2, name: 'Internal' },
      { id: 3, name: 'HR' },
    ];
  }
}
