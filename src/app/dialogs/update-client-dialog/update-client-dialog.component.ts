import {Component, Inject, Input, OnInit} from '@angular/core';
import {Produit} from "../../models/produit";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {ProduitService} from "../../services/produit.service";
import {element} from "protractor";

function clone(obj) {
  if (null == obj || "object" != typeof obj) return obj;
  let copy = obj.constructor();
  for (let attr in obj) {
    if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
  }
  return copy;
}

@Component({
  selector: 'app-update-client-dialog',
  templateUrl: './update-client-dialog.component.html',
  styleUrls: ['./update-client-dialog.component.scss']
})
export class UpdateClientDialogComponent implements OnInit {
  produit: Produit;
  copy: Produit = new Produit();
  messageError: string = "";

  constructor(public dialogRef: MatDialogRef<UpdateClientDialogComponent>,
              @Inject(MAT_DIALOG_DATA) public data, private produitService: ProduitService) {
  }

  ngOnInit(): void {
    // this.data.forEach(element=>{
    // this.copy.push(element);
    //})
    this.copy = clone(this.data.prod);
  }


  onNoClick(): void {
    this.messageError = '';
    let produit: Produit = this.data.prod;
    console.log(isNaN(produit.stock));
    if (isNaN(produit.stock) == false && isNaN(produit.prix) == false) {
      this.produitService.update(this.data.prod.id, produit).subscribe(data => {
        if (!data) {
          console.log('update failed');
          console.log(this.copy);
        } else {
          console.log('update successful');
          this.dialogRef.close();
        }
      }, error => {
        console.log(error);
      });
    } else {
      this.messageError = 'Erreur';
      this.data.prod = clone(this.copy);
    }
  }

}
