import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from './services/language.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  param = { value: 'world' };
  constructor(
    public translateService: TranslateService,
    public languageService: LanguageService,
  ) {
    this.translateService.use(this.languageService.language);
    this.languageService.langUpdated.subscribe(e => {
      this.translateService.use(e);
    });
  }
  onActivate() {
    window.scroll(0, 0);
  }
  onResize() {
    window.location.reload();
  }
  ngOnInit() {
    this.translateService.get('HELLO', { value: 'world' }).subscribe((res: string) => {
    });
  }
}
