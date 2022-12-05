import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { IntranetRoutingModule } from './intranet-routing.module';
import { AvionsComponent } from './pages/avions/avions.component';
import { AttributionsComponent } from './pages/attributions/attributions.component';
import { PersonnelsComponent } from './pages/personnels/personnels.component';
import { AccueilComponent } from './pages/accueil/accueil.component';
import { AvionsPipe } from './utils/avions.pipe';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AvionsComponent,
    AttributionsComponent,
    PersonnelsComponent,
    AccueilComponent,
    AvionsPipe
  ],
  imports: [
    CommonModule,
    IntranetRoutingModule,
    FormsModule
  ]
})
export class IntranetModule { }
