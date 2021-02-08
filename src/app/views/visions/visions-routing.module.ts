import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VisionsComponent } from './visions.component';

const routes: Routes = [{
  path: '',
  component: VisionsComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class VisionsRoutingModule { }
