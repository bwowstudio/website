import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-header-desktop',
  templateUrl: './header-desktop.component.html',
  styleUrls: ['./header-desktop.component.scss']
})
export class HeaderDesktopComponent implements OnInit {
  langEs = true;
  langEn = false;
  dropdownHide = true;
  isSecondary = false;
  pageActive = {
    home: false,
    contact: false,
    bwowers: false,
    digitalProduct: false,
    branding: false,
    businessDesign: false,
    designSystem: false,
    designTeams: false,
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
      this.isSecondary = false;
        this.pageActive = {
          home: true,
          bwowers: false,
          contact: false,
          digitalProduct: false,
          branding: false,
          businessDesign: false,
          designSystem: false,
          designTeams: false,
        };
        break;
      case 'bwowers':
      this.isSecondary = false;
        this.pageActive = {
          home: false,
          bwowers: true,
          contact: false,
          digitalProduct: false,
          branding: false,
          businessDesign: false,
          designSystem: false,
          designTeams: false,
        };
        break;
      case 'contact':
      this.isSecondary = false;
        this.pageActive = {
          home: false,
          bwowers: false,
          contact: true,
          digitalProduct: false,
          branding: false,
          businessDesign: false,
          designSystem: false,
          designTeams: false,
        };
        break;
      case 'digital-product':
      this.isSecondary = true;
        this.pageActive = {
          home: false,
          bwowers: false,
          contact: false,
          digitalProduct: true,
          branding: false,
          businessDesign: false,
          designSystem: false,
          designTeams: false,
        };
        break;
      case 'branding':
      this.isSecondary = true;
        this.pageActive = {
          home: false,
          bwowers: false,
          contact: false,
          digitalProduct: false,
          branding: true,
          businessDesign: false,
          designSystem: false,
          designTeams: false,
        };
        break;
      case 'business-design':
      this.isSecondary = true;
        this.pageActive = {
          home: false,
          bwowers: false,
          contact: false,
          digitalProduct: false,
          branding: false,
          businessDesign: true,
          designSystem: false,
          designTeams: false,
        };
        break;
      case 'design-system':
      this.isSecondary = true;
        this.pageActive = {
          home: false,
          bwowers: false,
          contact: false,
          digitalProduct: false,
          branding: false,
          businessDesign: false,
          designSystem: true,
          designTeams: false,
        };
        break;
      case 'design-teams':
      this.isSecondary = true;
        this.pageActive = {
          home: false,
          bwowers: false,
          contact: false,
          digitalProduct: false,
          branding: false,
          businessDesign: false,
          designSystem: false,
          designTeams: true,
        };
        break;
    }
  }
}

