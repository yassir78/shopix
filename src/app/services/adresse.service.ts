import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {User} from "../models/user";
import {Adresse} from "../models/adresse";

@Injectable({
  providedIn: 'root'
})
export class AdresseService {

  constructor(private http:HttpClient) { }
  addAdresse(user:User,adresse:Adresse){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
    return this.http.post(`http://localhost:7600/shopix-api/adresse/email/${user.email}/password/${user.password}`,adresse,httpOptions);



  }
}
