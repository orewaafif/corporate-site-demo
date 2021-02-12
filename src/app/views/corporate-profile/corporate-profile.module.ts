import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CorporateProfileRoutingModule } from './corporate-profile-routing.module';
import { CorporateProfileComponent } from './corporate-profile.component';
import { ProfileViewModule } from 'src/app/components/profile-view/profile-view.module';


@NgModule({
  declarations: [CorporateProfileComponent],
  imports: [
    CommonModule,
    CorporateProfileRoutingModule,
    ProfileViewModule
  ]
})
export class CorporateProfileModule { }
