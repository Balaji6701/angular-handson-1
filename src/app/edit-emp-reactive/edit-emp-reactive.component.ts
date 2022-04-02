import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-edit-emp-reactive',
  templateUrl: './edit-emp-reactive.component.html',
  styleUrls: ['./edit-emp-reactive.component.css'],
})
export class EditEmpReactiveComponent implements OnInit {
  name = new FormControl('John');
  constructor() {}

  ngOnInit() {}
}
