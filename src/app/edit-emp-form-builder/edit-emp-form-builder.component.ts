import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Employee } from '../employee';

@Component({
  selector: 'app-edit-emp-form-builder',
  templateUrl: './edit-emp-form-builder.component.html',
  styleUrls: ['./edit-emp-form-builder.component.css'],
})
export class EditEmpFormBuilderComponent implements OnInit {
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

  get name() {
    return this.empForm.get('name');
  }
  get department() {
    return this.empForm.get('department');
  }

  get salary() {
    return this.empForm.get('salary');
  }

  get permanent() {
    return this.empForm.get('permanent');
  }

  constructor(private fb: FormBuilder) {
    this.empForm = this.fb.group({
      id: [this.employee.id],
      name: [this.employee.name],
      salary: [this.employee.salary],
      permanent: [this.employee.permanent],
    });
  }

  ngOnInit() {}
}
