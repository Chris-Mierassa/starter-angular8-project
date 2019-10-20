import { Component, OnInit } from '@angular/core';
import {Article} from '../../../home/shared/models/article';
import {Subscription} from 'rxjs';
import {ArticlesService} from "../../../Services/articles.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-admin-articles',
  templateUrl: './admin-articles.component.html',
  styleUrls: ['./admin-articles.component.css']
})
export class AdminArticlesComponent implements OnInit {
  articles: Article[];
  articlesSubscription: Subscription;

  constructor(
    private articlesService: ArticlesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.articlesSubscription = this.articlesService.articlesSubject.subscribe(
      (articles: Article[]) => {
        this.articles = articles;
      }
    );
  }

  newArticle() {
    this.router.navigate(['/admin/add-articles']);
  }

  deleteArticle(article: Article) {
    this.articlesService.removeArticle(article);
  }

  showArticle(id: number) {
    this.router.navigate(['/admin/show-articles', id]);
  }

  ngOnDestroy() {
    this.articlesSubscription.unsubscribe();
  }
}
