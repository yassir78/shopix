import { Categorie } from './categorie';
import { Domaine } from './domaine';
import { Fournisseur } from './fournisseur';
import { Propriete } from './propriete';
 export class Produit {
    public id:number;
   public ref:string;
   public libelle:string;
   public marque:string;
   public description:string;
   public image:string;
   public prix:number;
   public stock:number;
   public note:number;
   public nbrVentes:number;
   public active:boolean = true;
   public categorie:Categorie;
   public propriertes = new Array<Propriete>();
   public fournisseur:Fournisseur;
   public domaine:Domaine;

 }
