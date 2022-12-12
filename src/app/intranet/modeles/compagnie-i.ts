export interface CompagnieI {

}

export interface AvionI {
    modele:string;
    capacite:number;
    autonomie?:number;
    code: string | number;
}

export interface PersonnelI {
    nom:string;
    prenoms:Array<string>;
    habilitation:HabilitationsE;
}

export interface VolI {
    code:string | number;
    avion:AvionI;
    date:Date;
    duree:number;
    personnel:Array<PersonnelI>;
    aeroportDepart:string;
    aeroportArrivee:string
}

enum HabilitationsE {
    pilote = 'Pilote',
    copilote = 'Copilote',
    pnc = 'PNC'
}