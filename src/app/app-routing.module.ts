import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./views/corporate-profile/corporate-profile.module').then(m => m.CorporateProfileModule)
  },
  {
    path: 'boards',
    loadChildren: () => import('./views/directors/directors.module').then(m => m.DirectorsModule)
  },
  {
    path: 'core-visions',
    loadChildren: () => import('./views/visions/visions.module').then(m => m.VisionsModule)
  },
  {
    path: 'code-conduct',
    loadChildren: () => import('./views/code-conduct/code-conduct.module').then(m => m.CodeConductModule)
  },
  {
    path: 'managements',
    loadChildren: () => import('./views/managements/managements.module').then(m => m.ManagementsModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
