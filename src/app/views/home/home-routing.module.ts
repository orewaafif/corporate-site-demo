import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultComponent } from './default/default.component';
import { HomeComponent } from './home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: '',
        component: DefaultComponent
      },
      {
        path: 'about-us',
        loadChildren: () => import('../about-us/about-us.module').then(m => m.AboutUsModule)
      },
      {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'about-us'
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }
