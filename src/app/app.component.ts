import { Component, VERSION } from '@angular/core';
import { Employee } from './employee';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  favouriteMovie: string = 'Pursuit of happiness';
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
  };
}
