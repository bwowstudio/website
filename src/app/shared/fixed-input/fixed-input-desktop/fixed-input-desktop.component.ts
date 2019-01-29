import { Component, OnInit } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { MailService } from 'src/app/services/mail.service';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-fixed-input-desktop',
  templateUrl: './fixed-input-desktop.component.html',
  styleUrls: ['./fixed-input-desktop.component.scss']
})
export class FixedInputDesktopComponent implements OnInit {
  placeholder: string;
  placeholder2: string;
  emailForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl('')
  });

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
    this.mailService.sendmail(email, name, '', '').subscribe(e => {
      this.emailForm.setValue({email: '', name: ''});
    }, () => this.emailForm.setValue({email: '', name: ''}));  }
}
