import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { REQUEST_QUOTE_OBJECT } from "../requestQuoteFields";
import {sendEmailToCustomer, sendEmailToTeam} from "../../../emails/prepareEmail";
// import * as uuid from 'uuid';
import data from "../../../../../assets/json/params.json";
import { textObjInterface } from "../../../data-store/cardComponentInterface";

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
  jsonData: any = data;
  constructor(private router: Router) {}
  ngOnInit() {}
  setFormData(requestFormData) {
    sendEmailToTeam(this.jsonData, requestFormData, "request-quote");
    sendEmailToCustomer(this.jsonData, requestFormData, "request-quote");
  }
  bannerObj: textObjInterface = {
    headerText: "REQUEST A QUOTE",
    bodyText: "It specializes in design, manufacture, installation and service of precision-engineered, 100% customized UPVC and System Aluminium Windows and Doors",
    fontColor: "",
    fontSize: ""
  };
  getImageLink() {
    return 'https://fantastic-windows.netlify.app/assets/images/banner1.png';
  }
}