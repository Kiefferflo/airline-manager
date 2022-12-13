import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { StringFormat } from 'firebase/storage';
import { ProfilsService } from '../intranet/services/profils.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly auth:Auth, private readonly router:Router, private readonly profil:ProfilsService) { }

  identification(mail:string, mdp:string) {
    signInWithEmailAndPassword(this.auth, mail, mdp)
    .then(d => {
      console.log("Utilisateur connecté", d, "Utilisateur actuel", this.auth.currentUser);
      console.log("Utilisateur Firebase", this.profil.getFireUser(this.auth.currentUser?.uid as string))
      this.router.navigateByUrl('/intranet');
    })
    .catch(e => console.log(e));
  }
}
