import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { REVIEW_CONTENT } from "../../../views/customer-reviews/review-content";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  constructor(private router: Router) { }
  ngOnInit(){
  }

  getReviewContent(index) {
    return REVIEW_CONTENT[index];
  }
}