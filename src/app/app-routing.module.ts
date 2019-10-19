import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuardsService} from "./home/shared/services/auth-guards.service";

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then(mod => mod.HomeModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(mod => mod.AdminModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
