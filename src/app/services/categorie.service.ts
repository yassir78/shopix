import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CategorieService {

  constructor(private http: HttpClient) { }
 findAll(){
   return this.http.get(`http://localhost:7600//shopix-api/categories/`);
 }

}
