import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import { AppComponent } from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import { ArticlesComponent } from './home/articles/articles.component';
import {NgbModule} from "@ng-bootstrap/ng-bootstrap";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastContainerModule, ToastrModule} from "ngx-toastr";
// import { ngxLoadingAnimationTypes, NgxLoadingModule } from 'ngx-loading';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  declarations: [
    AppComponent,
    ArticlesComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    }),
    FormsModule,
    ReactiveFormsModule,
    NgbModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    ToastContainerModule,
    // NgxLoadingModule.forRoot({
    //   animationType: ngxLoadingAnimationTypes.circle,
    //   fullScreenBackdrop: true,
    //   primaryColour: '#066EB9',
    //   secondaryColour: '#f3f3f4'
    // })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
