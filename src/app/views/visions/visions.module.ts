import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { VisionsRoutingModule } from './visions-routing.module';
import { VisionsComponent } from './visions.component';


@NgModule({
  declarations: [VisionsComponent],
  imports: [
    CommonModule,
    VisionsRoutingModule
  ]
})
export class VisionsModule { }
