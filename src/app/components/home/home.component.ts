import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { forkJoin } from 'rxjs';
import { ResolutionService } from 'src/app/services/resolution.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  page = 1;
  home = {
    h3TextFirstLine: '',
    h3TextSecondLine: '',
    h4Text: '',
    aTextMobile: ''
  };
  constructor(
    public resolutionService: ResolutionService,
    public translateService: TranslateService,
    public languageService: LanguageService,
  ) {
    this.translateService.use(this.languageService.language);
    this.languageService.langUpdated.subscribe(e => {
      this.translateService.use(e);
    });
  }
  setText(page) {
    this.page = page;
    localStorage.setItem('bwowPage', `${this.page}`);
    forkJoin([
        this.translateService.get(`HOME.h3Text${page}FirstLine`),
        this.translateService.get(`HOME.h3Text${page}SecondLine`),
        this.translateService.get(`HOME.h4Text${page}`),
        this.resolutionService.getIsMobileResolution() ?
          this.translateService.get(`HOME.aTextMobile`) :
          this.translateService.get(`HOME.aText${page}`),
      ]).subscribe(results => {
        this.home = {
          h3TextFirstLine: results[0],
          h3TextSecondLine: results[1],
          h4Text: results[2],
          aTextMobile: results[3]
        };
    });
  }
  ngOnInit() {
    const number = localStorage.getItem('bwowPage');
    const page = Number(number);
    if (!page) {
      this.setText(this.page);
      return;
    } else if (number) {
      this.setText(page);
    }
  }
}
