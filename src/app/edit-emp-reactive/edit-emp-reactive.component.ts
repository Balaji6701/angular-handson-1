import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css'],
})
export class EditEmpReactiveComponent implements OnInit {
  name = new FormControl('John');
  empForm: FormGroup;
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

  ngOnInit() {
    this.empForm = new FormGroup({
      name: new FormControl(this.employee.name, [
        Validators.required,
        Validators.minLength(4),
        Validators.maxLength(20),
      ]),
    });
  }
}
