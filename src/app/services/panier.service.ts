import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Produit} from "../models/produit";
import {PanierItem} from "../models/panier-item";
import {BehaviorSubject, Observable, Subscriber} from "rxjs";
import {map} from "rxjs/operators";
let products  = JSON.parse(localStorage.getItem("panierItem")) || [];
@Injectable({
  providedIn: 'root'
})
export class PanierService {
  public panierItems : BehaviorSubject<PanierItem[]> = new BehaviorSubject([]);
  public obs : Subscriber<{}>;
  constructor(private http:HttpClient) {
    this.panierItems.subscribe(products => products = products);
  }
  addToPanier(product:Produit,qte:number = 1):any{
    let hasItem = products.find((items, index)=>{
      if(items.product.ref == product.ref) {
        let newQte = products[index].qte+ qte;
        products[index].qte = newQte;
        return true;
      }
    });
    if(!hasItem){
      products.push({product:product,qte:qte});
    }
    localStorage.setItem("panierItem",JSON.stringify(products));
    }
  getPanierItems():Observable<PanierItem[]>{
    let items = new Observable(obs => {
      obs.next(products);
      obs.complete();
    });
    return <Observable<PanierItem[]>>items;
  }
   updatePanier(product:Produit,qte:number){
     products.find((items, index)=>{
       if(items.product.ref == product.ref) {
         let newQte = products[index].qte+ qte;
         if(newQte>0){
           products[index].qte = newQte;
         }

       }
     });
     localStorage.setItem("panierItem",JSON.stringify(products));
   }
   viderPanierItems(){
    products = [];
   }
   delete(item:PanierItem){
      let index = products.indexOf(item);
      products.splice(index,1);
     localStorage.setItem("panierItem",JSON.stringify(products));
   }
   calculTotal():number{
    let total = 0;
     products.forEach((item)=>{
        total += item.product.prix * item.qte;
     })
     return total;
   }

}
