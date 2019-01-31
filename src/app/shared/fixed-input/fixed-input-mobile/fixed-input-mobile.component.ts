import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { LanguageService } from 'src/app/services/language.service';
import { FormGroup, FormControl } from '@angular/forms';
import { MailService } from 'src/app/services/mail.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-fixed-input-mobile',
  templateUrl: './fixed-input-mobile.component.html',
  styleUrls: ['./fixed-input-mobile.component.scss'],
  animations: [
    trigger('showAnimation', [
      state('show', style({ opacity: 1, transform: "translateY(0)", display: 'flex', position: 'fixed', top: "-85vh", width: "100%"})),
      state('showHome', style({ opacity: 1, transform: "translateY(0)", display: 'flex', position: 'fixed', top: "0vh", width: "100%"})),
      state('hide', style({ opacity: 0, transform: "translateY(-5%)", display: 'none'})),
      transition('show => hide', animate('600ms ease-in')),
      transition('hide => show', animate('600ms ease-out')),
      transition('showHome => hide', animate('600ms ease-in')),
      transition('hide => showHome', animate('600ms ease-out')),
    ])
  ]
})
export class FixedInputMobileComponent implements OnInit {
  @Output() onShowPopUp = new EventEmitter<string>();
  placeholder: string;
  placeholder2: string;
  emailForm = new FormGroup({
    email: new FormControl(''),
    name: new FormControl('')
  });
  emailError: Boolean = false;
  confirmMessage: string = 'hide';
  constructor(
    public translateService: TranslateService,
    public languageService: LanguageService,
    public mailService: MailService,
    private router: Router
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
    if(email == '') {
      this.emailError = true;
    } else {
      this.emailError = false;
      this.mailService.sendmail(email, name, '', '' ).subscribe(e => {
        this.emailForm.setValue({email: '', name: ''});
        this.router.url == '/home' ? 
        this.confirmMessage = 'showHome' :
        this.confirmMessage = 'show';
      }, () => {
        console.error('Error al mandar el mail!');
        this.emailForm.setValue({email: '', name: ''});
        this.router.url == '/home' ? 
        this.confirmMessage = 'showHome' :
        this.confirmMessage = 'show';
      });
    }
    
  }

  closePopUp() {
    this.confirmMessage = 'hide';
  }

  onFocus() {
    this.onShowPopUp.emit();
  }
}
