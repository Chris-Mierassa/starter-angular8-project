import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home.component';
import {IndexComponent} from './index/index.component';
import {ContactComponent} from './contact/contact.component';
import {ArticlesComponent} from './articles/articles.component';
import {PresentationComponent} from './presentation/presentation.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
     children: [{path: '', component: IndexComponent}]
  },
  {
    path: '',
    component: HomeComponent,
    children: [{path: 'presentation', component: PresentationComponent}]
  },
  {
    path: '',
    component: HomeComponent,
    children: [{path: 'articles', component: ArticlesComponent}]
  },
  {
    path: '',
    component: HomeComponent,
    children: [{path: 'contact', component: ContactComponent}]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class HomeRoutingModule { }
