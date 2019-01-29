import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { LanguageService } from 'src/app/services/language.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MailService } from 'src/app/services/mail.service';

@Component({
  selector: 'app-fixed-input-mobile',
  templateUrl: './fixed-input-mobile.component.html',
  styleUrls: ['./fixed-input-mobile.component.scss'],
  animations: [
    trigger('showAnimation', [
      state('show', style({ opacity: 1, transform: "translateY(0)", display: 'flex', position: 'fixed', top: "0", width: "100%"})),
      state('hide', style({ opacity: 0, transform: "translateY(-5%)", display: 'none'})),
      transition('show => hide', animate('600ms ease-in')),
      transition('hide => show', animate('600ms ease-out')),
    ])
  ]
})
export class FixedInputMobileComponent implements OnInit {
  placeholder: string;
  placeholder2: string;
  emailForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl('')
  });
  confirmMessage: string = 'hide';
  constructor(
    public translateService: TranslateService,
    public languageService: LanguageService,
    public mailService: MailService
  ) {
    this.translateService.use(this.languageService.language);
    this.languageService.langUpdated.subscribe(e => {
      this.translateService.use(e);
      this.setLanguage();
    });
  }
  ngOnInit() {
    this.setLanguage();
  }
  setLanguage() {
    this.translateService.get('FOOTER.placeholder').subscribe((res: string) => {
      this.placeholder = res;
    });
    this.translateService.get('FOOTER.placeholder2').subscribe((res: string) => {
      this.placeholder2 = res;
    });
  }
  sendEmail() {
    const { email, name } = this.emailForm.value;
    this.mailService.sendmail(email, name, '', '' ).subscribe(e => {
      this.emailForm.setValue({email: '', name: ''});
      this.confirmMessage = 'show';
    }, () => {
      console.error('Error al mandar el mail!');
      this.emailForm.setValue({email: '', name: ''});
    });
  }

  closePopUp() {
    this.confirmMessage = 'hide';
  }
}
