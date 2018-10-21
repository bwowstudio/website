import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page-mobile',
  templateUrl: './landing-page-mobile.component.html',
  styleUrls: ['./landing-page-mobile.component.scss']
})
export class LandingPageMobileComponent implements OnInit {
  ovalRoute = 'assets/images/oval.svg';
  displayArrow = 'block';
  backgroundPosition = '100vh';
  displayOval = 'block';
  transitionIsOn = false;
  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
    // setTimeout(() => this.nextPage(), 10000);
    this.router.navigate(['/home']);
  }
  mouseEnter() {
    this.ovalRoute = 'assets/images/ovalWhite.svg';
    this.displayArrow = 'none';
  }
  mouseLeave() {
    this.ovalRoute = 'assets/images/oval.svg';
    this.displayArrow = 'block';
  }
  nextPage() {
    if (this.transitionIsOn) {
      return;
    }
    this.transitionIsOn = true;
    this.displayOval = 'none';

    setInterval(() => {
      const positionY = Number(this.backgroundPosition.split('vh')[0]);
      this.backgroundPosition = `${positionY - 2}vh`;
    }, 1000 / 120);
    setTimeout(() => this.router.navigate(['/home']), 500);
  }
}
