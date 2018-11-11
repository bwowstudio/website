import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fonts',
  templateUrl: './fonts.component.html',
  styleUrls: ['./fonts.component.scss']
})
export class FontsComponent implements OnInit {
  isActive = [ false, false, false, false, false];
  lastActive = [ false, false, false, false, false];
  constructor() {}
  ngOnInit() {
  }
  setNumber(number) {
    if (this.isActive[number]) {
      return;
    }
    this.lastActive = this.isActive;
    this.isActive = [ false, false, false, false, false];
    this.isActive[number] = true;
  }
}
