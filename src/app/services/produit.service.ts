import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Domaine} from "../models/domaine";
import {Produit} from "../models/produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http:HttpClient) { }

  getNomProduits()  {
    return this.http.get("http://localhost:7600/produits");
  }

}
