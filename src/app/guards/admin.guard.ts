import { Injectable } from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router} from '@angular/router';
import { Observable } from 'rxjs';
import {User} from "../models/user";
import {CookieService} from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {
  currentUser:User=new User();
  adminRole;
  constructor(private cookieService:CookieService, private router: Router) {
    this.adminRole = this.cookieService.get("adminRole");

  }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    if(this.adminRole ){
      if(next.data.roles && next.data.roles.indexOf(this.adminRole) ===-1){
        //page error non authorisé
        return false;
      }
      return true;
    }
    //page login
    console.log((this.router));
    this. router.navigate(["/admin/login"]);
    return false;
  }

}
