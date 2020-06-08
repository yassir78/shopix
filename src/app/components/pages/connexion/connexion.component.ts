import {Component, OnInit, Inject, OnDestroy} from '@angular/core';
import {DOCUMENT} from "@angular/common";
import {UserService} from "../../../services/user.service";
import {User} from "../../../models/user";
import { Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-connexion',
  templateUrl: './connexion.component.html',
  styleUrls: ['./connexion.component.scss']
})
export class ConnexionComponent implements OnInit,OnDestroy {
 public user:User = new User();
 public error:string;
  constructor(@Inject(DOCUMENT) private _document,private userService:UserService,private router:Router,private cookieService:CookieService) { }

  ngOnInit(): void {
    this._document.body.style.background = '#f9f9f9';
  }
  ngOnDestroy() {
    this._document.body.style.background = '#f9f9f9';
  }
  public credential;

  onSubmit(value: any) {
console.log("================================================");
console.log("le user ");
console.log(this.user);
    console.log("================================================");
   this.userService.findByPasswordAndEmail(this.user).subscribe(data=>{
     console.log(data);
     if(data){
       this.error = "";
        this.credential  = data;
        if(!this.cookieService.get("email") && !this.cookieService.get("password")){
          this.cookieService.set("email",this.credential.email);
          this.cookieService.set("password",this.credential.password);
        }
       this.router.navigate(["/accueil/commande"]);
     }else{
        this.error="email ou mot de passe invalide"
     }

   },error => {
     console.log(error);
   })

  }
}
