import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { CopieRoutingModule } from './copie-routing.module';
import { HeaderComponent } from './header/header.component';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    CopieRoutingModule,
    SharedModule
  ],
  declarations: [
    IndexComponent,
    HeaderComponent
  ]
})
export class CopieModule { }
