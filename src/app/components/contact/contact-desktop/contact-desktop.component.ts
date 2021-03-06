import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { Router } from '@angular/router';
import { forkJoin } from 'rxjs';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-contact-desktop',
  templateUrl: './contact-desktop.component.html',
  styleUrls: ['./contact-desktop.component.scss'],
  animations: [
    trigger('showAnimation', [
      state('show', style({ opacity: 1, transform: "translateY(0)", display: 'flex', position: 'fixed', top: "0", width: "100%"})),
      state('hide', style({ opacity: 0, transform: "translateY(-5%)", display: 'none'})),
      transition('show => hide', animate('600ms ease-in')),
      transition('hide => show', animate('600ms ease-out')),
    ])
  ]
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
  confirmMessage: string = 'hide';
  emailError: Boolean = false;
  nameError: Boolean = false;
  phoneError: Boolean = false;
  lastNameError: Boolean = false;
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
    if(this.email == '') {
      this.emailError = true;
    }
    if(this.name == '') {
      this.nameError = true;
    }
    if(this.lastName == '') {
      this.lastNameError = true;
    }
    if(this.phone == '') {
      this.phoneError = true;
    }
    if(this.email !== '' && this.name !== '' && this.lastName !== '' && this.phone !== '') {
      this.emailError = false;
      this.nameError = false;
      this.phoneError = false;
      this.lastNameError = false;
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
  }

  closePopUp() {
    this.confirmMessage = 'hide';
  }
}
