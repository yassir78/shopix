import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../../../services/produit.service";
import {Produit} from "../../../models/produit";
import {PanierService} from "../../../services/panier.service";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {
 public produitsVetements;
  public produitsSuperMarche;
  public produits;
  constructor(private produitService:ProduitService,private panierService:PanierService) { }

  ngOnInit(): void {
   console.log('produits');
    this.produitService.getNomProduits().subscribe(
      data=>{
        console.log('getting the values');
        console.log(data);
        this.produits =data;
      },error => {
        console.log(error);
      }
    )
  this.produitService.findByCategorie("Vetements & Chaussures").subscribe(data=>{
    this.produitsVetements = data;
  });
    this.produitService.findByCategorie("Supermarche").subscribe(data=>{
      this.produitsSuperMarche = data;
    });

  };
  addToPanier(product: Produit,qte:number=1) {
    this.panierService.addToPanier(product,qte);
  }

}
