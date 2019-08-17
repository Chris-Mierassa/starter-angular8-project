import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import {HomeComponent} from './home.component';
import { HeaderComponent } from './header/header.component';


@NgModule({
  declarations: [HomeComponent, NavComponent, FooterComponent, HeaderComponent],
  exports: [
    NavComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeModule { }
