import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from '../../shared/services/language.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(
    public translateService: TranslateService,
    public languageService: LanguageService,
    public router: Router
  ) {}

  ngOnInit() {
    this.translateService.use(this.languageService.language);
    this.languageService.langUpdated.subscribe(e => {
      this.translateService.use(e);
    });
    setTimeout(() => this.router.navigate(['/copie']), 1000);
  }
}
