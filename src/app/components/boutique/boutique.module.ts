import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccueilComponent} from './accueil/accueil.component';
import {BoutiqueRoutingModule} from "./boutique-routing.module";
import {ShopComponent} from "../shop/shop.component";
import {ContactComponent} from "../contact/contact.component";
import {AProposComponent} from "../a-propos/a-propos.component";

@NgModule({
  declarations: [AccueilComponent,
    ShopComponent,
    ContactComponent,
    AProposComponent
  ],
  imports: [
    CommonModule,
    BoutiqueRoutingModule
  ]
})
export class BoutiqueModule {
}
