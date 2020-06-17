import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout/layout.component';
import { childRoutes } from './child-routes';
import {LoginComponent} from "./login/login.component";

import {AdminGuard} from "../guards/admin.guard";


const routes: Routes = [
  {
    path:'',
    component:LoginComponent
  },
  {
    path:'login',
    component:LoginComponent
  },

  {
    path: 'home',
    component: LayoutComponent,
    canActivate:[AdminGuard],
    data:{roles:['ADMIN']},
    children: [
      {
        path: '',
        redirectTo: 'dashboard'
      },
      ...childRoutes
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule {}
