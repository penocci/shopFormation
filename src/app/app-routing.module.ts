import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SignupComponent } from './auth/signup/signup.component';
import { ListeArticlesComponent } from './composants/liste-articles/liste-articles.component';
import { ArticleFormComponent } from './composants/liste-articles/article-form/article-form.component';
import { ArticleZoomComponent } from './composants/liste-articles/article-zoom/article-zoom.component';
import { SigninComponent } from './auth/signin/signin.component';
import { EditArticleComponent } from './composants/liste-articles/edit-article/edit-article.component';
import { PanierComponent } from './composants/panier/panier.component';
import { FooterComponent } from './composants/footer/footer.component';


const routes: Routes = [
  { path: '', component: ListeArticlesComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'articles', component: ListeArticlesComponent },
  { path: 'nouveau', component: ArticleFormComponent },
  { path: 'voir/:id', component: ArticleZoomComponent },
  { path: 'editer/:id', component: EditArticleComponent },
  { path: 'panier', component: PanierComponent },
  { path: 'footer', component: FooterComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
