import {Component, OnInit, Input, OnChanges, SimpleChanges} from '@angular/core';
import {DomaineService} from "../../../services/domaine.service";
import {PanierService} from "../../../services/panier.service";
import {PanierItem} from "../../../models/panier-item";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit,OnChanges {
   opened = false;
  public domaines;
  public panierItems:PanierItem[] = [];
  constructor(private domaineService:DomaineService,private panierService:PanierService ) {
    console.log("contructor header ");
    this.panierService.getPanierItems().subscribe(
      items => {
        this.panierItems = items;
}

      ,error => {
        console.log("error");
      }

    );


  }
  ngOnChanges(){
  console.log("onChanges");
  }
  ngOnInit(): void {
    console.log("init header ");
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
