import {Component, Inject, OnInit} from '@angular/core';
import {PanierService} from "../../../services/panier.service";
import {DOCUMENT} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit {
  public config = {

  }
  constructor(private panierService:PanierService, private router: Router) {
    console.log("constructor accueil");
   // this.document.window.reload();
   
  }

  ngOnInit() {

    console.log('init accueil');
  }

}
