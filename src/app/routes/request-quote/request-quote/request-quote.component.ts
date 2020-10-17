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
  requestQuoteForm: FormGroup;
  createFormGroup(): FormGroup {
    let fieldNamesObj: any = {};
    for (let i = 0; i < this.fields.length; i++) {
      let key = this.fields[i].name;
      let value: any = [];
      value.push(this.fields[i].value);
      value.push(this.fields[i].validation);
      fieldNamesObj[key] = value;
    }
    return this.formBuilder.group(fieldNamesObj);
  }
  jsonData: any = data;
  constructor(
    private formBuilder: FormBuilder,
    private datePipe: DatePipe,
    private router: Router
  ) {}
  getGroupControl(index) {
    return this.requestQuoteForm.get(this.fields[index].name);
  }
  ngOnInit() {
    this.requestQuoteForm = this.createFormGroup(); // this.formBuilder.group(this.createFormGroup());
  }
  onSubmitRequestQuote() {
    let requestFormData = Object.assign({}, this.requestQuoteForm.value);
    this.requestQuoteForm.reset();
    console.log("requestFormData: ", JSON.stringify(requestFormData));
    requestFormData.timeStamp = this.datePipe.transform(
      new Date(),
      "dd/MM/yyyy HH:mm:ss"
    );
    requestFormData.id = Math.random()
      .toString(36)
      .substr(2, 7); // uuid.v4();
    // sendEmailToCustomer(this.jsonData, requestFormData);
    // sendEmailToTeam(this.jsonData, requestFormData);
  }
}
