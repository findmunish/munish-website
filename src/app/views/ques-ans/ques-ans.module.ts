import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuesAnsComponent } from './ques-ans/ques-ans.component';

@NgModule({
  imports: [CommonModule],
  exports: [QuesAnsComponent],
  declarations: [QuesAnsComponent]
})
export class QuesAnsModule { }