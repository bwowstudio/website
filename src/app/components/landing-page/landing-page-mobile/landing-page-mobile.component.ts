import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page-mobile',
  templateUrl: './landing-page-mobile.component.html',
  styleUrls: ['./landing-page-mobile.component.scss']
})
export class LandingPageMobileComponent implements OnInit {
  ovalRoute = 'assets/images/oval.svg';
  backgroundPosition = '100vh';
  timeOut = setTimeout(() => {
    this.router.navigate(['/home']);
  }, 10000);
  transitionIsOn = false;

  constructor(
    public router: Router,
  ) { }
  nextPage(page = '/home') {
    clearTimeout(this.timeOut);
    if (this.transitionIsOn) {
      return;
    }
    this.transitionIsOn = true;
    setInterval(() => {
      const positionY = Number(this.backgroundPosition.split('vh')[0]);
      this.backgroundPosition = `${positionY - 2}vh`;
    }, 1000 / 120);
    setTimeout(() => this.router.navigate([page]), 500);
  }
  ngOnInit() {
  }

}
