import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Commande} from "../models/commande";
import {User} from "../models/user";

@Injectable({
  providedIn: 'root'
})
export class CommandeService {

  constructor(private http: HttpClient) {}

   save( user:User,commande:Commande){
     const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json'
       })};

     return this.http.post(`http://localhost:7600/shopix-api/commandes/email/${user.email}/password/${user.password}`,commande,httpOptions);
  }

}
