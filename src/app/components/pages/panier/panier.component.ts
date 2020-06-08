import { Component, OnInit } from '@angular/core';
import {PanierService} from "../../../services/panier.service";
import {PanierItem} from "../../../models/panier-item";
import {Produit} from "../../../models/produit";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  panierItems:PanierItem[]=[];
  total:number=0;
  constructor(private panierService:PanierService,private cookieService:CookieService,private router:Router) {

  }
  lien:string;

  ngOnInit(): void {
    this.panierService.getPanierItems().subscribe(
       data =>{
         this.panierItems = data;
         console.log(this.panierItems);
       },error=>{
          console.log("error");
    }
    );
     this.total=this.panierService.calculTotal();
  }
  add(product:Produit,qte=1){
    this.panierService.updatePanier(product,qte);
    this.total=this.panierService.calculTotal();
  }
  remove(product:Produit,qte=-1){
    this.panierService.updatePanier(product,qte);
   this.total=this.panierService.calculTotal();
  }
  delete(item:PanierItem){
   this.panierService.delete(item);
    this.total=this.panierService.calculTotal();
  }

  checkUser() {
    let email,password;
    email=this.cookieService.get("email");
    password=this.cookieService.get("password");
    if(email && password){
        this.router.navigate(['/accueil/commande']);
    }else{
      this.router.navigate(['/accueil/connexion']);
    }
  }
}
