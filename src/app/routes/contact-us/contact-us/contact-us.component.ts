import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CONTACT_US_OBJECT } from "../contactUsFields";

import {
  sendEmailToCustomer,
  sendEmailToTeam
} from "../../../emails/prepareEmail";
import data from "../../../data-store/params.json";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"]
})
export class ContactUsComponent implements OnInit {
  fields: any = CONTACT_US_OBJECT;
  getFieldsObject() {
    return this.fields;
  }
  constructor(private router: Router) {}
  ngOnInit() {}
  jsonData: any = data;
  setFormData(contactUsFormData) {
    sendEmailToTeam(this.jsonData, contactUsFormData, "contact-us");
    sendEmailToCustomer(this.jsonData, contactUsFormData, "contact-us");
  }
}
