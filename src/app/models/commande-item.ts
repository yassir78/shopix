import {Commande} from "./commande";
import {Produit} from "./produit";

export class CommandeItem {
  private _id;
  private _qte;
  private _produit:Produit;
  private _commande:Commande;
 constructor() {
 }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get qte() {
    return this._qte;
  }

  set qte(value) {
    this._qte = value;
  }

  get produit(): Produit {
    return this._produit;
  }

  set produit(value: Produit) {
    this._produit = value;
  }

  get commande(): Commande {
    return this._commande;
  }

  set commande(value: Commande) {
    this._commande = value;
  }
}
