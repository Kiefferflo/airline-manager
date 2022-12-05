import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UserI } from 'src/app/modeles/id-i';

@Injectable({
  providedIn: 'root'
})
export class ProfilsService {

  user:UserI = <UserI>{};
  token!:string | number;

  constructor(private router:Router) { }

  deconnexion() {
    this.user = <UserI>{};
    this.router.navigateByUrl('/');
  }
}
