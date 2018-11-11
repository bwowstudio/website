import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FontsComponent } from './components/fonts/fonts.component';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { BwowersComponent } from './components/bwowers/bwowers.component';
import { UnderConstructionComponent } from './shared/under-construction/under-construction.component';
import { ProductComponent } from './components/product/product.component';
import { BrandingComponent } from './components/branding/branding.component';
import { BusinessComponent } from './components/business/business.component';
import { SystemComponent } from './components/system/system.component';
import { TeamsComponent } from './components/teams/teams.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'home', component: HomeComponent },
  { path: 'bwowers', component: BwowersComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'fonts', component: FontsComponent },
  { path: 'digital-product', component: ProductComponent },
  { path: 'branding', component: BrandingComponent },
  { path: 'business-design', component: BusinessComponent },
  { path: 'design-system', component: SystemComponent },
  { path: 'design-teams', component: TeamsComponent },
  { path: '404', component: UnderConstructionComponent },
  { path: '**', redirectTo: 'home' }

];
@NgModule({
  imports: [ RouterModule.forRoot(routes, { useHash: true })],
  exports: [ RouterModule ]
})
export class AppRoutingModule {}
