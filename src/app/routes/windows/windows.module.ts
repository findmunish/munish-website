import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WindowsComponent } from './windows/windows.component';
import { HeaderModule } from "../../views/header/header.module";
import { ImageTextSwapModule } from "../../views/image-text-swap/image-text-swap.module";
import { FooterModule } from "../../views/footer/footer.module";

const routes: Routes = [
  { path: '', component: WindowsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    HeaderModule,
    ImageTextSwapModule,
    FooterModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WindowsComponent]
})

export class WindowsModule { }