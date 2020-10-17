import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';

import { WindowsComponent } from './windows/windows.component';
import { FooterModule } from "../../views/footer/footer.module";

const routes: Routes = [
  { path: '', component: WindowsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    FooterModule,
    RouterModule.forChild(routes)
  ],
  declarations: [WindowsComponent]
})

export class WindowsModule { }