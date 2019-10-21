import { Component, OnInit } from '@angular/core';
import {Article} from '../../shared/models/article';
import {ARTICLES} from './articles-mock';
import {Subscription} from "rxjs";
import {ArticlesService} from "../../shared/Services/articles.service";

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Article[];
  selectedArticle: Article;
  articlesSubscription: Subscription;

  constructor(private articlesService: ArticlesService) { }

  ngOnInit() {
    this.articlesSubscription = this.articlesService.articlesSubject.subscribe(
      (articles: Article[]) => {
        this.articles = articles;
      }
    );
  }

  onSelect(article: Article):void {
    this.selectedArticle = article;
  }

}
