import { Categorie } from './categorie';
import { Produit } from './produit';

export class Domaine {
    private _id:number;
    private _nom:string;
    private _produits = new Array<Produit>();
    private _categories = new Array<Categorie>();
    constructor(){

    }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get nom(): string {
    return this._nom;
  }

  set nom(value: string) {
    this._nom = value;
  }

  get produits(): Produit[] {
    return this._produits;
  }

  set produits(value: Produit[]) {
    this._produits = value;
  }

  get categories(): Categorie[] {
    return this._categories;
  }

  set categories(value: Categorie[]) {
    this._categories = value;
  }
}
