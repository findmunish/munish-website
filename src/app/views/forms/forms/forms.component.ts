import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormGroup, FormBuilder } from "@angular/forms";
import { DatePipe } from "@angular/common";

@Component({
  selector: "app-forms",
  templateUrl: "./forms.component.html",
  styleUrls: ["./forms.component.css"]
})
export class FormsComponent implements OnInit {
  @Input() fields;
  @Output() formsData = new EventEmitter();
  inputDataForm: FormGroup;
  constructor(private formBuilder: FormBuilder, private dataPipe: DatePipe) {}
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
  getGroupControl(index) {
    return this.inputDataForm.get(this.fields[index].name);
  }
  ngOnInit() {
    this.inputDataForm = this.createFormGroup(); // this.formBuilder.group(this.createFormGroup());
  }
  onSubmitForm() {
    let inputData = Object.assign({}, this.inputDataForm.value);
    this.inputDataForm.reset();
    console.log("contactUsFormData: ", JSON.stringify(inputData));
    inputData.timeStamp = this.dataPipe.transform(
      new Date(),
      "dd/MM/yyyy HH:mm:ss"
    );
    inputData.trackingId = Math.random()
      .toString(36)
      .substr(2, 7); // uuid.v4();
    this.formsData.emit(inputData);
  }
}
