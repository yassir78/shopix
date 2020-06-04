import {Commande} from "./commande";
import {Produit} from "./produit";

export class CommandeItem {
  public id;
  public qte;
  public produit:Produit;
  public commande:Commande;
 constructor() {
 }
 
}
