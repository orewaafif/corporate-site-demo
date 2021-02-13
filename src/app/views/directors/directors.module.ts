import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectorsRoutingModule } from './directors-routing.module';
import { DirectorsComponent } from './directors.component';
import { ProfileViewModule } from 'src/app/components/profile-view/profile-view.module';


@NgModule({
  declarations: [DirectorsComponent],
  imports: [
    CommonModule,
    DirectorsRoutingModule,
    ProfileViewModule
  ]
})
export class DirectorsModule { }
