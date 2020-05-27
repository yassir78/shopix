import { Produit } from './produit';
import { Domaine } from './domaine';
export class Categorie {
    private _id;
	    private _nom:string;
	    private _active:boolean;
        private _produits = new Array<Produit>();
        private _domaine = new Domaine() ;
        constructor (){

        }

  get id() {
    return this._id;
  }

  set id(value) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get active(): boolean {
    return this._active;
  }

  set active(value: boolean) {
    this._active = value;
  }

  get produits(): Produit[] {
    return this._produits;
  }

  set produits(value: Produit[]) {
    this._produits = value;
  }

  get domaine(): Domaine {
    return this._domaine;
  }

  set domaine(value: Domaine) {
    this._domaine = value;
  }
}
