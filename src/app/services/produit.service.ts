import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Domaine} from "../models/domaine";
import {Produit} from "../models/produit";

@Injectable({
  providedIn: 'root'
})
export class ProduitService {

  constructor(private http: HttpClient) {
  }

  getNomProduits() {
    return this.http.get("http://localhost:7600/produits");
  }

  findAll() {
    return this.http.get("http://localhost:7600/shopix-api/produits/");
  }

  deleteById(produit: Produit) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    console.log(produit.id);
    return this.http.delete(`http://localhost:7600/shopix-api/produits/id/${produit.id}`, httpOptions);
  }

  update(id: number, prod: Produit) {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.put(`http://localhost:7600/shopix-api/produits/id/${id}`, prod, httpOptions);
  };
  findByLibelle(prod:Produit){
    return this.http.get(`http://localhost:7600/shopix-api/produits/libelle/${prod.libelle}`);
  }
  nbrProduit(){
    return this.http.get(`http://localhost:7600/shopix-api/produits/nbrProtuit`);
  }
  save(produit:Produit){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    return this.http.post(`http://localhost:7600/shopix-api/produits/`, produit, httpOptions);
  };
  findByCategorie(categorie:string){
    return this.http.get(`http://localhost:7600/shopix-api/produits/categorie/${categorie}`);
  };
  findByPrixLessThan(prix:number){
    return this.http.get(`http://localhost:7600/shopix-api/produits/prix/${prix}`);
  }
  findByLib(lib:string){
    return this.http.get(`http://localhost:7600/shopix-api/produits/libelle/${lib}`);
  }
}
