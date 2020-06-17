import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError} from "rxjs/operators";
import {User} from "../models/user";


@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }
  saveUser(user:User){
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })};
      return this.http.post("http://localhost:7600/shopix-api/users/",user,httpOptions);
  }
  findByPasswordAndEmail(user:User){
    return this.http.get(`http://localhost:7600/shopix-api/users/email/${user.email}`);
  }
  findByPasswordAndEmail1(user:User){
    return this.http.get(`http://localhost:7600/shopix-api/users/findby/${user.email}/pass/${user.password}`);
  }
}
