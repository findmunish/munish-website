import { Validators } from "@angular/forms";
import { requestQuoteInterface } from "./requestQuoteInterface";
function getValidationObject(valType) {
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
function getFieldObject(
  caption,
  id,
  name,
  value,
  dataType,
  placeholder,
  errorMsg,
  valType
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
/*function getEmailObject(caption, id, name, value, dataType, errorMsg, placeholder) {
  return {
    caption: caption,
    id: id,
    name: name,
    value: value,
    dataType: dataType,
    errorMsg: errorMsg,
    placeholder: placeholder,
    validation: [
      Validators.required,
      Validators.email,
      Validators.pattern("^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$")
    ]
  }
}
function getPhoneObject(caption, id, name, value, dataType, errorMsg, placeholder) {
  return {
    caption: caption,
    id: id,
    name: name,
    value: value,
    dataType: dataType,
    errorMsg: errorMsg,
    placeholder: placeholder,
    validation: [
      Validators.required,
      Validators.pattern("^[0-9]*$"),
      Validators.minLength(10),
      Validators.maxLength(10)
    ]
  }
}*/
export const REQUEST_QUOTE_OBJECT: requestQuoteInterface[] = [
  /*{
    caption: "First Name",
    id: "first-name",
    name: "firstName",
    value: "",
    dataType: "text",
    placeholder: "",
    errorMsg: "",
    validation: Validators.required
  },
  {
    caption: "Last Name",
    id: "last-name",
    name: "lastName",
    value: "",
    dataType: "text",
    placeholder: "",
    errorMsg: "",
    validation: Validators.required
  },
  {
    caption: "Country",
    id: "country",
    name: "country",
    value: "INDIA",
    dataType: "text",
    placeholder: "",
    errorMsg: "",
    validation: Validators.required
  },
  {
    caption: "City",
    id: "city",
    name: "city",
    value: "Jammu",
    dataType: "text",
    placeholder: "",
    errorMsg: "",
    validation: Validators.required
  },
  {
    caption: "State",
    id: "state",
    name: "state",
    value: "Jammu & Kashmir",
    dataType: "text",
    placeholder: "",
    errorMsg: "",
    validation: Validators.required
  },
  {
    caption: "Address",
    id: "address",
    name: "address",
    value: "",
    dataType: "text",
    placeholder: "",
    errorMsg: "",
    validation: Validators.required
  },*/
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
  // getEmailObject("E-mail", "email", "email", "", "text", "", ""),
  // getPhoneObject("Phone", "phone", "phone", "", "text", "", ""),
  /*{
    caption: "I AGREE THAT MY SUBMITTED DATA IS BEING COLLECTED AND STORED.",
    id: "consent",
    name: "consent",
    value: false,
    dataType: "checkbox",
    placeholder: "",
    errorMsg: "",
    validation: Validators.requiredTrue
  }*/
];

export const CONTACT_US_OBJECT: requestQuoteInterface[] = [
  /*{
    caption: "",
    id: "name",
    name: "name",
    value: "",
    dataType: "text",
    placeholder: "Your Name....",
    errorMsg: "Name is required....",
    validation: Validators.required
  },*/
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
  // getEmailObject("E-mail", "email", "email", "", "text", "", ""),
  // getPhoneObject("Phone", "phone", "phone", "", "text", "", ""),
  /*{
    caption: "",
    id: "message",
    name: "message",
    value: "",
    dataType: "textarea",
    placeholder: "Your Message....",
    errorMsg: "No message is entered....",
    validation: Validators.required
  }*/
];
