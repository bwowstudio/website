import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import * as Hammer from 'hammerjs';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';

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
import { FooterComponent } from './shared/footer/footer.component';
import { BwowersComponent } from './components/bwowers/bwowers.component';
import { UnderConstructionComponent } from './shared/under-construction/under-construction.component';
import { ScrollEventModule } from 'ngx-scroll-event';
import { FooterDesktopComponent } from './shared/footer/footer-desktop/footer-desktop.component';
import { FooterMobileComponent } from './shared/footer/footer-mobile/footer-mobile.component';
import { BwowersMobileComponent } from './components/bwowers/bwowers-mobile/bwowers-mobile.component';
import { BwowersDesktopComponent } from './components/bwowers/bwowers-desktop/bwowers-desktop.component';
import { ContactDesktopComponent } from './components/contact/contact-desktop/contact-desktop.component';
import { ContactMobileComponent } from './components/contact/contact-mobile/contact-mobile.component';
import { ProductComponent } from './components/product/product.component';
import { BrandingComponent } from './components/branding/branding.component';
import { BusinessComponent } from './components/business/business.component';
import { SystemComponent } from './components/system/system.component';
import { TeamsComponent } from './components/teams/teams.component';
import { BrandingDesktopComponent } from './components/branding/branding-desktop/branding-desktop.component';
import { BrandingMobileComponent } from './components/branding/branding-mobile/branding-mobile.component';
import { BusinessDesktopComponent } from './components/business/business-desktop/business-desktop.component';
import { BusinessMobileComponent } from './components/business/business-mobile/business-mobile.component';
import { ProductDesktopComponent } from './components/product/product-desktop/product-desktop.component';
import { ProductMobileComponent } from './components/product/product-mobile/product-mobile.component';
import { SystemDesktopComponent } from './components/system/system-desktop/system-desktop.component';
import { SystemMobileComponent } from './components/system/system-mobile/system-mobile.component';
import { TeamsDesktopComponent } from './components/teams/teams-desktop/teams-desktop.component';
import { TeamsMobileComponent } from './components/teams/teams-mobile/teams-mobile.component';
import { MailService } from './services/mail.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CookiePopUpComponent } from './components/cookie-pop-up/cookie-pop-up.component';
import { CookiesComponent } from './components/cookies/cookies.component';
import { CookiesDesktopComponent } from './components/cookies/cookies-desktop/cookies-desktop.component';
import { CookiesMobileComponent } from './components/cookies/cookies-mobile/cookies-mobile.component';
import { MessageConfirmComponent } from './shared/message-confirm/message-confirm.component';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/translations/', '.json');
}

export class HammerConfig extends HammerGestureConfig {
  overrides = <any>{
    'swipe': { direction: Hammer.DIRECTION_ALL }
  };
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
    FooterComponent,
    BwowersComponent,
    UnderConstructionComponent,
    FooterDesktopComponent,
    FooterMobileComponent,
    BwowersMobileComponent,
    BwowersDesktopComponent,
    ContactDesktopComponent,
    ContactMobileComponent,
    ProductComponent,
    BrandingComponent,
    BusinessComponent,
    SystemComponent,
    TeamsComponent,
    BrandingDesktopComponent,
    BrandingMobileComponent,
    BusinessDesktopComponent,
    BusinessMobileComponent,
    ProductDesktopComponent,
    ProductMobileComponent,
    SystemDesktopComponent,
    SystemMobileComponent,
    TeamsDesktopComponent,
    TeamsMobileComponent,
    CookiePopUpComponent,
    CookiesComponent,
    CookiesDesktopComponent,
    CookiesMobileComponent,
    MessageConfirmComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    ScrollEventModule,
    ReactiveFormsModule,
    FormsModule,
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
    MailService,
    {
      provide: HAMMER_GESTURE_CONFIG,
      useClass: HammerConfig
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
