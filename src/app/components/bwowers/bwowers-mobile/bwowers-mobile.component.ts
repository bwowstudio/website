import { Component, OnInit } from '@angular/core';
import { ScrollEvent } from 'ngx-scroll-event';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bwowers-mobile',
  templateUrl: './bwowers-mobile.component.html',
  styleUrls: ['./bwowers-mobile.component.scss']
})
export class BwowersMobileComponent implements OnInit {
  isHideFixedInput = false;
  imgUrls = [
    'assets/images/fintonicLogo.svg',
    'assets/images/flippitLogo.svg',
    'assets/images/acompartirLogo.svg',
    'assets/images/cabifyLogo.svg',
  ];
  imgUrlNumber = 0;
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
