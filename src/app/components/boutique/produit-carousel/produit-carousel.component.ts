import {AfterViewInit, Component, OnInit} from '@angular/core';
import {SwiperConfigInterface, SwiperPaginationInterface} from "ngx-swiper-wrapper";
import {ProduitService} from "../../../services/produit.service";

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
  public _embedded;
  constructor(private produitService:ProduitService) { }

  ngOnInit(): void {
      this.produitService.getNomProduits().subscribe(
        data=>{
          this.produits = data;
          this._embedded = this.produits._embedded;
          this.produits = this._embedded;



        },error => {
          console.log('error');

        }
      )


  }


  ngAfterViewInit(): void {
    console.log("View+++");
    this.config = {
      slidesPerView: 1,
      spaceBetween: 0,
      keyboard: true,
      navigation: true,
      pagination: this.pagination,
      grabCursor: true,
      loop: false,
      preloadImages: false,
      lazy: true,
      autoplay: {
        delay: 6000,
        disableOnInteraction: false
      },
      speed: 500,
      effect: "slide"
    }
  }
}
