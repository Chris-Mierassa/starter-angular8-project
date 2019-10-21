import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {ArticlesService} from '../../../shared/Services/articles.service';
import {formatDate} from '@angular/common';
import {Article} from '../../../shared/models/article';
import {ArticlesForm} from './articles-form';

@Component({
  selector: 'app-admin-add-articles',
  templateUrl: './admin-add-articles.component.html',
  styleUrls: ['./admin-add-articles.component.css']
})
export class AdminAddArticlesComponent implements OnInit {
  articlesForm: FormGroup;
  fileIsUploading: boolean = false;
  fileUrl: string;
  fileUploaded: boolean = false;

  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private articlesService: ArticlesService
  ) { }

  ngOnInit() {
    this.initForm();
  }

  initForm() {
    this.articlesForm = this.formBuilder.group({
      title: ['', Validators.required],
      description: ['', Validators.required],
      link: ['', Validators.required]
    });
  }

  getBack() {
    this.router.navigate(['/admin/articles']);
  }

  onSubmit() {
    const title = this.articlesForm.get('title').value;
    const description = this.articlesForm.get('description').value;
    const link = this.articlesForm.get('link').value;
    const  article = new Article(title, description, link);
    if (this.fileUrl && this.fileUrl !== '') {
      article.photo = this.fileUrl;
    }
    this.articlesService.createNewArticle(article);
    this.router.navigate(['/admin/articles']);
  }

  onUploadFile(file: File) {
    this.fileIsUploading = true;
    this.articlesService.uploadFile(file).then(
      (url: string) => {
        this.fileUrl = url;
        this.fileIsUploading = false;
        this.fileUploaded = true;
      }
    );
  }

  detectFiles(event) {
    this.onUploadFile(event.target.files[0]);
  }
}
