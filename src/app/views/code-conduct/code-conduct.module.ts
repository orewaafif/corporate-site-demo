import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CodeConductRoutingModule } from './code-conduct-routing.module';
import { CodeConductComponent } from './code-conduct.component';


@NgModule({
  declarations: [CodeConductComponent],
  imports: [
    CommonModule,
    CodeConductRoutingModule
  ]
})
export class CodeConductModule { }
