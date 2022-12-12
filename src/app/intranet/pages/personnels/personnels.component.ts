import { Component, OnDestroy, OnInit } from '@angular/core';
import { PersonnelI } from '../../modeles/compagnie-i';
import { CompagnieService } from '../../services/compagnie.service';

@Component({
  selector: 'app-personnels',
  templateUrl: './personnels.component.html',
  styleUrls: ['./personnels.component.css']
})
export class PersonnelsComponent implements OnInit, OnDestroy {

  persoLocaux:Array<{id: string, data: PersonnelI}> = [];
  listeHabilitations:Array<String> = [];

  constructor(public cServ:CompagnieService) { }

  ngOnInit(): void {
    this.cServ.getFirePersonnels();

    this.cServ.personnels$.subscribe(
      {
        next:(personnel) => personnel.forEach(p => {
          if(!this.listeHabilitations.includes(p.data.habilitation)) this.listeHabilitations.push(p.data.habilitation);
          this.persoLocaux.push(p)})
        ,
        error:(e) => console.log(e),
        complete:() => console.log("données de l'observable reçues")
      }
    )
  }

  ngOnDestroy(): void {
    this.cServ.personnels$.unsubscribe();
  }
}
