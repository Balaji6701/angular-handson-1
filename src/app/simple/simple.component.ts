import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css'],
})
export class SimpleComponent implements OnInit {
  isShow: boolean = true;
  value: number = 0;
  constructor() {}
  incrementCount() {
    this.value++;
  }
  ngOnInit() {}
}
