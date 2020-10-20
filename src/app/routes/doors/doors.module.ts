import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DoorsComponent } from './doors/doors.component';
import { HeaderModule } from "../../views/header/header.module";
import { BannerModule } from "../../views/banner/banner.module";
import { ParallaxModule } from "../../views/parallax/parallax.module";
import { FooterModule } from "../../views/footer/footer.module";

const routes: Routes = [
  { path: '', component: DoorsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    BannerModule,
    ParallaxModule,
    FooterModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DoorsComponent]
})

export class DoorsModule { }