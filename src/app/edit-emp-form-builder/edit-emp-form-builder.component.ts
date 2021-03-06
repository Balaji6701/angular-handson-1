import { Component, OnInit } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
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
    return this.empForm.get('name') as FormControl;
  }
  get department() {
    return this.empForm.get('department');
  }

  get salary() {
    return this.empForm.get('salary') as FormControl;
  }

  get permanent() {
    return this.empForm.get('permanent') as FormControl;
  }

  get skills() {
    return this.empForm.get('skills') as FormArray;
  }

  addSkill() {
    this.skills.push(this.fb.control(''));
  }

  constructor(private fb: FormBuilder) {
    this.empForm = this.fb.group({
      id: [this.employee.id],
      name: [
        this.employee.name,
        [Validators.required, Validators.minLength(2)],
      ],
      salary: [this.employee.salary],
      permanent: [this.employee.permanent],
      department: [this.employee.department.id],
      skills: this.fb.array([]),
    });
    this.employee.skill.forEach((e) =>
      this.skills.push(this.fb.control(e.name))
    );
    //this.skills.push()
  }
  onSubmit() {
    console.log(JSON.stringify(this.empForm.value));
  }
  ngOnInit() {}
}
