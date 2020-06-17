import {Component, Inject, OnInit} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import {NgForm} from "@angular/forms";
import {CommandeService} from "../../services/commande.service";

@Component({
  selector: 'app-commande-edit',
  templateUrl: './commande-edit.component.html',
  styleUrls: ['./commande-edit.component.scss']
})
export class CommandeEditComponent implements OnInit {
   status = "En cours";
  constructor( @Inject(MAT_DIALOG_DATA) public data,
    public dialogRef: MatDialogRef<CommandeEditComponent>,
    private commandeService: CommandeService
  ){}

  ngOnInit(): void {
  }


  onSubmit(form: NgForm) {

    this.data.commande.etatCommande = form.value.stat;
   // console.log(form.value);
    //console.log(this.data.commande);
    console.log(this.data.commande);
    this.commandeService.updateCommande(this.data.commande).subscribe(data=>{
      console.log('hey');
      console.log(data);
    }, err=>{
      console.log(err);
    });
      this.dialogRef.close();

  }


   close() {
    this.dialogRef.close();
  }

}
