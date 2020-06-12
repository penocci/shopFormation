import { Component, OnInit } from '@angular/core';
import { ArticlesService } from 'src/app/services/articles.service';
import { FormBuilder } from '@angular/forms';
import { Article } from 'src/app/interfaces/article';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Panier } from 'src/app/interfaces/panier';

@Component({
  selector: 'app-liste-articles',
  templateUrl: './liste-articles.component.html',
  styleUrls: ['./liste-articles.component.css'],
})
export class ListeArticlesComponent implements OnInit {
  articles: Observable<Array<Article>> = this.articlesService.getAllArticles();
  panier=[]; 
  constructor(
    private fb: FormBuilder,
    private articlesService: ArticlesService,
     private router: Router
  ) {}

  ngOnInit(): void {}

  supprimerArticle(id: string) {
    this.articlesService.deleteArticle(id).subscribe(()=>{
        this.router.navigateByUrl('');
      });
  }
  ajouterAuPanier(){
    
  }
  
}
