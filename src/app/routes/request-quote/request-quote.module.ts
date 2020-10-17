import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { RequestQuoteComponent } from './request-quote/request-quote.component';
import { FooterModule } from "../../views/footer/footer.module";

const routes: Routes = [
  { path: '', component: RequestQuoteComponent}
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FooterModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RequestQuoteComponent]
})

export class RequestQuoteModule { }