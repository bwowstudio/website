import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Input() moveUpNumber: Boolean = false; 
  @Output() page: EventEmitter<any> = new EventEmitter();
  number = 1;
  lastNumber = 0;
  direction = 'up';
  activeOneFromTwo = false;
  lastActiveOneUpToTwo = false;
  lastActiveOneUpToTwoFromOne = false;
  lastActiveOneUpToOne = false;
  lastActiveOneUpToOneFromZero = false;
  lastActiveOneUpToZero = false;
  keepOneInZero = false;

  activeTwoFromTwo = false;
  activeTwoFromFour = false;
  lastActiveTwoUpToTwo = false;
  lastActiveTwoUpToOne = false;
  lastActiveTwoUpToZero = false;
  lastActiveTwoDownToFour = false;
  lastActiveTwoUpToOneFromZero = false;
  lastActiveTwoUpToTwoFromOne = false;

  activeThreeFromTwo = false;
  activeThreeFromFour = false;
  lastActiveThreeUpToTwo = false;
  lastActiveThreeUpToOne = false;
  lastActiveThreeDownToFour = false;
  lastActiveThreeDownToFive = false;
  lastActiveThreeDownToFourFromFive = false;
  lastActiveThreeUpToTwoFromOne = false;

  activeFourFromTwo = false;
  activeFourFromFour = false;
  lastActiveFourUpToTwo = false;
  lastActiveFourDownToFour = false;
  lastActiveFourDownToFive = false;
  lastActiveFourDownToSix = false;
  lastActiveFourDownToFiveFromSix = false;
  lastActiveFourDownToFourFromFive = false;

  activeFiveFromFour = false;
  lastActiveFiveDownToFour = false;
  lastActiveFiveDownToFive = false;
  lastActiveFiveDownToSix = false;
  keepFiveInSix = false;
  lastActiveFiveDownToFiveFromSix = false;
  lastActiveFiveDownToFourFromFive = false;
  

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
      this.lastNumber = this.number;
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
    this.lastNumber < numberInput ? this.direction = 'up' : this.direction = 'down';
    this.lastNumber = numberInput; 
    
    this.activeOneFromTwo = false;
    this.lastActiveOneUpToTwo = false;
    this.lastActiveOneUpToTwoFromOne  = false;
    this.lastActiveOneUpToOne = false;
    this.lastActiveOneUpToOneFromZero  = false;
    this.lastActiveOneUpToZero = false;
    this.keepOneInZero = false;

    this.lastActiveTwoDownToFour = false;
    this.activeTwoFromFour = false;
    this.activeTwoFromTwo = false;
    this.lastActiveTwoUpToTwo = false;
    this.lastActiveTwoUpToOne = false;
    this.lastActiveTwoUpToZero = false;
    this.lastActiveTwoUpToOneFromZero = false;
    this.lastActiveTwoUpToTwoFromOne = false;

    this.activeThreeFromTwo = false;
    this.activeThreeFromFour = false;
    this.lastActiveThreeUpToTwo = false;
    this.lastActiveThreeUpToOne = false;
    this.lastActiveThreeDownToFour = false;
    this.lastActiveThreeDownToFive = false;
    this.lastActiveThreeDownToFourFromFive = false;
    this.lastActiveThreeUpToTwoFromOne = false;

    this.activeFourFromTwo = false;
    this.activeFourFromFour = false;
    this.lastActiveFourUpToTwo = false;
    this.lastActiveFourDownToFour = false;
    this.lastActiveFourDownToFive = false;
    this.lastActiveFourDownToSix = false;
    this.lastActiveFourDownToFiveFromSix = false;
    this.lastActiveFourDownToFourFromFive = false;

    this.activeFiveFromFour = false;
    this.lastActiveFiveDownToFour = false;
    this.lastActiveFiveDownToFive = false;
    this.lastActiveFiveDownToSix = false;
    this.keepFiveInSix = false;
    this.lastActiveFiveDownToFiveFromSix = false;
    this.lastActiveFiveDownToFourFromFive = false;
    
    console.log(this.direction, numberInput);

    if(numberInput == 1) {
      this.activeOneFromTwo = true;
      this.lastActiveTwoDownToFour = true;
      this.lastActiveThreeDownToFive = true;
      this.lastActiveFourDownToSix = true;
      this.lastActiveFiveDownToSix = true;
    }
    if(numberInput == 2 && this.direction == 'up') {
      this.activeTwoFromFour = true;
      this.lastActiveOneUpToTwo = true;
      this.lastActiveThreeDownToFourFromFive = true;
      this.lastActiveFourDownToFiveFromSix = true;
      this.keepFiveInSix = true;
    } else if(numberInput == 2 && this.direction == 'down') {
      this.activeTwoFromTwo = true;
      this.lastActiveOneUpToTwoFromOne = true;
      this.lastActiveThreeDownToFour = true;
      this.lastActiveFourDownToFive = true;
      this.lastActiveFiveDownToSix = true;
    }
    if(numberInput == 3 && this.direction == 'up') {
      this.lastActiveOneUpToOne = true;
      this.lastActiveTwoUpToTwo = true;
      this.activeThreeFromFour = true;
      this.lastActiveFourDownToFourFromFive = true;
      this.lastActiveFiveDownToFiveFromSix = true;
    } else if(numberInput == 3 && this.direction == 'down') {
      this.activeThreeFromTwo = true;
      this.lastActiveOneUpToOneFromZero = true;
      this.lastActiveTwoUpToTwoFromOne = true;
      this.lastActiveFourDownToFour = true;
      this.lastActiveFiveDownToFive = true;
    }
    if(numberInput == 4 && this.direction == 'up') {
      this.lastActiveOneUpToZero = true;
      this.lastActiveTwoUpToOne = true;  
      this.lastActiveThreeUpToTwo = true;
      this.activeFourFromFour = true;
      this.lastActiveFiveDownToFourFromFive = true;
    } else if(numberInput == 4 && this.direction == 'down') {
      this.keepOneInZero = true;
      this.lastActiveTwoUpToOneFromZero = true;
      this.lastActiveThreeUpToTwoFromOne = true;
      this.activeFourFromTwo = true;
      this.lastActiveFiveDownToFour = true;
    }
    if(numberInput == 5) {
      this.lastActiveTwoUpToZero = true;
      this.lastActiveOneUpToZero = true;
      this.lastActiveThreeUpToOne = true; 
      this.lastActiveFourUpToTwo = true;
      this.activeFiveFromFour = true;
    } 

  }
}
