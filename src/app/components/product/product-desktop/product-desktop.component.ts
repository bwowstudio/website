import { Component, OnInit } from '@angular/core';
import { ScrollEvent } from 'ngx-scroll-event';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-desktop',
  templateUrl: './product-desktop.component.html',
  styleUrls: ['./product-desktop.component.scss']
})
export class ProductDesktopComponent implements OnInit {
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
    public router: Router
  ) {
    this.translateService.use(this.languageService.language);
    this.languageService.langUpdated.subscribe(e => {
      this.translateService.use(e);
    });
  }
  ngOnInit() {}
}
