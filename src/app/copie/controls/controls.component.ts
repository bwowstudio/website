import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  number = 1;
  numberSrc = `assets/images/numbers/${this.number}.png`;
  constructor() { }

  ngOnInit() {

  }
  menuUp() {
    if (this.number < 5) {
      this.number += 1;
    }
    this.numberSrc = `assets/images/numbers/${this.number}.png`;
  }
  menuDown() {
    if (this.number > 1) {
      this.number -= 1;
    }
    this.numberSrc = `assets/images/numbers/${this.number}.png`;
  }

}
