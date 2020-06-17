import {Component, OnInit} from '@angular/core';
import {Categorie} from "../../models/categorie";
import {CategorieService} from "../../services/categorie.service";
import {ProduitService} from "../../services/produit.service";
import {Produit} from "../../models/produit";
import {PanierService} from "../../services/panier.service";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.scss']
})
export class ShopComponent implements OnInit {
  categories: Categorie[];
  produits: Produit[];
  filtreValue: number = 0;
  spinner:boolean=false;
  cat:string;
  categorie:Categorie = new Categorie();
  constructor(private route:ActivatedRoute,  private categorieService: CategorieService, private produitService: ProduitService,private panierService:PanierService) {
    this.categorieService.findAll().subscribe(data => {
      this.categories = <Categorie[]>data;
    }, error => {
      console.log('error');
    })
  }

  ngOnInit(): void {
    this.cat = this.route.snapshot.paramMap.get("nom");
    if(this.cat != null){
      this.categorie.nom = this.cat;
      this.findByCategorie(this.categorie);
    }else{
      this.spinner =true;
      this.produitService.findAll().subscribe(data => {
        this.spinner = false;
        this.produits = <Produit[]>data;
      }, error => {
        console.log(error);
      })
    }

  }

  findByCategorie(categorie: Categorie) {
    this.spinner =true;
    this.produitService.findByCategorie(categorie.nom).subscribe(data => {
      if (!data) {
        console.log('no data found');
      } else {
        this.spinner = false;
        this.produits = <Produit[]>data;
      }
    });
  }

  findAll() {
    this.spinner = true;
    this.produitService.findAll().subscribe(data => {
      this.spinner = false;
      this.produits = <Produit[]>data;
    }, error => {
      console.log(error);
    })
  }

  filtrer() {
    this.spinner = true;
    this.produitService.findByPrixLessThan(this.filtreValue).subscribe(data=>{
      this.spinner = false;
      this.produits = <Produit[]> data;
    },error => {
      console.log(error);
    })
  }
  addToPanier(product: Produit,qte:number=1) {
    this.panierService.addToPanier(product,qte);
  }
}
