import { Component, OnInit, Input } from '@angular/core';

import { textObjInterface } from "../../../data-store/cardComponentInterface";

@Component({
  selector: 'app-ques-ans',
  templateUrl: './ques-ans.component.html',
  styleUrls: ['./ques-ans.component.css']
})
export class QuesAnsComponent implements OnInit {
  @Input() quesIndex;
  @Input() quesAnsList: textObjInterface;
  getQuestionId() {return `question-${this.quesIndex}`;}
  getCollapseId() {return `collapse-${this.quesIndex}`;}
  getDataTargetId() {return `#${this.getCollapseId()}`;}
  constructor() { }

  ngOnInit() {  }
}