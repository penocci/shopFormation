import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UtilisateurComponent } from './composants/utilisateur/utilisateur.component';
import { FormsModule } from '@angular/forms';
import { DonneesService } from './services/donnees.service';

@NgModule({
  declarations: [
    AppComponent,
    UtilisateurComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [DonneesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
