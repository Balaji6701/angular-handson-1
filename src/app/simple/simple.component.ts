import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.css'],
})
export class SimpleComponent implements OnInit {
  isHidden: boolean = true;
  value: number = 0;
  constructor() {}
  showMessage() {
    this.isHidden = false;
  }
  incrementCount(count: number) {
    this.value += count;
  }
  ngOnInit() {}
}
