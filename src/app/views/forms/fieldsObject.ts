import { Validators } from "@angular/forms";

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
