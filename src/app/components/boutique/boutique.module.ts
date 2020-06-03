import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccueilComponent} from './accueil/accueil.component';
import {BoutiqueRoutingModule} from "./boutique-routing.module";
import {ShopComponent} from "../shop/shop.component";
import {ContactComponent} from "../contact/contact.component";
import {AProposComponent} from "../a-propos/a-propos.component";
import { MainCarouselComponent } from './main-carousel/main-carousel.component';
import { ProduitCarouselComponent } from './produit-carousel/produit-carousel.component';
import {SwiperModule} from "ngx-swiper-wrapper";
import { SWIPER_CONFIG } from 'ngx-swiper-wrapper';
import { SwiperConfigInterface } from 'ngx-swiper-wrapper';
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {PanierComponent} from "../pages/panier/panier.component";
import {MatChipsModule} from "@angular/material/chips";
import {MatButtonModule} from "@angular/material/button";

@NgModule({
  declarations: [AccueilComponent,
    ShopComponent,
    ContactComponent,
    AProposComponent,
    MainCarouselComponent,
    ProduitCarouselComponent,
    PanierComponent

  ],
  imports: [
    CommonModule,
    BoutiqueRoutingModule,
    SwiperModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule
  ]
})
export class BoutiqueModule {
}
