import { Component, OnInit, HostListener, ElementRef } from '@angular/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { LanguageService } from 'src/app/services/language.service';
import { TranslateService } from '@ngx-translate/core';
import { ScrollEvent } from 'ngx-scroll-event';
import { Router } from '@angular/router';

@Component({
  selector: 'app-branding-desktop',
  templateUrl: './branding-desktop.component.html',
  styleUrls: ['./branding-desktop.component.scss'],
  animations: [
    trigger('scrollAnimation', [
      state('show', style({ opacity: 1, transform: "translateX(0)"})),
      state('hide', style({ opacity: 0, transform: "translateX(-5%)"})),
      transition('show => hide', animate('600ms ease-in')),
      transition('hide => show', animate('600ms ease-out')),
    ])
  ]
})
export class BrandingDesktopComponent implements OnInit {
  firstTitle = 'hide';
  firstSubtitle = 'hide';
  firstImage = 'hide';
  secondTitle = 'hide';
  secondSubtitle = 'hide';
  secondImage = 'hide';
  thirdTitle = 'hide';
  thirdSubtitle = 'hide';
  thirdImage = 'hide';
  isHideFixedInput = false;
  public handleScroll(event: ScrollEvent) {
    if (document.body.scrollHeight - window.scrollY < 1133) {
      this.isHideFixedInput = true;
    }
    if (document.body.scrollHeight - window.scrollY > 1133) {
      this.isHideFixedInput = false;
    }
  }
  constructor(
    public translateService: TranslateService,
    public languageService: LanguageService,
    public router: Router,
    public el: ElementRef
  ) {
    this.translateService.use(this.languageService.language);
    this.languageService.langUpdated.subscribe(e => {
      this.translateService.use(e);
    });
  }

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

  ngOnInit() {}
}
