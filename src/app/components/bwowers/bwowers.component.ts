import { Component, OnInit, HostListener } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { ResolutionService } from 'src/app/services/resolution.service';
import { Router } from '@angular/router';
import { ScrollEvent } from 'ngx-scroll-event';


@Component({
  selector: 'app-bwowers',
  templateUrl: './bwowers.component.html',
  styleUrls: ['./bwowers.component.scss']
})
export class BwowersComponent implements OnInit {
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
    public resolutionService: ResolutionService,
    public router: Router
  ) {
    this.translateService.use(this.languageService.language);
    this.languageService.langUpdated.subscribe(e => {
      this.translateService.use(e);
    });
  }
  ngOnInit() {
    if (this.resolutionService.getIsMobileResolution()) {
      this.router.navigate(['/404']);
    }
  }
}
