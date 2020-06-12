import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router, Params } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-edit-article',
  templateUrl: './edit-article.component.html',
  styleUrls: ['./edit-article.component.css'],
})
export class EditArticleComponent implements OnInit {
  articleTab: Array<Article> = [];
  id: string;
  article: Article;
  articleForm = this.fb.group({
    id: [],
    designation: ['', Validators.required],
    description: ['', Validators.required],
    prixUnitaire: ['', Validators.required],
    imageArticle: ['', Validators.required],
    qteEnStock: ['', Validators.required],
  });
  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      this.id = data.get('id');
      this.articlesService.getById(this.id).subscribe((res: Article) => {
        this.article = res;
        this.articleForm.patchValue(this.article);
      });
    });
  }
  editArticle() {
    this.articlesService.editArticle(this.articleForm.value).subscribe(() => {
      this.router.navigateByUrl('');
    });
  }
  supprimerArticle(id: string) {
    this.articlesService.deleteArticle(id).subscribe(() => {
      this.router.navigateByUrl('');
    });
  }
}
