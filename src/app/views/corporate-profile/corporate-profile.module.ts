import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateProfileRoutingModule } from './corporate-profile-routing.module';
import { CorporateProfileComponent } from './corporate-profile.component';


@NgModule({
  declarations: [CorporateProfileComponent],
  imports: [
    CommonModule,
    CorporateProfileRoutingModule
  ]
})
export class CorporateProfileModule { }
