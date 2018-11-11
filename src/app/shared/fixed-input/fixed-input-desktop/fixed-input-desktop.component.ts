import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

// TODO: ver los margenes de los input que no están puestos.
@Component({
  selector: 'app-fixed-input-desktop',
  templateUrl: './fixed-input-desktop.component.html',
  styleUrls: ['./fixed-input-desktop.component.scss']
})
export class FixedInputDesktopComponent implements OnInit {
  placeholder: string;
  placeholder2: string;
  constructor(
    public translateService: TranslateService,
    public languageService: LanguageService,
  ) {
    this.translateService.use(this.languageService.language);
    this.languageService.langUpdated.subscribe(e => {
      this.translateService.use(e);
      this.setLanguage();
    });
  }
  ngOnInit() {
    this.setLanguage();
  }
  setLanguage() {
    this.translateService.get('FOOTER.placeholder').subscribe((res: string) => {
      this.placeholder = res;
    });
    this.translateService.get('FOOTER.placeholder2').subscribe((res: string) => {
      this.placeholder2 = res;
    });
  }
}
