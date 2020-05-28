import {Component, OnInit, Input, AfterViewInit} from '@angular/core';
import { SwiperConfigInterface, SwiperPaginationInterface } from 'ngx-swiper-wrapper';


@Component({
  selector: 'app-main-carousel',
  templateUrl: './main-carousel.component.html',
  styleUrls: ['./main-carousel.component.scss']
})
export class MainCarouselComponent implements OnInit,AfterViewInit {
public slides:Array<any> = [
  {title:'hello world',image:'assets/images/carousel1.png'},
  {title:'hello again', image:'assets/images/carousel2.jpg'},
  {title:'hello again again', image:'assets/images/carousel3.jpg'}
];
public config: SwiperConfigInterface = {};
public pagination:SwiperPaginationInterface = {
    el: '.swiper-pagination',
    clickable: true
  }
;

  constructor() { }

  ngOnInit(): void {
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
