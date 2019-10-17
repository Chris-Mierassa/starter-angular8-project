import { Component, OnInit } from '@angular/core';
import {Article} from '../shared/models/article';
import {ARTICLES} from './articles-mock';

@Component({
  selector: 'app-articles',
  templateUrl: './articles.component.html',
  styleUrls: ['./articles.component.scss']
})
export class ArticlesComponent implements OnInit {
  articles: Article[] = ARTICLES;
  selectedArticle: Article;

  constructor() { }

  ngOnInit() {
  }

  onSelect(article: Article):void {
    this.selectedArticle = article;
  }

}
