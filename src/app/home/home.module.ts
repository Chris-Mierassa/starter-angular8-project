import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { NavComponent } from './nav/nav.component';
import { FooterComponent } from './footer/footer.component';
import {HomeComponent} from './home.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import {TranslateModule} from '@ngx-translate/core';
import { ContactComponent } from './contact/contact.component';
import {ReactiveFormsModule} from '@angular/forms';
import { PresentationComponent } from './presentation/presentation.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import {NgbCollapseModule} from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    HomeComponent,
    NavComponent,
    FooterComponent,
    HeaderComponent,
    IndexComponent,
    ContactComponent,
    PresentationComponent,
    SignupComponent,
    SigninComponent
  ],
  exports: [
    NavComponent,
    FooterComponent,
    HeaderComponent,
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    ReactiveFormsModule,
    NgbCollapseModule
  ]
})
export class HomeModule { }
