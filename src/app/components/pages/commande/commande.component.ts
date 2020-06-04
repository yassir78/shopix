import { Component, OnInit } from '@angular/core';
import {PanierItem} from "../../../models/panier-item";
import {PanierService} from "../../../services/panier.service";
import {Observable, of} from "rxjs";
import {User} from "../../../models/user";
import {CookieService} from "ngx-cookie-service";
import {UserService} from "../../../services/user.service";
import {AdresseService} from "../../../services/adresse.service";
import {Adresse} from "../../../models/adresse";
import {Commande} from "../../../models/commande";
import {CommandeItem} from "../../../models/commande-item";

@Component({
  selector: 'app-commande',
  templateUrl: './commande.component.html',
  styleUrls: ['./commande.component.scss']
})
export class CommandeComponent implements OnInit {
  public cb:boolean = false;
  public user:User = new User();
  public commande:Commande = new Commande();
  public userData;
  public adresse:Adresse = new Adresse();
  constructor(private panierService:PanierService,private cookieService:CookieService,private userService:UserService,private adresseService:AdresseService) { }
  public panierItems:Observable<PanierItem[]>=of([]) ;
  public products : PanierItem[] = [];
  ngOnInit(): void {

    let email,password;
    email = this.cookieService.get("email");
    password = this.cookieService.get("password");
    this.user.email = email;
    this.user.password = password;
    this.userService.findByPasswordAndEmail(this.user).subscribe(
      data=>{
        this.userData = data;
        this.user = this.userData;
      },error =>{
        console.log('error');
      }
    )


   this.panierItems  = this.panierService.getPanierItems();
   this.panierItems.subscribe(data=>{
     this.products = data;
   });

  }
  calculTotal():number{
    return  this.panierService.calculTotal();
  }

  onSubmit(value: any) {
    console.log("*********************");
    console.log(this.getCommande());
   this.adresseService.addAdresse(this.user,this.adresse).subscribe(
     data=>{
       console.log("the address was added successfuly");

     },error => {
       console.log("error");
     }
   );
   console.log(this.products);

  }


      getCommande(){
      this.commande.total = this.calculTotal();
      this.commande.user = this.user;
      this.products.forEach(panierItem=>{
        console.log(panierItem);
       let commandeItem:CommandeItem = new CommandeItem();
       commandeItem.produit = panierItem.product;
       commandeItem.qte = panierItem.qte;
       commandeItem.commande = this.commande;
      this.commande.commandeItems.push(commandeItem);

    })
        return this.commande;
  }

  onChecked(event) {
       if(event.target.value == "cb"){
         this.cb = true;
       }
       else{
         this.cb = false;
       }
  }
}
