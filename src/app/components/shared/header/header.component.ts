import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {DomaineService} from "../../../services/domaine.service";
import {PanierService} from "../../../services/panier.service";
import {PanierItem} from "../../../models/panier-item";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
   opened = false;
  public domaines;
  public panierItems:PanierItem[] = [];
  constructor(private domaineService:DomaineService,private panierService:PanierService ) {
    this.panierService.getPanierItems().subscribe(
      items => {
        console.log('this is getPanierItems');
        console.log(items);
        this.panierItems = items;
      console.log(this.panierItems);
        console.log(this.panierItems.length);}

      ,error => {
        console.log("error");
      }

    );


  }
  ngOnInit(): void {
   this.domaineService.getNomDomaines().subscribe(
     data=>{
      this.domaines = data;
       console.log(data);

     },error => {
     console.log('error');
     }
   )
  }



}
