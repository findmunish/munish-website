import { fieldsInterface } from "../../views/forms/fieldsInterface";
import { getFieldObject } from "../../views/forms/fieldsObject";
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
];