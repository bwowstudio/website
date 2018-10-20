import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FontsComponent } from './components/fonts/fonts.component';
import { LanguageService } from './services/language.service';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { HeaderComponent } from './shared/header/header.component';
import { HeaderMobileComponent } from './shared/header/header-mobile/header-mobile.component';
import { HeaderDesktopComponent } from './shared/header/header-desktop/header-desktop.component';
import { LandingPageMobileComponent } from './components/landing-page/landing-page-mobile/landing-page-mobile.component';
import { LandingPageDesktopComponent } from './components/landing-page/landing-page-desktop/landing-page-desktop.component';
import { FixedInputComponent } from './shared/fixed-input/fixed-input.component';
import { FixedInputMobileComponent } from './shared/fixed-input/fixed-input-mobile/fixed-input-mobile.component';
import { FixedInputDesktopComponent } from './shared/fixed-input/fixed-input-desktop/fixed-input-desktop.component';
import { ControlsComponent } from './shared/controls/controls.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/translations/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FontsComponent,
    LandingPageMobileComponent,
    LandingPageDesktopComponent,
    HeaderComponent,
    HeaderMobileComponent,
    HeaderDesktopComponent,
    FixedInputComponent,
    FixedInputMobileComponent,
    FixedInputDesktopComponent,
    ControlsComponent,
    HomeComponent,
    ContactComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    })
  ],
  providers: [
    LanguageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
