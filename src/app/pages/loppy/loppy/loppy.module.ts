import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoppyRoutingModule } from './loppy-routing.module';
import { LoppyComponent } from './loppy.component';


@NgModule({
  declarations: [
    LoppyComponent
  ],
  imports: [
    CommonModule,
    LoppyRoutingModule
  ]
})
export class LoppyModule { }
