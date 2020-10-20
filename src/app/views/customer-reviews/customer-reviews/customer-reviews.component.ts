import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-customer-reviews',
  templateUrl: './customer-reviews.component.html',
  styleUrls: ['./customer-reviews.component.css']
})
export class CustomerReviewsComponent implements OnInit {
  @Input() reviewContent
  constructor() { }
  ngOnInit() {}
}