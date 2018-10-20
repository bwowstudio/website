import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';

@Component({
  selector: 'app-fixed-input-mobile',
  templateUrl: './fixed-input-mobile.component.html',
  styleUrls: ['./fixed-input-mobile.component.scss']
})
export class FixedInputMobileComponent implements OnInit {
  placeholder: string;
  placeholder2: string;
  constructor(
    public translateService: TranslateService,
    public languageService: LanguageService,
  ) {
    this.translateService.use(this.languageService.language);
    this.languageService.langUpdated.subscribe(e => {
      this.translateService.use(e);
    });
  }
  ngOnInit() {
    this.translateService.get('FOOTER.placeholder').subscribe((res: string) => {
      this.placeholder = res;
    });
    this.translateService.get('FOOTER.placeholder2').subscribe((res: string) => {
      this.placeholder2 = res;
    });
  }

}
