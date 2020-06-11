import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';

import { AdminRoutingModule } from './admin-routing.module';
import { LayoutComponent } from './layout/layout.component';
import { TopNavComponent } from './layout/top-nav/top-nav.component';
import { SideNavComponent } from './layout/side-nav/side-nav.component';
import { ProduitsComponent } from './produits/produits.component';
import { CommandesComponent } from './commandes/commandes.component';
import { FournisseursComponent } from './fournisseurs/fournisseurs.component';
import { ClientsComponent } from './clients/clients.component';
import { PayementsComponent } from './payements/payements.component';
import { PromotionsComponent } from './promotions/promotions.component';

@NgModule({
  imports: [
    CommonModule,
    AdminRoutingModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatInputModule,
    MatMenuModule,
    MatListModule
  ],
  declarations: [LayoutComponent, TopNavComponent, SideNavComponent, ProduitsComponent, CommandesComponent, FournisseursComponent, ClientsComponent, PayementsComponent, PromotionsComponent]
})
export class AdminModule {}
