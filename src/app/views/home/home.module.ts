import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import { DefaultComponent } from './default/default.component';
import { HorizontalMenuModule } from 'src/app/components/horizontal-menu/horizontal-menu.module';


@NgModule({
  declarations: [HomeComponent, DefaultComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    HorizontalMenuModule
  ]
})
export class HomeModule { }
