import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { REVIEW_CONTENT } from "../../../views/customer-reviews/review-content";
import { textObjInterface } from "../../../data-store/cardComponentInterface";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit() { }
  bannerObj: textObjInterface = {
    headerText: "Fantastic Windows & Doors Fenestration",
    bodyText: "It specializes in design, manufacture, installation and service of precision-engineered, 100% customized UPVC and System Aluminium Windows and Doors",
    fontColor: "",
    fontSize: ""
  };
  getReviewContent(index) {
    return REVIEW_CONTENT[index];
  }
  getImageLink() {
    return 'https://fantastic-windows.netlify.app/assets/images/banner1.png';
  }
}