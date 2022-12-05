import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './pages/menu/menu.component';
import { ConnexionComponent } from './pages/connexion/connexion.component';
import { MentionsComponent } from './pages/mentions/mentions.component';
import { FooterComponent } from './pages/footer/footer.component';
import { ErreurRouteComponent } from './pages/erreur-route/erreur-route.component';
import { ProfilComponent } from './pages/profil/profil.component';
import { FormsModule } from '@angular/forms';
import { TokenInterceptor } from './securite/token.interceptor';
import { Erreur401Interceptor } from './securite/erreur401.interceptor';

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
    FormsModule,
    HttpClientModule
  ],
  providers: [
    {provide:HTTP_INTERCEPTORS, useClass:TokenInterceptor, multi:true}, 
    {provide:HTTP_INTERCEPTORS, useClass:Erreur401Interceptor, multi:true}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
