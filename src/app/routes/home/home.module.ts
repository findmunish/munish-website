import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { RouterModule, Routes } from "@angular/router";

import { HomeComponent } from "./home/home.component";
import { HeaderModule } from "../../views/header/header.module";
import { CustomerReviewsModule} from "../../views/customer-reviews/customer-reviews.module";
import { ParallaxModule } from "../../views/parallax/parallax.module";
import { CarouselModule } from "../../views/carousel/carousel.module";
import { FooterModule } from "../../views/footer/footer.module";

const routes: Routes = [{ path: "", component: HomeComponent }];

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    CustomerReviewsModule,
    ParallaxModule,
    CarouselModule,
    FooterModule,
    RouterModule.forChild(routes)
  ],
  declarations: [HomeComponent]
})
export class HomeModule {}