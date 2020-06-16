import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Domaine} from "../models/domaine";

@Injectable({
  providedIn: 'root'
})
export class DomaineService {
  constructor(private http: HttpClient) {
  }

  getNomDomaines() {
    return this.http.get<Array<Domaine>>("http://localhost:7600/domaines");
  }

  findAll() {
    return this.http.get<Array<Domaine>>(" http://localhost:7600/shopix-api/domaines/");
  }

}
