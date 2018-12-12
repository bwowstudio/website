import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';

@Component({
  selector: 'app-product-mobile',
  templateUrl: './product-mobile.component.html',
  styleUrls: ['./product-mobile.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({ opacity: 1, transform: "translateX(0)"})),
      state('hide', style({ opacity: 0, transform: "translateX(-5%)"})),
      transition('show => hide', animate('600ms ease-in')),
      transition('hide => show', animate('600ms ease-out')),
    ])
  ]
})
export class ProductMobileComponent implements OnInit {
  firstTitle = 'hide';
  firstSubtitle = 'hide';
  firstImage = 'hide';
  secondTitle = 'hide';
  secondSubtitle = 'hide';
  secondImage = 'hide';
  thirdTitle = 'hide';
  thirdSubtitle = 'hide';
  thirdImage = 'hide';
  constructor() { }

  @HostListener('window:scroll', ['$event'])
    checkScroll() {
      const scrollPosition = window.pageYOffset;
      const elementsforAnimation = document.querySelectorAll('[item="animation"]');
      for(let i=0; i<elementsforAnimation.length; i++) {
        const elementPosition = <HTMLElement> elementsforAnimation[i];
        const item = elementPosition.getAttribute('data');
        if(scrollPosition+(window.innerHeight*0.8) >= elementPosition.offsetTop) {
          this[item] = 'show';
        } 
      }
    }


  ngOnInit() {
  }

}
