import {ProduitsComponent} from "./produits/produits.component";
import {FournisseursComponent} from "./fournisseurs/fournisseurs.component";
import {CommandesComponent} from "./commandes/commandes.component";
import {PayementsComponent} from "./payements/payements.component";
import {ClientsComponent} from "./clients/clients.component";
import {PromotionsComponent} from "./promotions/promotions.component";

export const childRoutes = [
  {
    path: 'dashboard',
    loadChildren: () =>
      import('./dashboard/dashboard.module').then(m => m.DashboardModule),
      data: { icon: 'dashboard', text: 'Dashboard' }
  },
  {
    path: 'produits',
    component: ProduitsComponent ,
    data: { icon: 'bar_chart', text: 'Produits' }
  },
  {
    path: 'fournisseurs',
    component:FournisseursComponent ,
    data: { icon: 'table_chart', text: 'Fournisseurs' }
  },
  {
    path: 'commandes',
    component: CommandesComponent ,
    data: { icon: 'assignment', text: 'Commandes' }
  },
  {
    path: 'payements',
    component: PayementsComponent ,
    data: { icon: 'grid_on', text: 'Payements' }
  },
  {
    "path": 'clients',
    component: ClientsComponent ,
    "data": { "icon": 'code', "text": 'Clients' }
  },
  {
    path: 'promotions',
    component: PromotionsComponent ,
    data: { icon: 'perm_media', text: 'Promotions' }
  }

];
