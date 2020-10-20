import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { textObjInterface } from "../../../data-store/cardComponentInterface";

@Component({
  selector: 'app-request-cost-calculation',
  templateUrl: './request-cost-calculation.component.html',
  styleUrls: ['./request-cost-calculation.component.css']
})
export class RequestCostCalculationComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  bannerObj: textObjInterface = {
    headerText: "REQUEST COST CALCULATION",
    bodyText: "It specializes in design, manufacture, installation and service of precision-engineered, 100% customized UPVC and System Aluminium Windows and Doors",
    fontColor: "",
    fontSize: ""
  };
  getImageLink() {
}