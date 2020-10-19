import { Component, OnInit } from '@angular/core';
import { FormGroup , FormControl } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-request-cost-calculation',
  templateUrl: './request-cost-calculation.component.html',
  styleUrls: ['./request-cost-calculation.component.css']
})
export class RequestCostCalculationComponent implements OnInit {
  name = 'Dimension Slider';
  inputForm:FormGroup;
  constructor(){
    this.inputForm = new FormGroup({
        width : new FormControl('3000'),
        height : new FormControl('5000')
    });
  }
  ngOnInit() {
  }
}