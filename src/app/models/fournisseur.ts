import { Produit } from './produit';
export class Fournisseur {
    private _id:number;
    private _nom:string;
    private _email:string;
    private _tel:string;
    private _description:string;
    private _produits = new Array<Produit>();

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

  get email(): string {
    return this._email;
  }

  set email(value: string) {
    this._email = value;
  }

  get tel(): string {
    return this._tel;
  }

  set tel(value: string) {
    this._tel = value;
  }

  get description(): string {
    return this._description;
  }

  set description(value: string) {
    this._description = value;
  }

  get produits(): Produit[] {
    return this._produits;
  }

  set produits(value: Produit[]) {
    this._produits = value;
  }
}
