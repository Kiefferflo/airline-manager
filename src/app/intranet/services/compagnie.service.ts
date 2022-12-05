import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AvionI, PersonnelI, VolI } from '../modeles/compagnie-i';

@Injectable({
  providedIn: 'root'
})
export class CompagnieService {
  
  vols:Array<VolI> = [];
  avions:Array<AvionI> = [];
  personnels:Array<PersonnelI> = [];

  constructor(public readonly http:HttpClient) {
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
}
