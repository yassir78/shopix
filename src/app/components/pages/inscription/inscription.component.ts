import { Component, OnInit } from '@angular/core';
import {User} from "../../../models/user";
import {UserService} from "../../../services/user.service";
import {Router} from "@angular/router";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.component.html',
  styleUrls: ['./inscription.component.scss']
})
export class InscriptionComponent implements OnInit {

  constructor(private userService:UserService,private router:Router) { }

  public user:User = new User();
  public messageErreur:string = "";
  public enable:boolean = false;
  ngOnInit(): void {
    this.user.status = "Acheteur";
  }
  onSubmit(value:any){
     console.log(this.user);
    if(this.user.password != this.user.cpassword){
      this.messageErreur ="les mots de passe sont differents";
    }
    if(this.user.nom && this.user.prenom && this.user.adresse && this.user.email && this.user.tel && this.user.password && this.user.cpassword && (this.user.password == this.user.cpassword))
    {
      this.userService.saveUser(this.user).subscribe(data =>{

        this.router.navigate(["/accueil/connexion"]);
      },error => {
        console.log("error");
      });
    }




  }
}
