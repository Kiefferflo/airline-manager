import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, doc, getDoc, deleteDoc, setDoc } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { AvionI, PersonnelI, VolI } from '../modeles/compagnie-i';

@Injectable({
  providedIn: 'root'
})
export class CompagnieService {
  
  listeAvions!:Array<{id: string, data: AvionI}>;
  listePersonnels:Array<{id: string, data: PersonnelI}> = [];
  listeVols:Array<{id: string, data: VolI}> = [];

  personnels$:BehaviorSubject<Array<{id: string, data: PersonnelI}>> = new BehaviorSubject(<Array<{id: string, data: PersonnelI}>>[]);

  constructor(public readonly http:HttpClient, private bdd:Firestore) {
  }

  // get data from Firebase

  async getFirePersonnels() {
    await getDocs(collection(this.bdd, 'personnels'))
    .then(pers => {
      this.listePersonnels = [];
      pers.forEach(
        p => this.listePersonnels.push({id:p.id, data:p.data() as PersonnelI})
      );
      this.personnels$.next(this.listePersonnels);
    })
    .catch(erreur => console.log("Erreur", erreur));
  }

  async getFirePersonnel(code : string){
    const docPers = doc(this.bdd, "personnels", code);
    await getDoc(docPers);
  }

  async delFirePersonnel(code : string){
    const docPers = doc(this.bdd, "personnels", code);
    await deleteDoc(docPers);
  }

  async updateFirePersonnel(code : string, data: PersonnelI){
    const docPers = doc(this.bdd, "personnels", code);
    await setDoc(docPers, data, {merge:true});
  }

  async getFireAvs(){
    await getDocs(collection(this.bdd, 'avions'))
    .then(av => {
      this.listeAvions = [];
      av.forEach(a => {
        this.listeAvions.push({id:a.id, data:a.data() as AvionI});
      })
    })
    .catch(erreur => console.log("Erreur", erreur));
  }

  async getFireAvion(code : string){
    const docAvion = doc(this.bdd, "avions", code);
    await getDoc(docAvion);
  }

  async delFireAvion(code : string){
    const docAvion = doc(this.bdd, "avions", code);
    await deleteDoc(docAvion);
  }

  async updateFireAvion(code : string, data: AvionI){
    const docAvion = doc(this.bdd, "avions", code);
    await setDoc(docAvion, data, {merge:true});
  }

  async getFireVols(){
    await getDocs(collection(this.bdd, 'vols'))
    .then(vo => {
      this.listeVols = [];
      vo.forEach(v => {
        this.listeVols.push({id:v.id, data:v.data() as VolI});
      })
    })
    .catch(erreur => console.log("Erreur", erreur));
  }

  async getFireVol(code : string){
    const docVol = doc(this.bdd, "vols", code);
    await getDoc(docVol);
  }

  async delFireVol(code : string){
    const docVol = doc(this.bdd, "vols", code);
    await deleteDoc(docVol);
  }

  async updateFireVol(code : string, data: VolI){
    const docVol = doc(this.bdd, "vols", code);
    await setDoc(docVol, data, {merge:true});
  }
}
