// import * as uuid from 'uuid';
// import * as moment from 'moment';
import { getName } from "../utils/stringUtils";
import {
  addLineBreak,
  convertImage2LogoHtmlText,
  surroundWithHtmlTag,
  convertText2Html,
  convertFormData2HtmlTable
} from "./formatEmail";
import { sendEmail, sendEmailWithAttachment } from "./email";

// const companyTitle = `Fantastic Windows`;
const CONTACT_US_FORM = "contact-us";
const REQUEST_QUOTE_FORM = "request-quote";
// window.location:  Location http://localhost:8080/requestQuote.html#
// window.location.port:  8080
// window.location.hostname:  localhost
// window.location.href:  http://localhost:8080/requestQuote.html#
// window.location.pathname:  /requestQuote.html
// window.location.protocol:  http:
const getLogoFileName = () => {
  let port = window.location.port ? `:${window.location.port}` : "";
  let imageUrl = `//${
    window.location.hostname
  }${port}/assets/images/fantastic-icon.png`;
  let imageObj = { image: imageUrl, altText: "FantasticLogo" };
  return imageObj;
};
const prepareAndSendEmail = (jsonData, emailObject) => {
  if (jsonData.mailParams.isSendEmail.toLowerCase() === "true") {
    if (jsonData.mailParams.sendAttachments.toLowerCase() === "true") {
      emailObject.attachments = [
        {
          name: "fantastic-icon.png",
          path: "/assets/images/fantastic-icon.png"
        }
      ];
      sendEmailWithAttachment(emailObject);
    } else {
      sendEmail(emailObject);
    }
  } else {
    if (jsonData.mailParams.sendAttachments.toLowerCase() === "true") {
      emailObject.attachments = [
        {
          name: "fantastic-icon.png",
          path: "/assets/images/fantastic-icon.png"
        }
      ];
      console.log(
        "[Email Object with attachments]\n",
        JSON.stringify(emailObject)
      );
    } else {
      console.log("[Email Object]\n", JSON.stringify(emailObject));
    }
  }
};
const getEmailObject = (toEmail, subject, messageBody) => {
  let sendEmailObject = {
    host: "", // process.env.gmailSmtpServer,
    fromEmail: "", // process.env.gmailMail,
    toEmail: toEmail,
    username: "",
    password: "", // process.env.gmailAppPassword,
    subject: subject,
    messageBody: messageBody
  };
  return sendEmailObject;
};
/*const sendEmailToCustomer = (jsonData, requestFormData) => {
  let subject = `[${jsonData.website.title} #${
    requestFormData.trackingId
  }] Acknowledgement mail to your request!`;
  let salutation = `Hello ${getName(
    requestFormData.first_name,
    requestFormData.last_name
  )},`;

  let signOff = `Thanks and regards`;
  let signOffSalutation = `Team ${jsonData.website.title}`;

  let imgObj = getLogoFileName();
  let messageBody = convertImage2LogoHtmlText(imgObj);
  messageBody += addLineBreak("hr");
  messageBody += addLineBreak("br");
  messageBody += addLineBreak("br");
  messageBody += convertText2Html(salutation);
  messageBody += addLineBreak("br");
  messageBody += convertText2Html(
    `Thank you for showing interest in ${jsonData.website.title}.`
  );
  messageBody += convertText2Html(
    `Your request id is ${requestFormData.trackingId} on ${
      requestFormData.timeStamp
    }. Please quote your id, email id and date of request if you chat with someone from ${jsonData.website.title}.`
  );
  messageBody += addLineBreak("br");
  messageBody += convertText2Html(signOff);
  messageBody += addLineBreak("br");
  messageBody += convertText2Html(signOffSalutation);

  let sendEmailObject = getEmailObject(
    requestFormData.email,
    subject,
    messageBody
  );
  prepareAndSendEmail(jsonData, sendEmailObject);
};*/
/*
const sendEmailToTeam = (jsonData, requestFormData) => {
  let subject = `[${jsonData.website.title} #${
    requestFormData.trackingId
  }] Customer ${requestFormData.first_name.toUpperCase()} requests a quote`;
  let salutation = `Hello Team,`;

  let signOff = `Thanks and regards`;

  let imgObj = getLogoFileName();
  let messageBody = convertImage2LogoHtmlText(imgObj);
  messageBody += addLineBreak("hr");
  messageBody += addLineBreak("br");
  messageBody += addLineBreak("br");
  messageBody += convertText2Html(salutation);
  messageBody += addLineBreak("br");
  messageBody += convertFormData2HtmlTable(requestFormData);
  messageBody += addLineBreak("br");
  messageBody += convertText2Html(signOff);
  messageBody += addLineBreak("br");
  let sendEmailObject = getEmailObject(
    jsonData.mailParams.customerEmail,
    subject,
    messageBody
  );
  prepareAndSendEmail(jsonData, sendEmailObject);
};*/
const sendEmailToCustomer = (jsonData, formData, formType) => {
  if (formType !== CONTACT_US_FORM && formType !== REQUEST_QUOTE_FORM) {
    return;
  }
  let subject = "";
  let salutation = "";
  if (formType === CONTACT_US_FORM) {
    salutation = `Hello ${formData.name},`;
  } else {
    salutation = `Hello ${getName(
      formData.first_name,
      formData.last_name
    )},`;
  }

  let signOff = `Thanks and regards`;
  let signOffSalutation = `Team ${jsonData.website.title}`;

  let imgObj = getLogoFileName();
  let messageBody = convertImage2LogoHtmlText(imgObj);
  messageBody += addLineBreak("hr");
  messageBody += addLineBreak("br");
  messageBody += addLineBreak("br");
  messageBody += convertText2Html(salutation);
  messageBody += addLineBreak("br");
  messageBody += convertText2Html(
    `Thank you for showing interest in ${jsonData.website.title}.`
  );
  if (formType === CONTACT_US_FORM) {
    subject = `[${jsonData.website.title} #${
      formData.trackingId
    }] Thank you for contacting us!`;
    messageBody += convertText2Html(
      `Your query with id, ${formData.trackingId}, is submitted on ${
        formData.timeStamp
      }. ${jsonData.website.title} would attend to your query soon.`
    );
  } else {
    //if (formType === REQUEST_QUOTE_FORM)
    subject = `[${jsonData.website.title} #${
      formData.trackingId
    }] Acknowledgement mail to your request!`;
    messageBody += convertText2Html(
      `Your request id is ${formData.trackingId} on ${
        formData.timeStamp
      }. Please quote your id, email id and date of request if you chat with someone from ${jsonData.website.title}.`
    );
  }
  messageBody += addLineBreak("br");
  messageBody += convertText2Html(signOff);
  messageBody += addLineBreak("br");
  messageBody += convertText2Html(signOffSalutation);

  let sendEmailObject = getEmailObject(
    formData.email,
    subject,
    messageBody
  );
  prepareAndSendEmail(jsonData, sendEmailObject);
};
const sendEmailToTeam = (jsonData, formData, formType) => {
  if (formType !== CONTACT_US_FORM && formType !== REQUEST_QUOTE_FORM) {
    return;
  }
  let subject = "";
  let salutation = `Hello Team,`;

  let signOff = `Thanks and regards`;

  let imgObj = getLogoFileName();
  let messageBody = convertImage2LogoHtmlText(imgObj);
  messageBody += addLineBreak("hr");
  messageBody += addLineBreak("br");
  messageBody += addLineBreak("br");
  messageBody += convertText2Html(salutation);
  messageBody += addLineBreak("br");
  if (formType === CONTACT_US_FORM) {
    subject = `[${jsonData.website.title} #${
      formData.trackingId
    }] Customer ${formData.name.toUpperCase()} has a query!`;
    messageBody += surroundWithHtmlTag(
      `Customer, ${formData.name}, with email id ${
        formData.email
      } contacted with a query.`,
      "div"
    );
    messageBody += surroundWithHtmlTag(`${formData.message}`, "div");
  } else {
    //if (formType === REQUEST_QUOTE_FORM)
    subject = `[${jsonData.website.title} #${
      formData.trackingId
    }] Customer ${formData.first_name.toUpperCase()} requests a quote`;
    messageBody += convertFormData2HtmlTable(formData);
  }
  messageBody += addLineBreak("br");
  messageBody += convertText2Html(signOff);
  messageBody += addLineBreak("br");
  let sendEmailObject = getEmailObject(
    jsonData.mailParams.customerEmail, // process.env.customerEmail,
    subject,
    messageBody
  );
  prepareAndSendEmail(jsonData, sendEmailObject);
};
/*const getFormData = formId => {
  let elements = document.getElementById(formId).elements
    let requestFormData = {};
    for(let i = 0 ; i < elements.length ; i++) {
        let item = elements.item(i);
        requestFormData[item.name] = item.value;
    }
    requestFormData.trackingId = uuid.v4()     // requestFormData.trackingId = Math.random().toString(36).substr(2,11)
    requestFormData.timeStamp = moment().toDate()
  let requestFormData: any = {};
  //requestFormData.trackingId = uuid.v4()     // requestFormData.trackingId = Math.random().toString(36)
  //requestFormData.timeStamp =  new Date()   // moment().toDate()
  return requestFormData;
};*/
export {
  getEmailObject,
  prepareAndSendEmail,
  sendEmailToCustomer,
  sendEmailToTeam
  // getFormData
};
