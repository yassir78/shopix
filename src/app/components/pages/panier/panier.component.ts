import { Component, OnInit } from '@angular/core';
import {PanierService} from "../../../services/panier.service";
import {PanierItem} from "../../../models/panier-item";
import {Produit} from "../../../models/produit";
import {CookieService} from "ngx-cookie-service";
import {Router} from "@angular/router";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";


@Component({
  selector: 'app-panier',
  templateUrl: './panier.component.html',
  styleUrls: ['./panier.component.scss']
})
export class PanierComponent implements OnInit {
  panierItems:PanierItem[]=[];
  total:number=0;
  user:User = new User();
  constructor(private panierService:PanierService,private cookieService:CookieService,private router:Router,private userService:UserService) {

  }
  lien:string;

  ngOnInit(): void {

    this.panierService.getPanierItems().subscribe(
       data =>{
         this.panierItems = data;
         console.log(this.panierItems);
       },error=>{
          console.log("error");
    }
    );
     this.total=this.panierService.calculTotal();

  }
  add(product:Produit,qte=1){
    this.panierService.updatePanier(product,qte);
    this.total=this.panierService.calculTotal();
  }
  remove(product:Produit,qte=-1){
    this.panierService.updatePanier(product,qte);
   this.total=this.panierService.calculTotal();
  }
  delete(item:PanierItem){
   this.panierService.delete(item);
    this.total=this.panierService.calculTotal();
  }

  checkUser() {
    let email,password;
    if(this.cookieService.get("email") && this.cookieService.get("password")){
      email = this.cookieService.get("email");
      password = this.cookieService.get("password");
      this.user.email = email;
      this.user.password = password;
      console.log(this.user);
      this.userService.findByPasswordAndEmail(this.user).subscribe(data=>{
        if(data){
          console.log('user found');
          this.router.navigate(['/accueil/commande']);
        }else{
          console.log(data);
          this.router.navigate(['/accueil/connexion']);
        }
      },error => {
        console.log(error);
        console.log('error within checkUser');
      });
    }else{
      console.log('cookies are empty');
      this.router.navigate(['/accueil/connexion']);
    }

  }
}
