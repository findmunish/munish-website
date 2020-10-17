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
  //if (process.env.sendAttachments.toLowerCase() === 'true') {
  if (jsonData.mailParams.sendAttachments.toLowerCase() === "true") {
    emailObject.attachments = [
      { name: "fantastic-icon.png", path: "/assets/images/fantastic-icon.png" }
    ];
    sendEmailWithAttachment(jsonData, emailObject);
  } else {
    sendEmail(jsonData, emailObject);
  }
};
const getEmailObject = (jsonData, toEmail, subject, messageBody) => {
  let sendEmailObject = {
    host: jsonData.mailParams.gmailSmtpServer, // process.env.gmailSmtpServer,
    fromEmail: jsonData.mailParams.gmailMail, // process.env.gmailMail,
    toEmail: toEmail,
    username: "",
    password: jsonData.mailParams.gmailAppPassword, // process.env.gmailAppPassword,
    subject: subject,
    messageBody: messageBody
  };
  return sendEmailObject;
};
const sendEmailToCustomer = (jsonData, formData, formType) => {
  if (formType !== CONTACT_US_FORM && formType !== REQUEST_QUOTE_FORM) {
    return;
  }
  let subject = "";
  let salutation = "";
  if (formType === CONTACT_US_FORM) {
    salutation = `Hello ${formData.name},`;
  } else {
    salutation = `Hello ${getName(formData.firstName, formData.lastName)},`;
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
      `Your request id, ${formData.trackingId}, is submitted on ${
        formData.timeStamp
      }. Please quote your request id, email id and date of request if you chat with someone from ${
        jsonData.website.title
      }.`
    );
  }
  messageBody += addLineBreak("br");
  messageBody += convertText2Html(signOff);
  messageBody += addLineBreak("br");
  messageBody += convertText2Html(signOffSalutation);

  let sendEmailObject = getEmailObject(
    jsonData,
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
    }] Customer ${formData.firstName.toUpperCase()} requests a quote`;
    messageBody += convertFormData2HtmlTable(formData);
  }
  messageBody += addLineBreak("br");
  messageBody += convertText2Html(signOff);
  messageBody += addLineBreak("br");
  let sendEmailObject = getEmailObject(
    jsonData,
    jsonData.mailParams.customerEmail, // process.env.customerEmail,
    subject,
    messageBody
  );
  prepareAndSendEmail(jsonData, sendEmailObject);
};
export {
  getEmailObject,
  prepareAndSendEmail,
  sendEmailToCustomer,
  sendEmailToTeam
};
