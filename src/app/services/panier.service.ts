import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produit} from "../models/produit";
import {PanierItem} from "../models/panier-item";
let products  = JSON.parse(localStorage.getItem("panierItem")) || [];
@Injectable({
  providedIn: 'root'
})
export class PanierService {


  constructor(private http:HttpClient) { }
  addToPanier(product:Produit,qte:number):any{
    let item = new PanierItem(product,qte);
    //ajoute
    console.log('products.ref '+ product.ref);
    /* let isExist:boolean=products.find((items,index)=>{
      console.log("products find");
      console.log("le produit "+items[index]);
      if(items.product.ref == product.ref){
        let quantite = products[index].qte + qte;
        return true;
      }
    });
    */
     products.forEach((value)=> {
        console.log(value);
     });
   /* console.log('le isExist = '+isExist);
    if(!isExist){
      products.push(item);
    }*/
    products.push(item);
    localStorage.setItem("panierItem",JSON.stringify(products));
    console.log(item.produit);
    console.log("la quantite "+item.qte);

    // return this.http.post("localhost:7600/shopix-api/paniers/");
  }
}
