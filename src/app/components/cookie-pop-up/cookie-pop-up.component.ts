import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cookie-pop-up',
  templateUrl: './cookie-pop-up.component.html',
  styleUrls: ['./cookie-pop-up.component.scss']
})
export class CookiePopUpComponent implements OnInit {
  showPopUp = true;
  constructor() { 
    if(localStorage.getItem('acceptCookie') == 'true') this.showPopUp = false; 
  }

  ngOnInit() {
  }

  acceptCookies() {
    localStorage.setItem('acceptCookie', 'true');
    this.showPopUp = false;
  }
}
