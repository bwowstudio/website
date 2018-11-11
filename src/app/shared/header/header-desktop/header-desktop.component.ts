import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
// TODO: incluir los link a las páginas cuando estén listas;
@Component({
  selector: 'app-header-desktop',
  templateUrl: './header-desktop.component.html',
  styleUrls: ['./header-desktop.component.scss']
})
export class HeaderDesktopComponent implements OnInit {
  langEs = true;
  langEn = false;
  dropdownHide = true;
  pageActive = {
    home: false,
    contact: false,
    bwowers: false,
  };
  constructor(
    public translateService: TranslateService,
    public languageService: LanguageService,
  ) {
    this.setLanguage(this.languageService.language);
    this.languageService.langUpdated.subscribe(e => {
      this.setLanguage(this.languageService.language);
    });
  }
  ngOnInit() {
    this.setActivePage();
  }
  mouseEnter() {
    this.dropdownHide = false;
  }
  mouseLeave() {
    this.dropdownHide = true;
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
  setActivePage() {
    switch (window.location.hash.split('#/')[1]) {
      case 'home':
        this.pageActive = {
          home: true,
          bwowers: false,
          contact: false,
        };
        break;
      case 'bwowers':
        this.pageActive = {
          home: false,
          bwowers: true,
          contact: false,
        };
        break;
      case 'contact':
        this.pageActive = {
          home: false,
          bwowers: false,
          contact: true,
        };
        break;
    }
  }
}

