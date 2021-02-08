import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CodeConductComponent } from './code-conduct.component';

const routes: Routes = [{
  path: '',
  component: CodeConductComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CodeConductRoutingModule { }
