import {Component, OnInit} from '@angular/core';
import { CommandeService } from 'src/app/services/commande.service';
import {Commande} from "../../models/commande";
import {MatDialogConfig, MatDialog} from "@angular/material/dialog";
import {CommandeEditComponent} from "../commande-edit/commande-edit.component";


@Component({
  selector: 'app-commandes',
  templateUrl: './commandes.component.html',
  styleUrls: ['./commandes.component.scss']
})
export class CommandesComponent implements OnInit {
 public commandes: Array<Commande>;
 public selectedCommande: Commande = new Commande();
  constructor( private dialog: MatDialog,private commandeService:CommandeService) {


  }

  ngOnInit(): void {
    this.commandeService.findAll().subscribe(data=>{
      this.commandes = <Array<Commande>>data ;
      console.log("********commandes data....");
      console.log(data);
    }, error => {
      console.log(error)
    });
  }




 editCommandeRequest(commande:Commande) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.autoFocus = true;
    dialogConfig.disableClose = true;
    dialogConfig.width = "40vw";
    dialogConfig.data = { commande };
    this.dialog
      .open(CommandeEditComponent, dialogConfig)
      .afterClosed()
      .subscribe(res => {
        //this.updateGrandTotal();
        console.log("edit....");

        this.commandeService.findAll().subscribe(data=>{
          this.commandes = <Array<Commande>>data ;
          console.log(data);
        }, error => {
          console.log(error)
        });
      });
  }




  delete(commande:Commande){
   this.selectedCommande = commande;
    this.commandeService.deleteCommande(this.selectedCommande.id).subscribe(data => {
      let itemIndex = this.commandes.findIndex(item => item.id == this.selectedCommande.id);
      if(itemIndex !== -1){
        this.commandes.splice(itemIndex, 1);
      }
    },err => {
      console.log(err);
    });
  }


}
