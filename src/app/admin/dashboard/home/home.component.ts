import {Component, OnInit} from '@angular/core';
import {ProduitService} from "../../../services/produit.service";
import {CommandeService} from "../../../services/commande.service";
import {Chart} from "../../../../../node_modules/chart.js";

interface Place {
  imgSrc: string;
  name: string;
  description: string;
  charge: string;
  location: string;
}

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  places: Array<Place> = [];
  nbrProduits: number;
  nbrCommandes: number;
  nbrCommandeLivree;
  nbrCommandeEnCours;
  nbrCommandeSuspendue;

  constructor(private produitService: ProduitService, private commandeService: CommandeService) {
  }

  ngOnInit() {
    this.produitService.nbrProduit().subscribe(data => {
      this.nbrProduits = <number>data;
    }, error => {
      console.log(error);
    });
    this.commandeService.nbrCommandes().subscribe(data => {
      this.nbrCommandes = <number>data;
    }, error => {
      console.log(error);
    });
    this.commandeService.findByEtat('En cours').subscribe(data => {
      console.log(data);
      this.nbrCommandeEnCours = data;
    }, error => {
      console.log(error);
    });
    this.commandeService.findByEtat('Livree').subscribe(data => {
      console.log(data);
      this.nbrCommandeLivree = data;
    }, error => {
      console.log(error);
    });
    this.commandeService.findByEtat('Suspendue').subscribe(data => {
      this.nbrCommandeSuspendue =data;
      let myChart = new Chart("myChart", {
        type: 'pie',
        data: {
          labels: ['En cours', 'Livrée', 'Suspendue'],
          datasets: [{
            label: '# of Votes',
            data: [this.nbrCommandeEnCours, this.nbrCommandeLivree, this.nbrCommandeSuspendue],
            backgroundColor: [
              'rgba(255, 99, 132, 0.2)',
              'rgba(75, 192, 192, 0.2)',
              'rgba(153, 102, 255, 0.2)'
            ],

          }]
        },
        options: {}
      });

    }, error => {
      console.log(error);
    });


    this.places = [];
  }

}
