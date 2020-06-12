import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder,
} from '@angular/forms';
import { ArticlesService } from 'src/app/services/articles.service';

@Component({
  selector: 'app-article-form',
  templateUrl: './article-form.component.html',
  styleUrls: ['./article-form.component.css'],
})
export class ArticleFormComponent implements OnInit {
  articleTab = [];
  articleForm = new FormGroup({
    designation: new FormControl('', Validators.required),
    description: new FormControl('', Validators.required),
    prixUnitaire: new FormControl('', Validators.required),
    imageArticle: new FormControl('', Validators.required),
    qteEnStock: new FormControl('', Validators.required),
    
  });
  constructor(
    private fb: FormBuilder,
    private articlesService: ArticlesService
  ) {}

  ngOnInit(): void {}
  ajouterArticle() {
    this.articlesService.addArticle(this.articleForm.value).subscribe(() => {
      this.afficherArticles();
    });
    this.articleForm.reset();
  }
  afficherArticles() {
    this.articlesService.getAllArticles().subscribe((data) => {
      this.articleTab = data;
    });
  }
}
