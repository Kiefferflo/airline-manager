import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProfilsService } from 'src/app/intranet/services/profils.service';
import { IdI, UserI } from 'src/app/modeles/id-i';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.css']
})
export class ConnexionComponent implements OnInit {

  id:IdI = {id:'', passe:''};
  user:UserI = <UserI>{};

  constructor(private http:HttpClient, private router:Router, private profil:ProfilsService, private auth:AuthService) { }

  ngOnInit(): void {
  }

  logId(){
    console.log(this.id)
  }

  /** Identifiaction avec fichiers locaux */
  checkId(){
    this.http.get<UserI>(`assets/ids/${this.id.id}@${this.id.passe}.json`).subscribe(
      retour => {
        console.log("Utilisateur identifié");
        alert('Bievenue ' + retour.nom);
        this.profil.user = retour;
        this.router.navigateByUrl('/intranet');
      },
      erreur => {
        console.log("Erreur", erreur);
        alert('Erreur ' + erreur)
      }
    )
  }

  /** Idnetification avec Firebase */
  checkFromFirebase() {
    this.auth.identification(this.id.id as string, this.id.passe as string)
  }
}
