import { Component, OnInit } from '@angular/core';
import { CAROUSEL_DATA } from "../carouselData"

@Component({
  selector: 'app-carousel',
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.css']
})
export class CarouselComponent implements OnInit {
  carouselItems: any = CAROUSEL_DATA;
  constructor() { }

  ngOnInit() {
  }

}