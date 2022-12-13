import { Pipe, PipeTransform } from '@angular/core';
import { VolI } from '../modeles/compagnie-i';

@Pipe({
  name: 'avions'
})
export class AvionsPipe implements PipeTransform {

  transform(vols: Array<{id: string, data: VolI}>, filtre: string): Array<{id: string, data: VolI}> {
    if (!filtre || filtre.length == 0) return vols;
    if (vols.length == 0) return [];

    return vols.filter(v => v.data.avion.modele.toLowerCase().indexOf(filtre.toLowerCase()) != -1);
  }

}
