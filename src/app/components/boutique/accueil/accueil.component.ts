import {Component, Inject, OnInit} from '@angular/core';
import {PanierService} from "../../../services/panier.service";
import {DOCUMENT} from "@angular/common";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  public config = {

  }
  constructor(private panierService:PanierService,@Inject(DOCUMENT) private document) {
    console.log("constructor accueil");
   // this.document.window.reload();

  }

  ngOnInit(): void {
    console.log('init accueil');
  }

}
