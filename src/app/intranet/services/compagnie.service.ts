import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Firestore, collection, getDocs, doc, getDoc, deleteDoc, setDoc } from '@angular/fire/firestore';
import { BehaviorSubject } from 'rxjs';
import { AvionI, PersonnelI, VolI } from '../modeles/compagnie-i';

@Injectable({
  providedIn: 'root'
})
export class CompagnieService {
  
  vols:Array<VolI> = [];
  avions:Array<AvionI> = [];
  personnels:Array<PersonnelI> = [];
  listeAvions!:Array<{id: string, data: AvionI}>;
  listePersonnels:Array<{id: string, data: PersonnelI}> = [];

  personnels$:BehaviorSubject<Array<{id: string, data: PersonnelI}>> = new BehaviorSubject(<Array<{id: string, data: PersonnelI}>>[]);

  constructor(public readonly http:HttpClient, private bdd:Firestore) {
    this.getPersonnels();
  }

  getVols() {
    this.http.get<Array<VolI>>('assets/data/vols.json').subscribe( 
      {
        next : (v) => {
            this.vols = v;
        },
        error : (e) => {
          console.log(e);
        },
        complete: () => {
          console.log("Chargement fini");
        }
      }
    )
  }

  getAvions() {
    this.http.get<Array<AvionI>>('assets/data/avions.json').subscribe(
      {
        next : (a) => {
            this.avions = a;
        },
        error : (e) => {
          console.log(e);
        },
        complete: () => {
          console.log("Chargement fini");
          this.getVols();
        }
      }
    )
  }

  getPersonnels() {
    this.http.get<Array<PersonnelI>>('assets/data/personnels.json').subscribe(
      {
        next : (p) => {
            this.personnels = p;
        },
        error : (e) => {
          console.log(e);
        },
        complete: () => {
          console.log("Chargement fini");
          this.getAvions();
        }
      }
    )
  }

  async getFirePersonnels() {
    await getDocs(collection(this.bdd, 'personnels'))
    .then(pers => {
      pers.forEach(
        p => this.listePersonnels.push({id:p.id, data:p.data() as PersonnelI})
      );
      this.personnels$.next(this.listePersonnels);
    })
    .catch(erreur => console.log("Erreur", erreur));
    
  }

  async getFireAvs(){
    await getDocs(collection(this.bdd, 'avions'))
    .then(av => {
      console.log(av);
      av.forEach(a => {
        console.log(a.id, a.data());
        this.listeAvions.push({id:a.id, data:a.data() as AvionI});
        this.avions.push(a.data() as AvionI);
      })
    })
    .catch(erreur => console.log("Erreur", erreur));
  }

  async getFireAvions(code : string){
    const docAvion = doc(this.bdd, "avions", code);
    await getDoc(docAvion);
  }

  async delFireAvions(code : string){
    const docAvion = doc(this.bdd, "avions", code);
    await deleteDoc(docAvion);
  }

  async updateFireAvions(code : string, data: AvionI){
    const docAvion = doc(this.bdd, "avions", code);
    await setDoc(docAvion, data, {merge:true});
  }
}
