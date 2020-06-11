import {Component, OnInit, PipeTransform} from '@angular/core';
import { DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';

import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import {Produit} from "../../models/produit";
import {ProduitService} from "../../services/produit.service";

const produits: Produit[] = [];

function search(text: string, pipe: PipeTransform): Produit[] {
  return produits.filter(produit => {
    const term = text.toLowerCase();
    return produit.libelle.toLowerCase().includes(term)
      || pipe.transform(produit.marque).includes(term)
      || pipe.transform(produit.ref).includes(term);
  });
}
@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})

export class ProduitsComponent {
  products;
  filter = new FormControl('');

  constructor(pipe: DecimalPipe,private produitService:ProduitService) {
    this.produitService.findAll().subscribe(data=>{
  this.products = <Produit[]> data;
      },error => {
      console.log(error);

    });
    this.products = this.filter.valueChanges.pipe(
      startWith(''),
      map(text => search(text, pipe))
    );
  }
}
