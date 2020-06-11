import {Component, Inject, OnDestroy, OnInit} from '@angular/core';
import {PanierService} from "../../../services/panier.service";
import {DOCUMENT} from "@angular/common";
import {Router} from "@angular/router";

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.scss']
})
export class AccueilComponent implements OnInit,OnDestroy {
  public config = {

  }
  constructor(@Inject(DOCUMENT) private _document,private panierService:PanierService, private router: Router) {
    console.log("constructor accueil");
   // this.document.window.reload();

  }
  ngOnInit(): void {
    this._document.body.style.background = '#f9f9f9';
  }
  ngOnDestroy() {
    this._document.body.style.background = '#f9f9f9';
  }



}
