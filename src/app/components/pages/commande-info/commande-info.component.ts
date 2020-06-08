import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as jsPDF from 'jspdf';
import {Commande} from "../../../models/commande";
import {CommandeService} from "../../../services/commande.service";
import {PanierService} from "../../../services/panier.service";
import {Router} from "@angular/router";
@Component({
  selector: 'app-commande-info',
  templateUrl: './commande-info.component.html',
  styleUrls: ['./commande-info.component.scss']
})
export class CommandeInfoComponent implements OnInit,AfterViewInit{
  public commande:Commande;
  public total:number;
  constructor(private commandeService:CommandeService,private panierService:PanierService,private router:Router) {
    console.log('constructor CommandeInfoComponent');
    this.commande = this.commandeService.getCommandeFromLocalStorage();
        console.log(this.commande);
  }
  ngAfterViewInit(){

  }
  ngOnInit(): void {
  }
  viderLocalStorage(){
  
    localStorage.clear();

 this.router.navigate(['/accueil/'])
  .then(() => {
    window.location.reload();
  });
  }


  @ViewChild('content') content:ElementRef;

  generatePdf() {
    console.log('generate PDF Method');
    let doc = new jsPDF();
    let specialElementHandlers = {
      '#editor':function (element,renderer) {
        return true;
      }
    }
      let content = this.content.nativeElement;
    doc.fromHTML(content.innerHTML,15,15,{
      'width':190,
      'elementHandlers':specialElementHandlers
    });
    doc.save('test.pdf');
  }
}

