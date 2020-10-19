import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { AboutUsComponent } from './about-us/about-us.component';
import { HeaderModule } from "../../views/header/header.module";
import { FooterModule } from "../../views/footer/footer.module";

const routes: Routes = [
  { path: '', component: AboutUsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    FooterModule,
    RouterModule.forChild(routes)
  ],
  declarations: [AboutUsComponent]
})

export class AboutUsModule { }
