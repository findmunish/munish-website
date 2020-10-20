import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { textObjInterface } from "../../../data-store/cardComponentInterface";

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.css']
})
export class AboutUsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  bannerObj: textObjInterface = {
    headerText: "ABOUT US",
    bodyText: "",
    fontColor: "",
    fontSize: ""
  };
  getImageLink() {
    return 'https://fantastic-windows.netlify.app/assets/images/banner1.png';
  }
}