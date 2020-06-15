import {Component, OnInit} from '@angular/core';
import {Categorie} from "../../models/categorie";
import {CategorieService} from "../../services/categorie.service";
import {ProduitService} from "../../services/produit.service";
import {Produit} from "../../models/produit";
import {PanierService} from "../../services/panier.service";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  categories: Categorie[];
  produits: Produit[];
  filtreValue: number = 0;

  constructor(private categorieService: CategorieService, private produitService: ProduitService,private panierService:PanierService) {
    this.categorieService.findAll().subscribe(data => {
      this.categories = <Categorie[]>data;
    }, error => {
      console.log('error');
    })
  }

  ngOnInit(): void {
    this.produitService.findAll().subscribe(data => {
      this.produits = <Produit[]>data;
    }, error => {
      console.log(error);
    })
  }

  findByCategorie(categorie: Categorie) {
    this.produitService.findByCategorie(categorie.nom).subscribe(data => {
      if (!data) {
        console.log('no data found');
      } else {
        this.produits = <Produit[]>data;
      }
    });
  }

  findAll() {
    this.produitService.findAll().subscribe(data => {
      this.produits = <Produit[]>data;
    }, error => {
      console.log(error);
    })
  }

  filtrer() {
    this.produitService.findByPrixLessThan(this.filtreValue).subscribe(data=>{
      this.produits = <Produit[]> data;
    },error => {
      console.log(error);
    })
  }
  addToPanier(product: Produit,qte:number=1) {
    this.panierService.addToPanier(product,qte);
  }
}
