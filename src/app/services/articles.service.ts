import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpHeaderResponse,
  HttpHeaders
} from '@angular/common/http';
import { Article } from '../interfaces/article';
import { map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'any',
})
export class ArticlesService {
  private url = 'http://localhost:8000/api/articles';
  headers: HttpHeaders;

  constructor(private http: HttpClient) {}
  getAllArticles() {
    return this.http
      .get<Array<Article>>(this.url, { headers: this.headers })
      .pipe(map((elt) => elt['hydra:member']));
  }
  addArticle(article: Article) {
    return this.http.post(this.url, article);
  }
  deleteArticle(id: string) {
    return this.http.delete(this.url + '/' + id);
  }
  getById(id: string) {
    return this.http.get<Article>(this.url + '/' + id);
  }
  editArticle(article: Article) {
    return this.http.put(this.url + '/' + article.id, article);
  }
}
