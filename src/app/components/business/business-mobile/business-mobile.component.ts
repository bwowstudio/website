import { Component, OnInit, HostListener } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-business-mobile',
  templateUrl: './business-mobile.component.html',
  styleUrls: ['./business-mobile.component.scss'],
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
export class BusinessMobileComponent implements OnInit {
  firstTitle = 'hide';
  firstSubtitle = 'hide';
  firstImage = 'hide';
  secondTitle = 'hide';
  secondSubtitle = 'hide';
  secondImage = 'hide';
  thirdTitle = 'hide';
  thirdSubtitle = 'hide';
  thirdImage = 'hide';
  lastScrollTop = 0;
  currentScrollTop = 0;
  fixedInput = 'showFixed';
  focusInput: Boolean = false;
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
      this.currentScrollTop > this.lastScrollTop && !this.focusInput ? this.fixedInput = 'hideFixed' : this.fixedInput = 'showFixed';
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

  ngOnInit() {
  }

  showPopUp() {
    this.focusInput = true;
  }

}
