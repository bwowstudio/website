import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import { CopieRoutingModule } from './copie-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ControlsComponent } from './controls/controls.component';

@NgModule({
  imports: [
    CommonModule,
    CopieRoutingModule,
    SharedModule
  ],
  declarations: [
    IndexComponent,
    ControlsComponent
  ]
})
export class CopieModule { }
