import { Component, OnInit } from "@angular/core";
// import { FormGroup, FormBuilder, Validators } from "@angular/forms";
// import { DatePipe } from "@angular/common";
import { Router } from "@angular/router";
import { CONTACT_US_OBJECT } from "../../../data-store/fieldsObject";

@Component({
  selector: "app-contact-us",
  templateUrl: "./contact-us.component.html",
  styleUrls: ["./contact-us.component.css"]
})
export class ContactUsComponent implements OnInit {
  fields: any = CONTACT_US_OBJECT;
  setFieldsObject() {
    return this.fields;
  }
  // contactUsForm: FormGroup;
  constructor(
    private router: Router,
    // private formBuilder: FormBuilder,
    // private dataPipe: DatePipe
  ) {}
  /*createFormGroup(): FormGroup {
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
  getGroupControl(index) {
    return this.contactUsForm.get(this.fields[index].name);
  }*/
  ngOnInit() {
    // this.contactUsForm = this.createFormGroup(); // this.formBuilder.group(this.createFormGroup());
  }
  /*onSubmitContactUsForm() {
    let contactUsData = Object.assign({}, this.contactUsForm.value);
    this.contactUsForm.reset();
    console.log("contactUsFormData: ", JSON.stringify(contactUsData));
    contactUsData.timeStamp = this.dataPipe.transform(
      new Date(),
      "dd/MM/yyyy HH:mm:ss"
    );
    contactUsData.id = Math.random()
      .toString(36)
      .substr(2, 7); // uuid.v4();
    // sendEmailToCustomer(this.jsonData, requestFormData);
    // sendEmailToTeam(this.jsonData, requestFormData);
  }*/
}
