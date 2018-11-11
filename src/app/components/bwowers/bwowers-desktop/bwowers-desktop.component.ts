import { Component, OnInit } from '@angular/core';
import { ScrollEvent } from 'ngx-scroll-event';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { ResolutionService } from 'src/app/services/resolution.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bwowers-desktop',
  templateUrl: './bwowers-desktop.component.html',
  styleUrls: ['./bwowers-desktop.component.scss']
})
export class BwowersDesktopComponent implements OnInit {
  isHideFixedInput = false;
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
}
