import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { ScrollEvent } from 'ngx-scroll-event';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bwowers-mobile',
  templateUrl: './bwowers-mobile.component.html',
  styleUrls: ['./bwowers-mobile.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({ opacity: 1, transform: "translateX(0)"})),
      state('hide', style({ opacity: 0, transform: "translateX(-5%)"})),
      transition('show => hide', animate('600ms ease-in')),
      transition('hide => show', animate('600ms ease-out')),
      state('showFixed', style({ opacity: 1, transform: "translateY(0)"})),
      state('hideFixed', style({ opacity: 0, transform: "translateY(-5%)"})),
      transition('showFixed => hideFixed', animate('600ms ease-in')),
      transition('hideFixed => showFixed', animate('600ms ease-out')),
    ])
  ]
})
export class BwowersMobileComponent implements OnInit {
  firstTitle = 'hide';
  firstSubtitle = 'hide';
  secondTitle = 'hide';
  secondSubtitle = 'hide';
  secondParag = 'hide';
  secondImage = 'hide';
  thirdTitle = 'hide';
  thirdSubtitle = 'hide';
  thirdParag = 'hide';
  thirdImage = 'hide';
  fourthTitle = 'hide';
  fourthSubtitle = 'hide';
  fourthParag = 'hide';
  fourthImage = 'hide';
  fifthTitle = 'hide';
  fifthSubtitle = 'hide';
  fifthImage = 'hide';
  isHideFixedInput = false;
  imgUrls = [
    'assets/images/fintonicLogo.svg',
    'assets/images/flippitLogo.svg',
    'assets/images/acompartirLogo.svg',
    'assets/images/cabifyLogo.svg',
  ];
  imgUrlNumber = 0;
  lastScrollTop = 0;
  currentScrollTop = 0;
  fixedInput = 'showFixed';
  public handleScroll(event: ScrollEvent) {
    if (document.body.scrollHeight - window.scrollY < 1467) {
      this.isHideFixedInput = true;
    }
    if (document.body.scrollHeight - window.scrollY > 1467) {
      this.isHideFixedInput = false;
    }
  }
  constructor(
    public translateService: TranslateService,
    public languageService: LanguageService,
    public router: Router
  ) {
    this.translateService.use(this.languageService.language);
    this.languageService.langUpdated.subscribe(e => {
      this.translateService.use(e);
    });
  }

  @HostListener('window:scroll', ['$event'])
  checkScroll() {
    this.currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
      this.currentScrollTop > this.lastScrollTop ? this.fixedInput = 'hideFixed' : this.fixedInput = 'showFixed';
      this.lastScrollTop = this.currentScrollTop;
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

  ngOnInit() {}
  nextImg() {
    if (this.imgUrlNumber < 3) {
      this.imgUrlNumber += 1;
    }
  }
  previousImg() {
    if (this.imgUrlNumber > 0) {
      this.imgUrlNumber -= 1;
    }
  }
}
