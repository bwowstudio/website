import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss']
})
export class HeaderMobileComponent implements OnInit {
  isMenuHidden =  true;
  langEs = true;
  langEn = false;
  constructor(
    public translateService: TranslateService,
    public languageService: LanguageService
  ) {
    this.translateService.use(this.languageService.language);
    this.languageService.langUpdated.subscribe(e => {
      this.translateService.use(e);
    });
  }
  setLanguage(language) {
    this.translateService.use(language);
    switch (language) {
      case 'es':
        this.langEs = true;
        this.langEn = false;
        break;
      case 'en':
        this.langEs = false;
        this.langEn = true;
        break;
    }
  }
  menuHandler() {
    this.isMenuHidden = !this.isMenuHidden;
  }
  ngOnInit() {
  }

}

