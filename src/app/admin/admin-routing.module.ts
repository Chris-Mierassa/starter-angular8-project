import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {AdminComponent} from './admin.component';
import {AuthGuardsService} from '../home/shared/services/auth-guards.service';
import {AdminArticlesComponent} from './admin-articles/admin-articles/admin-articles.component';
import {AdminAddArticlesComponent} from './admin-articles/admin-add-articles/admin-add-articles.component';
import {AdminShowArticlesComponent} from './admin-articles/admin-show-articles/admin-show-articles.component';

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [{path: 'admin', canActivate: [AuthGuardsService], component: IndexComponent}]
  },
  {
    path: '',
    component: AdminComponent,
    children: [{path: 'articles', canActivate: [AuthGuardsService], component: AdminArticlesComponent}]
  },
  {
    path: '',
    component: AdminComponent,
    children: [{path: 'add-articles', canActivate: [AuthGuardsService], component: AdminAddArticlesComponent}]
  },
  {
    path: '',
    component: AdminComponent,
    children: [{path: 'show-articles', canActivate: [AuthGuardsService], component: AdminShowArticlesComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
