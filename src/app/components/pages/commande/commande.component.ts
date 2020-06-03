import { Component, OnInit } from '@angular/core';
import {PanierItem} from "../../../models/panier-item";
import {PanierService} from "../../../services/panier.service";
import {Observable, of} from "rxjs";

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {

  constructor(private panierService:PanierService) { }
  public panierItems:Observable<PanierItem[]>=of([]) ;
  public products : PanierItem[] = [];
  ngOnInit(): void {
    console.log("////////////////////////////////////////////");
   this.panierItems  = this.panierService.getPanierItems();
   this.panierItems.subscribe(data=>{
     this.products = data;
   });

  }
  calculTotal():number{
    return  this.panierService.calculTotal();
  }

}
