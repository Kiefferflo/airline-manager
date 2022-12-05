import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { VolI } from '../modeles/compagnie-i';

@Injectable({
  providedIn: 'root'
})
export class CompagnieService {
  
  vols:Array<VolI> = [];

  constructor(public readonly http:HttpClient) {
    this.getVols()
  }

  getVols() {
    this.http.get<Array<VolI>>('assets/data/vols.json').subscribe( v => {
      this.vols = v;
    })
  }
}
