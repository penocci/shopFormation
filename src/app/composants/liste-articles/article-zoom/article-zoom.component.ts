import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ArticlesService } from 'src/app/services/articles.service';
import { Observable } from 'rxjs';
import { Article } from 'src/app/interfaces/article';

@Component({
  selector: 'app-article-zoom',
  templateUrl: './article-zoom.component.html',
  styleUrls: ['./article-zoom.component.css'],
})
export class ArticleZoomComponent implements OnInit {
  id: string;
  article: Article;

  constructor(
    private route: ActivatedRoute,
    private articlesService: ArticlesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((data) => {
      this.id = data.get('id');
      this.articlesService
        .getById(this.id)
        .subscribe((res: Article) => (this.article = res));
    });
  }
  supprimerArticle(id: string) {
    this.articlesService.deleteArticle(id).subscribe(() => {
      this.router.navigateByUrl('');
    });
  }
}
