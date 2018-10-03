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
  ovalRoute = 'assets/images/oval.svg';
  displayArrow = 'block';
  backgroundPosition = '100vh';

  constructor(
    public translateService: TranslateService,
    public languageService: LanguageService,
    public router: Router
  ) { }

  ngOnInit() {
    this.translateService.use(this.languageService.language);
    this.languageService.langUpdated.subscribe(e => {
      this.translateService.use(e);
    });
    // setTimeout(() => this.nextPage(), 8000);
  }
  mouseEnter() {
    this.ovalRoute = 'assets/images/ovalWhite.svg';
    this.displayArrow = 'none';
  }
  mouseLeave() {
    this.ovalRoute = 'assets/images/oval.svg';
    this.displayArrow = 'block';
  }
  nextPage() {
    setInterval(() => {
      const positionY = Number(this.backgroundPosition.split('vh')[0]);
      this.backgroundPosition = `${positionY - 1}vh`;
    }, 1000 / 120);
    setTimeout(() => this.router.navigate(['/copie']), 1000);
  }
}
