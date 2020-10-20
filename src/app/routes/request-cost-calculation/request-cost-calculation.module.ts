import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { RequestCostCalculationComponent } from './request-cost-calculation/request-cost-calculation.component';
import { HeaderModule } from "../../views/header/header.module";
import { FooterModule } from "../../views/footer/footer.module";
import { RangeDirective } from './range.directive';

const routes: Routes = [
  { path: '', component: RequestCostCalculationComponent}
]

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    ReactiveFormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RequestCostCalculationComponent, RangeDirective]
})
export class RequestCostCalculationModule { }