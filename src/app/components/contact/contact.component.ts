import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent implements OnInit {
  placeholders: Array<string>;
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
    forkJoin([
      this.translateService.get(`CONTACT.placeholder1`),
      this.translateService.get(`CONTACT.placeholder2`),
      this.translateService.get(`CONTACT.placeholder3`),
      this.translateService.get(`CONTACT.placeholder4`),
      this.translateService.get(`CONTACT.placeholder5`),
      this.translateService.get(`CONTACT.placeholder6`),
      this.translateService.get(`CONTACT.placeholder7`),
      this.translateService.get(`CONTACT.placeholder8`)
    ]).subscribe(results => {
      console.log(results);
      this.placeholders = results;
  });
  }
}
