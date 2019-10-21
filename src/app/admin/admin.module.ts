import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexComponent } from './index/index.component';
import {AdminRoutingModule} from './admin-routing.module';
import { SidebarComponent } from './sidebar/sidebar.component';
import {AdminComponent} from './admin.component';
import { AdminArticlesComponent } from './admin-articles/admin-articles/admin-articles.component';
import { AdminAddArticlesComponent } from './admin-articles/admin-add-articles/admin-add-articles.component';
import { AdminShowArticlesComponent } from './admin-articles/admin-show-articles/admin-show-articles.component';
import {FormGroup, ReactiveFormsModule} from '@angular/forms';
import {NgbCollapseModule} from "@ng-bootstrap/ng-bootstrap";



@NgModule({
  declarations: [IndexComponent, SidebarComponent, AdminComponent, AdminArticlesComponent, AdminAddArticlesComponent, AdminShowArticlesComponent],
  exports: [
    SidebarComponent
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    ReactiveFormsModule,
    NgbCollapseModule
  ]
})
export class AdminModule { }
