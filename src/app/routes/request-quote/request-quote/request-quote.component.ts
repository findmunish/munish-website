import { Component, OnInit } from "@angular/core";
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { Router } from "@angular/router";
import { DatePipe } from "@angular/common";
import { REQUEST_QUOTE_OBJECT } from "../../../data-store/fieldsObject";
import {
  sendEmailToCustomer,
  sendEmailToTeam
} from "../../../emails/prepareEmail";
// import * as uuid from 'uuid';
import data from "../../../data-store/params.json";

@Component({
  selector: "app-request-quote",
  templateUrl: "./request-quote.component.html",
  styleUrls: ["./request-quote.component.css"]
})
export class RequestQuoteComponent implements OnInit {
  fields: any = REQUEST_QUOTE_OBJECT;
  getFieldsObject() {
    return this.fields;
  }
  // jsonData: any = data;
  constructor(private router: Router) {}
  ngOnInit() {}
  setFormData(requestFormData) {
    console.log(requestFormData);
  }
}
