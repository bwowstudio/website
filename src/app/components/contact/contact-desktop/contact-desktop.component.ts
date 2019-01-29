import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-contact-desktop',
  templateUrl: './contact-desktop.component.html',
  styleUrls: ['./contact-desktop.component.scss']
})
export class ContactDesktopComponent implements OnInit {
  placeholders: Array<string>;
  name: string = '';
  lastName: string = '';
  company: string = '';
  position: string = '';
  email: string = '';
  phone: string = '';
  country: string = '';
  message: string = '';
  constructor(
    public translateService: TranslateService,
    public languageService: LanguageService,
    public router: Router,
    public mailService: MailService
  ) {
    this.translateService.use(this.languageService.language);
    this.languageService.langUpdated.subscribe(e => {
      this.setPlaceholders();
      this.translateService.use(e);
    });
  }
  ngOnInit() {
    this.setPlaceholders();
  }
  setPlaceholders() {
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
      this.placeholders = results;
  });
  }

  sendEmail() {
    let completeName = `${this.name} ${this.lastName}. ${this.position} en ${this.company}. ${this.country}`
    this.mailService.sendmail(this.email, completeName, this.message, this.phone).subscribe(e => {
      console.log('listo')
    })
  }
}
