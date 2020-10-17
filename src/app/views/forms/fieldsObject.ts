import { Validators } from "@angular/forms";
import { fieldsInterface } from "./fieldsInterface";

function getValidationObject(valType: string) {
  if (valType.trim().toLowerCase() === "email") {
    return [
      Validators.required,
      Validators.email,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ];
  } else if (valType.trim().toLowerCase() === "phone") {
    return [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(10),
      Validators.maxLength(10)
    ];
  } else if (valType.trim().toLowerCase() === "checkbox") {
    return Validators.requiredTrue;
  } else {
    return Validators.required;
  }
}
export function getFieldObject(
  caption: string,
  id: string,
  name: string,
  value: any,
  dataType: string,
  placeholder: string,
  errorMsg: string,
  valType: string
) {
  return {
    caption: caption,
    id: id,
    name: name,
    value: value,
    dataType: dataType,
    placeholder: placeholder,
    errorMsg: errorMsg,
    validation: getValidationObject(valType)
  };
}
/*export const REQUEST_QUOTE_OBJECT: fieldsInterface[] = [
  getFieldObject(
    "First Name",
    "first-name",
    "firstName",
    "",
    "text",
    "",
    "",
    "firstName"
  ),
  getFieldObject(
    "Last Name",
    "last-name",
    "lastName",
    "",
    "text",
    "",
    "",
    "lastName"
  ),
  getFieldObject(
    "Country",
    "country",
    "country",
    "INDIA",
    "text",
    "",
    "",
    "country"
  ),
  getFieldObject("City", "city", "city", "Jammu", "text", "", "", "city"),
  getFieldObject(
    "State",
    "state",
    "state",
    "Jammu & Kashmir",
    "text",
    "",
    "",
    "state"
  ),
  getFieldObject("State", "state", "state", "", "text", "", "", "state"),
  getFieldObject(
    "Address",
    "address",
    "address",
    "",
    "text",
    "",
    "",
    "address"
  ),
  getFieldObject("E-mail", "email", "email", "", "text", "", "", "email"),
  getFieldObject("Phone", "phone", "phone", "", "text", "", "", "phone"),
  getFieldObject(
    "I AGREE THAT MY SUBMITTED DATA IS BEING COLLECTED AND STORED.",
    "consent",
    "consent",
    false,
    "checkbox",
    "",
    "",
    "checkbox"
  )
];

export const CONTACT_US_OBJECT: fieldsInterface[] = [
  getFieldObject(
    "",
    "name",
    "name",
    "",
    "text",
    "Your Name....",
    "Name is required....",
    "name"
  ),
  getFieldObject(
    "",
    "email",
    "email",
    "",
    "text",
    "Your email....",
    "E-Mail is required....",
    "email"
  ),
  getFieldObject(
    "",
    "phone",
    "phone",
    "",
    "text",
    "Your phone....",
    "Phone is required....",
    "phone"
  ),
  getFieldObject(
    "",
    "message",
    "message",
    "",
    "textarea",
    "Your message....",
    "No message is entered....",
    "message"
  )
];*/
