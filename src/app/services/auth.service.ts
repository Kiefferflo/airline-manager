import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Router } from '@angular/router';
import { signInWithEmailAndPassword } from 'firebase/auth';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private readonly auth:Auth, private readonly router:Router) { }

  identification(mail:string, mdp:string) {
    signInWithEmailAndPassword(this.auth, mail, mdp)
    .then(d => {
      console.log("Utilisateur connecté", d, "Utilisateur actuel", this.auth.currentUser);
      this.router.navigateByUrl('/intranet');
    })
    .catch(e => console.log(e));
  }
}
