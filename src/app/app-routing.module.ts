import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainComponent} from "./components/main/main.component";


const routes: Routes = [
 {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)

  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'accueil',
  },

  {
    path:'accueil',
    component: MainComponent,
    children:[{
      path:'',
      loadChildren:()=>import('./components/boutique/boutique.module').then(t=>t.BoutiqueModule)
    },
      {
        path: 'boutique',
        loadChildren: () => import('./components/boutique/boutique.module').then(t => t.BoutiqueModule)
      },
      {
        path: 'contact',
        loadChildren: () => import('./components/boutique/boutique.module').then(t => t.BoutiqueModule)
      },
      {
        path: 'a-propos',
        loadChildren: () => import('./components/boutique/boutique.module').then(t => t.BoutiqueModule)
      },
      {
        path:'panier',
        loadChildren: () => import('./components/boutique/boutique.module').then(t => t.BoutiqueModule)
      },
      {
        path:'connexion',
        loadChildren: () => import('./components/boutique/boutique.module').then(t => t.BoutiqueModule)
      },
      {
        path:'inscription',
        loadChildren: () => import('./components/boutique/boutique.module').then(t => t.BoutiqueModule)
      },
      {
        path:'commande',
        loadChildren: () => import('./components/boutique/boutique.module').then(t => t.BoutiqueModule)
      },
      {
        path:'commandeInfo',
        loadChildren: () => import('./components/boutique/boutique.module').then(t => t.BoutiqueModule)
      }

    ]
  }];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
