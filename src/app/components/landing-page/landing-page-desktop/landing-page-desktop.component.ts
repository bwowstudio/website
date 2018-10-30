import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// TODO: incluir las traducciones en los anchor
@Component({
  selector: 'app-landing-page-desktop',
  templateUrl: './landing-page-desktop.component.html',
  styleUrls: ['./landing-page-desktop.component.scss']
})
export class LandingPageDesktopComponent implements OnInit {
  ovalRoute = 'assets/images/oval.svg';
  displayArrow = 'block';
  backgroundPosition = '100vh';
  displayOval = 'block';
  displayOvalWhite = 'none';
  transitionIsOn = false;
  displayNet = '';
  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
    setTimeout(() => this.nextPage('/home'), 10000);
  }
  mouseEnter() {
    this.displayArrow = 'none';
    this.displayOval = 'none';
    this.displayOvalWhite = 'block';
  }
  mouseLeave() {
    this.displayArrow = 'block';
    this.displayOval = 'block';
    this.displayOvalWhite = 'none';
  }
  nextPage(page = '/home') {
    if (this.transitionIsOn) {
      return;
    }
    this.displayNet = 'none';
    this.transitionIsOn = true;
    this.displayArrow = 'none';
    this.displayOval = 'none';
    this.displayOvalWhite = 'none';
    setInterval(() => {
      const positionY = Number(this.backgroundPosition.split('vh')[0]);
      this.backgroundPosition = `${positionY - 2}vh`;
    }, 1000 / 120);
    setTimeout(() => this.router.navigate([page]), 500);
  }
}
