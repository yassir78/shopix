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
  };
  addToPanier(product: Produit,qte:number=1) {
    this.panierService.addToPanier(product,qte);
  }

}
