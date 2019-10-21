import { Injectable } from '@angular/core';
import {Article} from '../models/article';
import {Subject} from 'rxjs';
import * as firebase from 'firebase';
import DataSnapshot = firebase.database.DataSnapshot;
import {error} from 'util';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  articles: Article[] = [];
  articlesSubject = new Subject<Article[]>();

  constructor() {
    this.getArticles();
  }

  emitArticles() {
    this.articlesSubject.next(this.articles);
  }

  saveArticles() {
    firebase.database().ref('/admin/articles').set(this.articles);
  }

  getArticles() {
    firebase.database().ref('/admin/articles')
      .on('value', (data: DataSnapshot) => {
        this.articles = data.val() ? data.val() : [];
        this.emitArticles();
      });
  }

  getOneArticle(id: number) {
    return new Promise(
      (resolve, reject) => {
        firebase.database().ref('/admin/articles/' + id).once('value').then(
          (data: DataSnapshot) => {
            resolve(data.val());
          }, (error) => {
            reject(error);
          }
        );
      }
    );
  }

  createNewArticle(newArticle: Article) {
    this.articles.push(newArticle);
    this.saveArticles();
    this.emitArticles();
  }

  removeArticle(article: Article) {
    const articleToRemove = this.articles.findIndex(
      (articleE1) => {
        if (articleE1 === article) {
          return true;
        }
      }
    );
    this.articles.splice(articleToRemove, 1);
    this.saveArticles();
    this.emitArticles();
  }

  uploadFile(file: File) {
    return new Promise(
      (resolve, reject) => {
        const almostUniqueFileName = Date.now().toString();
        const upload = firebase.storage().ref().child('images/' + almostUniqueFileName + file.name).put(file);
        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          () => {
            console.log('Chargement…');
          },
          (error) => {
            console.log('Erreur de chargement ! : ' + error);
            reject();
          },
          () => {
            resolve(upload.snapshot.ref.getDownloadURL());
          }
        );
      }
    );
  }
}
