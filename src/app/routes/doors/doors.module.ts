import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { DoorsComponent } from './doors/doors.component';
import { FooterModule } from "../../views/footer/footer.module";

const routes: Routes = [
  { path: '', component: DoorsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    FooterModule,
    RouterModule.forChild(routes)
  ],
  declarations: [DoorsComponent]
})

export class DoorsModule { }