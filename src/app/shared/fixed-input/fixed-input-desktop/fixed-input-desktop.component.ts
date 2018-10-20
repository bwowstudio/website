import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

// TODO: ver los márgenes unos estan con padding y otros con margin;

@Component({
  selector: 'app-fixed-input-desktop',
  templateUrl: './fixed-input-desktop.component.html',
  styleUrls: ['./fixed-input-desktop.component.scss']
})
export class FixedInputDesktopComponent implements OnInit {
  constructor(
    public translateService: TranslateService,
    public languageService: LanguageService,
  ) {
    this.translateService.use(this.languageService.language);
    this.languageService.langUpdated.subscribe(e => {
      this.translateService.use(e);
    });
  }
  ngOnInit() {}
}
