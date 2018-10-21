import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
// TODO: incluir las traducciones en los anchor
// TODO: incluir los router navigate a las paginas cuando estén creadas;
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
  transitionIsOn = false;
  constructor(
    public router: Router,
  ) { }

  ngOnInit() {
    setTimeout(() => this.nextPage('/home'), 10000);
  }
  mouseEnter() {
    this.ovalRoute = 'assets/images/ovalWhite.svg';
    this.displayArrow = 'none';
  }
  mouseLeave() {
    this.ovalRoute = 'assets/images/oval.svg';
    this.displayArrow = 'block';
  }
  nextPage(page) {
    if (this.transitionIsOn) {
      return;
    }
    this.transitionIsOn = true;
    this.displayOval = 'none';

    setInterval(() => {
      const positionY = Number(this.backgroundPosition.split('vh')[0]);
      this.backgroundPosition = `${positionY - 2}vh`;
    }, 1000 / 120);
    setTimeout(() => this.router.navigate([page]), 500);
  }
}
