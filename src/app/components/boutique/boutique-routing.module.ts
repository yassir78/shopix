import { NgModule } from '@angular/core';
import { RouterModule, Routes} from "@angular/router";
import {AccueilComponent} from "./accueil/accueil.component";
import {TestComponent} from "../shared/test/test.component";
import {ShopComponent} from "../shop/shop.component";
import {ContactComponent} from "../contact/contact.component";
import {A} from "@angular/cdk/keycodes";
import {AProposComponent} from "../a-propos/a-propos.component";



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
