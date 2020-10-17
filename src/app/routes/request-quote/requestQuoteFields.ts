import { fieldsInterface } from "../../views/forms/fieldsInterface";
import { getFieldObject } from "../../views/forms/fieldsObject";
export const REQUEST_QUOTE_OBJECT: fieldsInterface[] = [
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
