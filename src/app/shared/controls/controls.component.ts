import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Output() page: EventEmitter<any> = new EventEmitter();
  number = 1;
  isActive = [false, false, false, false, false];
  lastActive = [false, false, false, false, false];
  constructor(public router: Router) { }
  navigate() {
    const routes = ['digital-product', 'branding', 'business-design', 'design-system', 'design-teams'];
    this.router.navigate([routes[this.number - 1]]);
  }
  ngOnInit() {
    const number = localStorage.getItem('bwowPage');
    if (!Number(number)) {
      return;
    } else if (number) {
      this.setNumber(number);
      this.number = Number(number);
    }
  }
  menuUp() {
    if (this.number < 5) {
      this.number += 1;
    }
    this.setNumber(this.number);
    this.page.emit(this.number);
  }
  menuDown() {
    if (this.number > 1) {
      this.number -= 1;
    }
    this.setNumber(this.number);
    this.page.emit(this.number);
  }
  setNumber(numberInput) {
    const number = numberInput - 1;
    if (this.isActive[number]) {
      return;
    }
    this.lastActive = this.isActive;
    this.isActive = [false, false, false, false, false];
    this.isActive[number] = true;
  }
}
