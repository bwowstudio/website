import { Component, OnInit, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { LanguageService } from 'src/app/services/language.service';
import { forkJoin } from 'rxjs';
import { ResolutionService } from 'src/app/services/resolution.service';
import { Router } from '@angular/router';
import { text } from '@angular/core/src/render3/instructions';
import { ControlsComponent } from 'src/app/shared/controls/controls.component';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  @ViewChild(ControlsComponent) child: ControlsComponent;
  page = 1;
  moveUpNumber = false;
  imageUrl = `assets/images/homeImg${this.page - 1}.png`;
  home = {
    h3TextFirstLine: '',
    h3TextSecondLine: '',
    h4Text: '',
    aTextMobile: ''
  };
  finalText = '';
  constructor(
    public resolutionService: ResolutionService,
    public translateService: TranslateService,
    public languageService: LanguageService,
    public router: Router,
  ) {
    this.translateService.use(this.languageService.language);
    this.languageService.langUpdated.subscribe(e => {
      this.translateService.use(e);
      this.setText(this.page);
    });
  }
  setText(page) {
    this.page = page;
    localStorage.setItem('bwowPage', `${this.page}`);
    this.imageUrl = `assets/images/homeImg${this.page - 1}.png`;
    forkJoin([
        this.translateService.get(`HOME.h3Text${page}FirstLine`),
        this.translateService.get(`HOME.h3Text${page}SecondLine`),
        this.translateService.get(`HOME.h4Text${page}`),
        this.resolutionService.getIsMobileResolution() ?
          this.translateService.get(`HOME.aTextMobile`) :
          this.translateService.get(`HOME.aText${page}`),
      ]).subscribe(results => {
        this.home = {
          h3TextFirstLine: results[0],
          h3TextSecondLine: results[1],
          h4Text: results[2],
          aTextMobile: results[3]
        };
        this.finalText = `<h3 (click)="navigate()" class="fadeIn"> 
        ${this.home.h3TextFirstLine} <br> ${this.home.h3TextSecondLine}</h3>
          <h4 class="fadeIn">${this.home.h4Text}</h4>
          <a (click)="navigate()" class="fadeIn">${this.home.aTextMobile} 
            <img src="assets/images/arrow.svg">
          </a>
          <br> `
    });
  }

  onSwipeUp(evt) {
    if (this.page < 5) {
      this.setText(this.page+1);
      this.child.menuUp();
    }
  }

  onSwipeDown(evt) {
    if (this.page > 1) {
      this.setText(this.page-1);
      this.child.menuDown();
    }
   
  }

  ngOnInit() {
    const number = localStorage.getItem('bwowPage');
    const page = Number(number);
    if (!page) {
      this.setText(this.page);
      return;
    } else if (number) {
      this.setText(page);
    }
  }

  navigate() {
    const routes = ['digital-product', 'branding', 'business-design', 'design-system', 'design-teams'];
    this.router.navigate([routes[this.page - 1]]);
  }
}
