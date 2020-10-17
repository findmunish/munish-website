import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { RequestCostCalculationComponent } from './request-cost-calculation/request-cost-calculation.component';
import { FooterModule } from "../../views/footer/footer.module";

const routes: Routes = [
  { path: '', component: RequestCostCalculationComponent}
]

@NgModule({
  imports: [
    CommonModule,
    FooterModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RequestCostCalculationComponent]
})

export class RequestCostCalculationModule { }