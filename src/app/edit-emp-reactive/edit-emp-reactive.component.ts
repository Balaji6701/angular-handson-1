import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css'],
})
export class EditEmpReactiveComponent implements OnInit {
  empForm: FormGroup;
  departments = [
    { id: 1, name: 'Payroll' },
    { id: 2, name: 'Internal' },
    { id: 3, name: 'HR' },
  ];
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
  constructor() {}
  get name() {
    return this.empForm.get('name') as FormControl;
  }
  get department() {
    return this.empForm.get('department');
  }

  get salary() {
    return this.empForm.get('salary') as FormControl;
  }

  ngOnInit() {
    this.empForm = new FormGroup({
      name: new FormControl(this.employee.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
      department: new FormControl(this.employee.department.id),
      salary: new FormControl(this.employee.salary),
    });
    console.log(this.employee.department.id);
  }
}
