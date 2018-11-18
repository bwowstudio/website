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
  isSecondary = false;
  pageActive = {
    landing: false,
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
    public languageService: LanguageService
  ) {
    this.translateService.use(this.languageService.language);
    this.languageService.langUpdated.subscribe(e => {
      this.translateService.use(e);
      this.setLanguage(e);
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
    this.setActivePage();
  }
  setActivePage() {
    switch (window.location.hash.split('#/')[1]) {
      case '':
      this.isSecondary = false;
        this.pageActive = {
          landing: true,
          home: false,
          bwowers: false,
          contact: false,
          digitalProduct: false,
          branding: false,
          businessDesign: false,
          designSystem: false,
          designTeams: false,
        };
        break;
      case 'home':
      this.isSecondary = false;
        this.pageActive = {
          landing: false,
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
          landing: false,
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
          landing: false,
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
          landing: false,
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
          landing: false,
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
          landing: false,
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
          landing: false,
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
          landing: false,
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

