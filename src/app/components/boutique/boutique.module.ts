import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AccueilComponent} from './accueil/accueil.component';
import {BoutiqueRoutingModule} from "./boutique-routing.module";
import {ShopComponent} from "../shop/shop.component";
import {ContactComponent} from "../contact/contact.component";
import {AProposComponent} from "../a-propos/a-propos.component";
import {MainCarouselComponent} from './main-carousel/main-carousel.component';
import {ProduitCarouselComponent} from './produit-carousel/produit-carousel.component';
import {SwiperModule} from "ngx-swiper-wrapper";
import {MatIconModule} from "@angular/material/icon";
import {MatCardModule} from "@angular/material/card";
import {PanierComponent} from "../pages/panier/panier.component";
import {MatChipsModule} from "@angular/material/chips";
import {MatButtonModule} from "@angular/material/button";
import {CommandeInfoComponent} from "../pages/commande-info/commande-info.component";
import {ProduitsComponent} from './produits/produits.component';
import {FormsModule} from "@angular/forms";
import {MatExpansionModule} from '@angular/material/expansion';
import {FlexLayoutModule} from '@angular/flex-layout';
import {SpinnerComponent} from "../spinner/spinner.component";

@NgModule({
  declarations: [AccueilComponent,
    ShopComponent,
    ContactComponent,
    AProposComponent,
    MainCarouselComponent,
    ProduitCarouselComponent,
    PanierComponent,
    CommandeInfoComponent,
    ProduitsComponent,
    SpinnerComponent,

  ],
  imports: [
    CommonModule,
    BoutiqueRoutingModule,
    SwiperModule,
    MatIconModule,
    MatCardModule,
    MatChipsModule,
    MatButtonModule,
    FormsModule,
    MatExpansionModule,
    FlexLayoutModule

  ]

})
export class BoutiqueModule {
}
