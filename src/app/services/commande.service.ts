import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Commande} from "../models/commande";
import {User} from "../models/user";
import {PanierItem} from "../models/panier-item";
import {Observable} from "rxjs";
let commande  = JSON.parse(localStorage.getItem("commande")) || [];
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
     commande.user = user;
      console.log('ecccccccccccccccc');
      console.log(commande);
     if(!localStorage.getItem("commande")){
       localStorage.setItem("commande",JSON.stringify(commande));
     }

     return this.http.post(`http://localhost:7600/shopix-api/commandes/email/${user.email}/password/${user.password}`,commande,httpOptions);
  };

  getCommandeFromLocalStorage(){
    let command1:Commande = JSON.parse(localStorage.getItem("commande"));
    return command1;
  }



deleteCommande(id){
  return this.http.delete("http://localhost:7600/shopix-api/commandes/id/"+id);

}


updateCommande(commande){
 const httpOptions = {
       headers: new HttpHeaders({
         'Content-Type':  'application/json'
       })};

  return this.http.put("http://localhost:7600/shopix-api/commandes/id/"+commande.id,commande,httpOptions);

}


  findAll(){
    return this.http.get("http://localhost:7600/shopix-api/commandes/");

  }
  nbrCommandes(){
    return this.http.get("http://localhost:7600/shopix-api/commandes/nbrCommandes");
  }
  findByEtat(etat:string){
    return this.http.get(`http://localhost:7600/shopix-api/commandes/etat/${etat}`);
  }


}
