import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {AccueilComponent} from "./accueil/accueil.component";
import {TestComponent} from "../shared/test/test.component";
import {ShopComponent} from "../shop/shop.component";
import {ContactComponent} from "../contact/contact.component";
import {A} from "@angular/cdk/keycodes";
import {AProposComponent} from "../a-propos/a-propos.component";
import {PanierComponent} from "../pages/panier/panier.component";
import {ConnexionComponent} from "../pages/connexion/connexion.component";
import {InscriptionComponent} from "../pages/inscription/inscription.component";
import {CommandeComponent} from "../pages/commande/commande.component";
import {CommandeInfoComponent} from "../pages/commande-info/commande-info.component";



const routes:Routes = [
  {
    path:'',
    component:AccueilComponent
  },
  {
  path:'boutique',
  component:ShopComponent
},
  {
    path:'contact',
    component:ContactComponent
  },
  {
    path:'a-propos',
    component:AProposComponent
  },
  {
    path:'panier',
    component:PanierComponent
  },
  {
    path:'connexion',
    component:ConnexionComponent
  },
  {
    path:'inscription',
    component:InscriptionComponent
  },
  {
    path:'commande',
    component:CommandeComponent
  },
  {
    path:'commandeInfo',
    component:CommandeInfoComponent
  },
  {
    path:'boutique/:nom',
    component: ShopComponent
  }

]


@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports:[
    RouterModule
  ]
})
export class BoutiqueRoutingModule { }
