import { formFieldsInterface } from "../../data-store/formFieldsInterface";
import { getFieldObject } from "../../views/forms/fieldsObject";
export const CONTACT_US_OBJECT: formFieldsInterface[] = [
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
    "E-Mail id entered is invalid....",
    "email"
  ),
  getFieldObject(
    "",
    "phone",
    "phone",
    "",
    "text",
    "Your phone....",
    "Phone number entered is invalid....",
    "phone"
  ),
  getFieldObject(
    "",
    "message",
    "message",
    "",
    "textarea",
    "Your message....",
    "No message is typed....",
    "message"
  )
];