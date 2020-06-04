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
  public messageErreur:string = "champ obligatoire";
  public enable:boolean = true;
  ngOnInit(): void {
  }
  onSubmit(value:any){
     this.enable=false;
    if(this.user.password != this.user.cpassword){
      this.messageErreur ="les mots de passe sont differents";
    }
    this.userService.saveUser(this.user).subscribe(data =>{
      console.log("saving the user worked");
    },error => {
      console.log("error");
    });

   this.router.navigate(["/accueil/connexion"]);

  }
}
