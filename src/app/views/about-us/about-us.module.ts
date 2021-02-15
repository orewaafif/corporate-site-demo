import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutUsRoutingModule } from './about-us-routing.module';
import { AboutUsComponent } from './about-us.component';
import { PageModule } from 'src/app/components/page/page.module';
import { ProfileModule } from 'src/app/components/profile/profile.module';


@NgModule({
  declarations: [AboutUsComponent],
  imports: [
    CommonModule,
    AboutUsRoutingModule,
    PageModule,
    ProfileModule
  ]
})
export class AboutUsModule { }
