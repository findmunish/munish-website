import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';

import { ContactUsComponent } from './contact-us/contact-us.component';
import { FooterModule } from "../../views/footer/footer.module";
import { FormsModule } from "../../views/forms/forms.module";

const routes: Routes = [
  { path: '', component: ContactUsComponent}
]

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FooterModule,
    FormsModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ContactUsComponent]
})

export class ContactUsModule { }
