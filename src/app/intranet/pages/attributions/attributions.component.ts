import { Component, OnInit } from '@angular/core';
import { CompagnieService } from '../../services/compagnie.service';

@Component({
  selector: 'app-attributions',
  templateUrl: './attributions.component.html',
  styleUrls: ['./attributions.component.css']
})
export class AttributionsComponent implements OnInit {

  filtreModele:string = "";

  constructor(public compagnies:CompagnieService ) { }

  ngOnInit(): void {
    this.compagnies.getFireVols();
    console.log(this.compagnies.listeVols);
  }
}
