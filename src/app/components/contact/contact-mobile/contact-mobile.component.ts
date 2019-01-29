import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { LanguageService } from 'src/app/services/language.service';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-contact-mobile',
  templateUrl: './contact-mobile.component.html',
  styleUrls: ['./contact-mobile.component.scss'],
  animations: [
    trigger('showAnimation', [
      state('show', style({ opacity: 1, transform: "translateY(0)", display: 'flex', position: 'fixed', top: "0", width: "100%"})),
      state('hide', style({ opacity: 0, transform: "translateY(-5%)", display: 'none'})),
      transition('show => hide', animate('600ms ease-in')),
      transition('hide => show', animate('600ms ease-out')),
    ])
  ]
})
export class ContactMobileComponent implements OnInit {
  placeholders: Array<string>;
  name: string = '';
  lastName: string = '';
  company: string = '';
  position: string = '';
  email: string = '';
  phone: string = '';
  country: string = '';
  message: string = '';
  confirmMessage: string = 'hide';
  constructor(
    public translateService: TranslateService,
    public languageService: LanguageService,
    public router: Router,
    public mailService: MailService
  ) {
    this.translateService.use(this.languageService.language);
    this.languageService.langUpdated.subscribe(e => {
      this.translateService.use(e);
      this.setPlaceholders();
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
      this.confirmMessage = 'show';
      this.name = '';
      this.lastName = '';
      this.company = '';
      this.position = '';
      this.email = '';
      this.phone = '';
      this.country = '';
      this.message = '';
    })
  }

  closePopUp() {
    this.confirmMessage = 'hide';
  }
}
