import { Component, OnInit } from '@angular/core';
import {DomaineService} from "../../../services/domaine.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  opened = false;
  public domaines;
  constructor(private domaineService:DomaineService) {}
  ngOnInit(): void {
   this.domaineService.getNomDomaines().subscribe(
     data=>{
      this.domaines = data;
       console.log(data);

     },error => {
     console.log('error');

     }
   )

  }
}
