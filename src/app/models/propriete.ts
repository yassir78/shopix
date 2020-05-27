import { Produit } from './produit';

export class Propriete {
    private _id:number;
    private _libelle:string;
    private _valeur:number;
    private _produit:Produit;

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get libelle(): string {
    return this._libelle;
  }

  set libelle(value: string) {
    this._libelle = value;
  }

  get valeur(): number {
    return this._valeur;
  }

  set valeur(value: number) {
    this._valeur = value;
  }

  get produit(): Produit {
    return this._produit;
  }

  set produit(value: Produit) {
    this._produit = value;
  }
}
