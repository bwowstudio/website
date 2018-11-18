import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing-page-mobile',
  templateUrl: './landing-page-mobile.component.html',
  styleUrls: ['./landing-page-mobile.component.scss']
})
export class LandingPageMobileComponent implements OnInit {
  ovalRoute = 'assets/images/oval.svg';
  constructor(
    public router: Router,
  ) { }
  nextPage() {
    this.router.navigate(['/home']);
  }
  ngOnInit() {
    setTimeout(() => {
      this.router.navigate(['/home']);
    }, 10000);
  }

}
