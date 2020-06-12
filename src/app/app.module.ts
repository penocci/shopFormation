import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './composants/utilisateur/utilisateur.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DonneesService } from './services/donnees.service';
import { HeaderComponent } from './composants/header/header.component';
import { FooterComponent } from './composants/footer/footer.component';
import { SignupComponent } from './auth/signup/signup.component';
import { SigninComponent } from './auth/signin/signin.component';
import { ListeArticlesComponent } from './composants/liste-articles/liste-articles.component';
import { ArticleZoomComponent } from './composants/liste-articles/article-zoom/article-zoom.component';
import { ArticleFormComponent } from './composants/liste-articles/article-form/article-form.component';
import { AuthGuardService } from './services/auth-guard.service';
import { AuthService } from './services/auth.service';
import { ArticlesService } from './services/articles.service';
import { AppBootstrapModule } from './app-bootstrap.module';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EditArticleComponent } from './composants/liste-articles/edit-article/edit-article.component';
import { PanierComponent } from './composants/panier/panier.component';



@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent,
    HeaderComponent,
    FooterComponent,
    SignupComponent,
    SigninComponent,
    ListeArticlesComponent,
    ArticleZoomComponent,
    ArticleFormComponent,
    EditArticleComponent,
    PanierComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    AppBootstrapModule,
    HttpClientModule,
    FontAwesomeModule,
  ],
  providers: [DonneesService, AuthService, ArticlesService, AuthGuardService],
  bootstrap: [AppComponent],
})
export class AppModule {}
