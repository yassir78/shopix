import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {DomaineService} from "../../../services/domaine.service";
import {PanierService} from "../../../services/panier.service";
import {PanierItem} from "../../../models/panier-item";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {Produit} from "../../../models/produit";
import {ProduitService} from "../../../services/produit.service";
import {element} from "protractor";
import {CategorieService} from "../../../services/categorie.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnChanges {
   opened = false;
  public categories;
  products:Produit[];
  copyProducts:Produit[]=[];
  input:string;
  array:Produit[]=[]
  public panierItems:PanierItem[] = [];
  constructor(private router:Router,private produitService:ProduitService, private categorieService:CategorieService,private panierService:PanierService,private cookieService:CookieService ) {
    this.produitService.findAll().subscribe(data=>{
      this.products = <Produit[]> data;
      if(this.products){
        this.products.forEach(element=>{
          this.copyProducts.push(element);
        });
      }
    },error => {
      console.log(error);
    });

    this.panierService.getPanierItems().subscribe(
      items => {
        this.panierItems = items;
}

      ,error => {
        console.log("error");
      }

    );


  }
  ngOnChanges(){
  console.log("onChanges");
  }
  ngOnInit(): void {

    this.categorieService.findAll().subscribe(
     data=>{
      this.categories = data;
       console.log(data);

     },error => {
     console.log('error');
     }
   )
  }


  logout() {
    console.log('Amadou Aniba');
    if(this.cookieService.get('email') && this.cookieService.get('password')) {
      this.cookieService.delete('email', '/');
      this.cookieService.delete('password', '/');
    }
      localStorage.clear();
      this.router.navigate(['/accueil/']).then(() => {
        window.location.reload();
      });
  }

  chercher() {
    console.log(this.input);
    this.array = [];
    this.copyProducts.forEach(element=>{
      if(element.libelle.toLowerCase().startsWith(this.input)){
        this.array.push(element);
      }
    });
    if(this.input==''){
      this.array = [];
    }
  }

  add(prod: Produit) {
  this.panierService.addToPanier(prod);
  }
}
