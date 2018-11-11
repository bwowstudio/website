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
  constructor(
    public translateService: TranslateService,
    public languageService: LanguageService,
  ) {
    this.setLanguage(this.languageService.language);
    this.languageService.langUpdated.subscribe(e => {
      this.setLanguage(this.languageService.language);
    });
  }
  ngOnInit() {}
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
}

