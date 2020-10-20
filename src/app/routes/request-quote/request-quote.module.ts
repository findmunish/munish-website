import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { RequestQuoteComponent } from './request-quote/request-quote.component';
import { HeaderModule } from "../../views/header/header.module";
import { BannerModule } from "../../views/banner/banner.module";
import { ParallaxModule } from "../../views/parallax/parallax.module";
import { FooterModule } from "../../views/footer/footer.module";
import { FormsModule } from "../../views/forms/forms.module";

const routes: Routes = [
  { path: '', component: RequestQuoteComponent}
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    HeaderModule,
    BannerModule,
    ParallaxModule,
    FooterModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [RequestQuoteComponent]
})
export class RequestQuoteModule { }