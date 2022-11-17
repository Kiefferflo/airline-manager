import { Injectable } from '@angular/core';
import { PageI } from '../modeles/page-i';

@Injectable({
  providedIn: 'root'
})
export class PagesService {

  mention:PageI = {
    titre:"Mentions légales",
    contenu:`Lorem ipsum`,
  };

  profil:PageI = {
    titre:"Profil",
    contenu:`Bienvenue dans votre profil`
  }

  constructor() { }
}
