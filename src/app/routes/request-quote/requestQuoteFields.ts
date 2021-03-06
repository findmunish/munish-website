import { formFieldsInterface } from "../../data-store/formFieldsInterface";
import { getFieldObject } from "../../views/forms/fieldsObject";
export const REQUEST_QUOTE_OBJECT: formFieldsInterface[] = [
  getFieldObject(
    "First Name",
    "first-name",
    "firstName",
    "",
    "text",
    "",
    "First Name is required....",
    "firstName"
  ),
  getFieldObject(
    "Last Name",
    "last-name",
    "lastName",
    "",
    "text",
    "",
    "Last Name is required....",
    "lastName"
  ),
  getFieldObject(
    "Country",
    "country",
    "country",
    "INDIA",
    "text",
    "",
    "Country is required....",
    "country"
  ),
  getFieldObject(
    "City",
    "city",
    "city",
    "Jammu",
    "text",
    "",
    "City is required....",
    "city"
  ),
  getFieldObject(
    "State",
    "state",
    "state",
    "Jammu & Kashmir",
    "text",
    "",
    "State is required....",
    "state"
  ),
  getFieldObject(
    "Address",
    "address",
    "address",
    "",
    "text",
    "",
    "Address is required....",
    "address"
  ),
  getFieldObject(
    "E-mail",
    "email",
    "email",
    "",
    "text",
    "",
    "E-Mail id entered is invalid....",
    "email"
  ),
  getFieldObject(
    "Phone",
    "phone",
    "phone",
    "",
    "text",
    "",
    "Phone number entered is invalid....",
    "phone"
  ),
  getFieldObject(
    "I AGREE THAT MY SUBMITTED DATA IS BEING COLLECTED AND STORED.",
    "consent",
    "consent",
    false,
    "checkbox",
    "",
    "Please accept the disclaimer....",
    "checkbox"
  )
];