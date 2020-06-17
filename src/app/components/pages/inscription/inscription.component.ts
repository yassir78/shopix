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

  constructor(private userService:UserService,private router:Router) {
    this.message="";
    this.enable1=false;
  }

  public user:User = new User();
  public messageErreur:string = "";
  public enable:boolean = false;
  public enable1:boolean=false;
  public message:string="";
  ngOnInit(): void {

  }
  onSubmit(value:any){
     console.log(this.user);
    if(this.user.password != this.user.cpassword){
      this.messageErreur ="les mots de passe sont differents";
    }
    console.log("hello world");
    if(this.user.nom && this.user.prenom && this.user.adresse && this.user.email && this.user.tel && this.user.password && this.user.cpassword && (this.user.password == this.user.cpassword))
    {
       let user1:User=new User();
       user1.email = this.user.email;
       user1.password = this.user.password;
       this.user.userRole = 'USER';
      this.userService.findByPasswordAndEmail(user1).subscribe(
        data=>{
            this.userService.saveUser(this.user).subscribe(data =>{
              console.log('user created');
              this.router.navigate(["/accueil/connexion"]);
            },error => {
              console.log('error');
            });

        },error => {
          this.enable1=true;
          this.message="utilisateur existe deja";
             console.log('user is already created');
        }
      )

    }




  }
}
