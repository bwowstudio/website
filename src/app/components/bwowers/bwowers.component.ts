import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { ResolutionService } from 'src/app/services/resolution.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bwowers',
  templateUrl: './bwowers.component.html',
  styleUrls: ['./bwowers.component.scss']
})
export class BwowersComponent implements OnInit {
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
