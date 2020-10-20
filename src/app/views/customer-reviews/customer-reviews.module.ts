import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomerReviewsComponent } from './customer-reviews/customer-reviews.component';

@NgModule({
  imports: [CommonModule],
  exports: [CustomerReviewsComponent],
  declarations: [CustomerReviewsComponent]
})
export class CustomerReviewsModule { }