import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { MentionsComponent } from './pages/mentions/mentions.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ErreurRouteComponent } from './pages/erreur-route/erreur-route.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ConnexionComponent,
    MentionsComponent,
    FooterComponent,
    ErreurRouteComponent,
    ProfilComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
