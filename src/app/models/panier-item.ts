import {Produit} from "./produit";

export class PanierItem {
 private _produit:Produit;
 private _qte:number;

  constructor(produit: Produit, qte: number) {
    this._produit = produit;
    this._qte = qte;
  }

  get product(): Produit {
    return this._produit;
  }

  set produit(value: Produit) {
    this._produit = value;
  }

  get qte(): number {
    return this._qte;
  }

  set qte(value: number) {
    this._qte = value;
  }
}
