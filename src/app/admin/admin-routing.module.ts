import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule, Routes} from '@angular/router';
import {IndexComponent} from './index/index.component';
import {AdminComponent} from './admin.component';
import {AuthGuardsService} from "../home/shared/services/auth-guards.service";

const routes: Routes = [
  {
    path: '',
    component: AdminComponent,
    children: [{path: 'home', canActivate: [AuthGuardsService], component: IndexComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
