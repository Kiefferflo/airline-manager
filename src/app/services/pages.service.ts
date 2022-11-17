import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ContenusI, PageI } from '../modeles/page-i';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  pages:ContenusI = <ContenusI>{};

  mention:PageI = {
    titre:"Mentions légales",
    contenu:`Lorem ipsum`,
  };

  profil:PageI = {
    titre:"Profil",
    contenu:`Bienvenue dans votre profil`
  }

  constructor(public readonly http:HttpClient) {
    this.getPages()
  }

  getPages() {
    this.http.get<ContenusI>('assets/data/pages.json').subscribe( p => {
      this.pages = p;
    })
  }
}
