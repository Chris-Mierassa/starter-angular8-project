import { Component, OnInit } from '@angular/core';
import {Article} from "../../../home/shared/models/article";
import {ActivatedRoute, Router} from "@angular/router";
import {ArticlesService} from "../../../Services/articles.service";

@Component({
  selector: 'app-admin-show-articles',
  templateUrl: './admin-show-articles.component.html',
  styleUrls: ['./admin-show-articles.component.css']
})
export class AdminShowArticlesComponent implements OnInit {
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private  router: Router,
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.article = new Article('', '', '', []);
    const  id = this.route.snapshot.params['id'];
    this.articlesService.getOneArticle(+id).then(
      (article: Article) => {
        this.article = article;
      }
    );
  }

  getBack() {
    this.router.navigate(['admin/articles']);
  }

}
