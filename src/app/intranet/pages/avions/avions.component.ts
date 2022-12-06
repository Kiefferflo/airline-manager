import { Component, OnInit } from '@angular/core';
import { AvionI } from '../../modeles/compagnie-i';
import { CompagnieService } from '../../services/compagnie.service';

@Component({
  selector: 'app-avions',
  templateUrl: './avions.component.html',
  styleUrls: ['./avions.component.css']
})
export class AvionsComponent implements OnInit {


  filtreModele:string = "";

  avion:AvionI = <AvionI>{};

  constructor(public compagnie:CompagnieService ) { }

  ngOnInit(): void {
  }

  selectAvion(code: string | number){
    this.avion = this.compagnie.avions.find(av => av.code == code)!;
  }

  updateAvion(id: number | string){
    this.compagnie.updateFireAvions(id as string, this.avion);
    console.log("Mise à jour")
  }
  resetAvion(){
    this.avion = <AvionI>{};
  }
}
