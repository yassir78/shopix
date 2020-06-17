import {Component, Inject, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {DOCUMENT} from "@angular/common";
import {User} from "../../models/user";
import {UserService} from "../../services/user.service";
import {CookieService} from "ngx-cookie-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user:User = new User();
  messageErreur:string;
  constructor(@Inject(DOCUMENT) private _document,private router: Router,private userService:UserService,private cookieService:CookieService) {}

  ngOnInit() {
    this._document.body.style.background="#e7dfd5";

  }
  onLogin() {

    this.messageErreur='';
    console.log(this.user);
    if(this.user.email && this.user.password){
     this.userService.findByPasswordAndEmail(this.user).subscribe(data=>{
       if(data){
         let user:User=new User();
         user =<User> data;
         if(user.userRole=='ADMIN'){

           this.cookieService.set("adminRole", user.userRole);

           this.router.navigate(['/admin/home']);
         }else{
           this.messageErreur = "Il s'agit d'un user";
         }
       }else{
         this.messageErreur = "Administrateur inexistant";
       }
     },error => {
       console.log(error);
     });
    }
  }
}
