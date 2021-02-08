import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CorporateProfileComponent } from './corporate-profile.component';

const routes: Routes = [
  {
    path: '',
    component: CorporateProfileComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorporateProfileRoutingModule { }
