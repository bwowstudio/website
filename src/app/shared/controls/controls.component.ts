import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Output() page: EventEmitter<any> = new EventEmitter();
  number = 1;
  numberSrc = `assets/images/numbers/${this.number}.png`;
  constructor() { }

  ngOnInit() {
    const number = localStorage.getItem('bwowPage');
    if (number) {
      this.number = Number(number);
      this.numberSrc = `assets/images/numbers/${this.number}.png`;
    }
  }
  menuUp() {
    if (this.number < 5) {
      this.number += 1;
    }
    this.numberSrc = `assets/images/numbers/${this.number}.png`;
    this.page.emit(this.number);
  }
  menuDown() {
    if (this.number > 1) {
      this.number -= 1;
    }
    this.numberSrc = `assets/images/numbers/${this.number}.png`;
    this.page.emit(this.number);
  }

}
