import { Injectable } from '@angular/core';
import { Auth } from '@angular/fire/auth';
import { Firestore, collection, getDocs, doc, getDoc, deleteDoc, setDoc } from '@angular/fire/firestore';
import { Router } from '@angular/router';
import { UserI } from 'src/app/modeles/id-i';

@Injectable({
  providedIn: 'root'
})
export class ProfilsService {

  user:UserI = <UserI>{};
  token!:string | number;

  constructor(private router:Router, private bdd:Firestore, public auth:Auth) { }

  async getFireUser(id_user : string){
    const docUser = doc(this.bdd, "users", id_user);
    return await getDoc(docUser);
  }

  async updateFireUser(uid : string, data: UserI){
    const docUser = doc(this.bdd, "users", uid);
    await setDoc(docUser, data, {merge:true});
  }

  deconnexion() {
    this.user = <UserI>{};
    this.auth.signOut();
    this.router.navigateByUrl('/');
  }
}
