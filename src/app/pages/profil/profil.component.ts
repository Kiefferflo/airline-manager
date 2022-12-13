import { Component, OnInit } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { ProfilsService } from 'src/app/intranet/services/profils.service';
import { UserI } from 'src/app/modeles/id-i';
import { PagesService } from 'src/app/services/pages.service';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  user: UserI = <UserI>{};

  constructor(private auth:Auth, public profil:ProfilsService) { }

  ngOnInit(): void {
    this.profil.getFireUser(this.auth.currentUser?.uid as string)
    .then(u => this.user = u.data() as UserI)
    .catch(erreur => console.log("Erreur", erreur));
  }

  updateProfil(){
    this.profil.updateFireUser(this.auth.currentUser?.uid as string, this.user);
    console.log("Mise à jour")
  }

  resetProfil(){
    this.user = <UserI>{};
  }

}
