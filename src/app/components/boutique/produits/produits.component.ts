import { Component, OnInit } from '@angular/core';
import {ProduitService} from "../../../services/produit.service";
import {Produit} from "../../../models/produit";

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})
export class ProduitsComponent implements OnInit {
 public produits;
  constructor(private produitService:ProduitService) { }

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
  }

}
