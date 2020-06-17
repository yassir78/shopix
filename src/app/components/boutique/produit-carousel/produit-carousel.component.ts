import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SwiperConfigInterface, SwiperPaginationInterface} from "ngx-swiper-wrapper";
import {ProduitService} from "../../../services/produit.service";
import {Produit} from "../../../models/produit";
import {PanierService} from "../../../services/panier.service";

@Component({
  selector: 'app-produit-carousel',
  templateUrl: './produit-carousel.component.html',
  styleUrls: ['./produit-carousel.component.scss']
})
export class ProduitCarouselComponent implements OnInit,AfterViewInit {
  public config: SwiperConfigInterface = {};
  public pagination:SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true
  };
  public produits;
  spinner: boolean=true;
  constructor(private produitService:ProduitService,private panierService:PanierService) { }
  ngOnInit(): void {
    this.spinner = true;
      this.produitService.getNomProduits().subscribe(
        data=>{
          this.spinner = false;
          this.produits = data;
          console.log(data);
        },error => {
          console.log('error');
        }
      )
  }

  ngAfterViewInit(){
    this.config = {
      observer: true,
      slidesPerView: 5,
      spaceBetween: 16,
      keyboard: true,
      navigation: true,
      pagination: false,
      grabCursor: true,
      loop: true,
      preloadImages: false,
      lazy: true,
      breakpoints: {
        480: {
          slidesPerView: 1
        },
        740: {
          slidesPerView: 2,
        },
        960: {
          slidesPerView: 3,
        },
        1280: {
          slidesPerView: 4,
        },


      }
    }
  }

  addToPanier(product: Produit,qte:number=1) {

  this.panierService.addToPanier(product,qte);
  }

}
