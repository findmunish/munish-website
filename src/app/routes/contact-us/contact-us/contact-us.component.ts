import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { CONTACT_US_OBJECT } from "../contactUsFields";

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
  setFormData(contactUsFormData) {
    console.log(contactUsFormData);
  }
}
