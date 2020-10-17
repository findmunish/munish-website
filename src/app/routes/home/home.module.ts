import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { CarouselModule } from "../../views/carousel/carousel.module";
import { FooterModule } from "../../views/footer/footer.module";

const routes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    CarouselModule,
    FooterModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent]
})

export class HomeModule {}