import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';

@Component({
  selector: 'app-view-emp',
  templateUrl: './view-emp.component.html',
  styleUrls: ['./view-emp.component.css'],
})
export class ViewEmpComponent implements OnInit {
  employee: Employee = {
    id: 1001,
    name: 'John',
    salary: 675000,
    department: { id: 3451, name: 'CDE' },
    permanent: true,
    skill: [
      { id: 1, name: 'HTML' },
      { id: 2, name: 'CSS' },
      { id: 3, name: 'JAVASCRIPT' },
    ],
    dateOfBirth: new Date('12/31/2000'),
  };
  constructor() {}

  ngOnInit() {}
}
