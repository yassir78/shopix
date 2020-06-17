import { NgModule } from '@angular/core';
import {CommonModule, DecimalPipe} from '@angular/common';
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
import {MatPaginatorModule} from "@angular/material/paginator";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {MatTableModule} from "@angular/material/table";
import {NgbPaginationModule, NgbTypeaheadModule} from "@ng-bootstrap/ng-bootstrap";
import {MaterialModule} from "../modules/material/material.module";
import { CommandeEditComponent } from './commande-edit/commande-edit.component';
import {MatDialogModule} from "@angular/material/dialog";
import {LoginComponent} from "./login/login.component";




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
    MatListModule,
    MatPaginatorModule,
    FormsModule,
    MatTableModule,
    NgbTypeaheadModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    MaterialModule,
    MatDialogModule
  ],
  declarations: [LayoutComponent, TopNavComponent, SideNavComponent, ProduitsComponent, CommandesComponent, FournisseursComponent, ClientsComponent, PayementsComponent, PromotionsComponent, CommandeEditComponent,   LoginComponent],
  providers: [DecimalPipe],
  entryComponents: [
    CommandeEditComponent
  ],


})
export class AdminModule {}
