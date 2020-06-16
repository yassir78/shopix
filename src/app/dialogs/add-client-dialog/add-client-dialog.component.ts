import {Component, EventEmitter, Inject, OnInit} from '@angular/core';
import {Domaine} from "../../models/domaine";
import {DomaineService} from "../../services/domaine.service";
import {ProduitService} from "../../services/produit.service";
import {Produit} from "../../models/produit";
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {element} from "protractor";
import {CategorieService} from "../../services/categorie.service";
import {Categorie} from "../../models/categorie";

@Component({
  selector: 'app-add-client-dialog',
  templateUrl: './add-client-dialog.component.html',
  styleUrls: ['./add-client-dialog.component.scss']
})
export class AddClientDialogComponent implements OnInit {
  domaines: Categorie[];
  image: string;
  domaine: string;
  marque: string;
  libelle: string;
  description: string;
  ref: string;
  prix: number;
  stock: number;
  Error: string;

  constructor(public dialogRef: MatDialogRef<AddClientDialogComponent>,private categorieService:CategorieService, private produitService: ProduitService) {
  }

  ngOnInit(): void {
    this.categorieService.findAll().subscribe(data => {
      console.log('/////////////////////');
      console.log(data);
      this.domaines =<Categorie[]> data;
    }, error => {
      console.log(error);
    })
  }


  onFileSelected(event) {
    console.log();
    if (event.target.files[0].name != '') {
      this.image = event.target.files[0].name;
      document.getElementById("image").style.background = '#ffcac2';
    } else {
      document.getElementById("image").style.background = '#438a5e';
      this.image = '';
    }
  }

  submit() {
    this.Error = '';
    let produit: Produit = new Produit();
    produit.stock = this.stock;
    produit.ref= this.ref;
    produit.libelle = this.libelle;
    produit.prix = this.prix;
    produit.description = this.description;
    produit.image = `assets/images/${this.image}`;
    produit.marque = this.marque;
    if (this.libelle && isNaN(this.stock) == false && isNaN(this.prix) == false && this.description && this.marque && this.image) {
      this.domaines.forEach(element=>{
        if(element.nom == this.domaine){
          console.log('la categorie');
          console.log(element);
          produit.categorie = element;
          return;
        }
      });
      console.log(produit);
      this.produitService.findByLibelle(produit).subscribe(data => {
        if (data) {
          this.Error = 'produit existe deja';
        } else {
          this.produitService.save(produit).subscribe(data=>{
            if(data){
              console.log('product saved successfuly');
              this.dialogRef.close();
            }
            this.dialogRef.close();
          },error => {
            console.log("error");
          })
        }
      }, error => {
        console.log(error);
      });
    } else {
      this.Error = 'Remplissez tout les champs Et  veuillez à ce que les champs stock et prix soient des nombres';
    }
  }
}
