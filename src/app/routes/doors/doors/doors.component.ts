import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-doors',
  templateUrl: './doors.component.html',
  styleUrls: ['./doors.component.css']
})
export class DoorsComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  bannerObj: textObjInterface = {
    headerText: "PRODUCT - DOORS",
    bodyText: "",
    fontColor: "",
    fontSize: ""
  };
  getImageLink() {
    return 'https://fantastic-windows.netlify.app/assets/images/banner1.png';
  }
}