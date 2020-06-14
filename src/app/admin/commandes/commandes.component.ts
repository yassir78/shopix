import {Component, OnInit} from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';




@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit {
 public commandes;


  constructor(private commandeService:CommandeService) {


  }

  ngOnInit(): void {
    this.commandeService.findAll().subscribe(data=>{
      this.commandes = data as [] ;
      console.log("olllllllll");
      console.log(data);
    }, error => {
      console.log(error)
    });
  }


}
