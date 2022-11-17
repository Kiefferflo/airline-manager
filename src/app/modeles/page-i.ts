export interface PageI {
    titre:string;
    intro?:string;
    contenu?:string;
}

export interface ProfilI {
    nom:string;
}

export interface ContenusI {
    mentions:PageI;
    profil:PageI;
}