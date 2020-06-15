import {Component, OnInit, PipeTransform} from '@angular/core';
import {DecimalPipe} from '@angular/common';
import {FormControl} from '@angular/forms';

import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import {Produit} from "../../models/produit";
import {ProduitService} from "../../services/produit.service";
import {MatDialog} from "@angular/material/dialog";
import {UpdateClientDialogComponent} from "../../dialogs/update-client-dialog/update-client-dialog.component";
import {AddClientDialogComponent} from "../../dialogs/add-client-dialog/add-client-dialog.component";


let produits: Produit[]=[];

function search(text: string): Produit[] {
  return produits.filter(produit => {
    const term = text.toLowerCase();
    return produit.libelle.toLowerCase().includes(term);
  });
}

@Component({
  selector: 'app-produits',
  templateUrl: './produits.component.html',
  styleUrls: ['./produits.component.scss']
})

export class ProduitsComponent {

  produits$: Observable<Produit[]>;
  filter = new FormControl('');
  addedProduct:Produit=new Produit();
  constructor(pipe: DecimalPipe, private produitService: ProduitService,public dialog: MatDialog) {
    this.produitService.findAll().subscribe(data => {
      produits = <Produit[]>data;
      this.produits$ = this.filter.valueChanges.pipe(
        startWith(''),
        map(text => search(text))
      );
    }, error => {
      console.log(error);
    });

   }

  delete(prod: Produit) {
    this.produitService.deleteById(prod).subscribe(data=>{
      console.log('product was deleted');
      let i  = produits.indexOf(prod);
      produits.splice(i,1);
      this.produits$ = this.filter.valueChanges.pipe(
        startWith(''),
        map(text => search(text))
      );

    },error => {
      console.log(error);
    })
  };

  openDialog(prod: Produit){
    const dialogRef = this.dialog.open(UpdateClientDialogComponent,{
      data: {prod}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
    });
  };

  openDialogAdd() {
    const dialogRef1 = this.dialog.open(AddClientDialogComponent,{
      height: '60vh',
      width: '60vw',
    });

    dialogRef1.afterClosed().subscribe(result => {
      this.produitService.findAll().subscribe(data => {
        produits = <Produit[]>data;
        this.produits$ = this.filter.valueChanges.pipe(
          startWith(''),
          map(text => search(text))
        );
      }, error => {
        console.log(error);
      });
    });
  }
}
