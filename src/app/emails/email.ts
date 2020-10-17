//import "./../../../assets/smtp.js";
declare let Email: any;
const sendEmail = (
  jsonData,
  { host, fromEmail, toEmail, username = "", password, subject, messageBody }
) => {
  // if (process.env.isSendEmail.toLowerCase() !== 'true') {
  if (jsonData.mailParams.isSendEmail.toLowerCase() !== "true") {
    let obj = {
      Host: host,
      Username: username === "" ? fromEmail : username,
      Password: "password",
      To: toEmail,
      From: fromEmail,
      Subject: subject,
      Body: messageBody
    };
    console.log("[inside send mail]\n", JSON.stringify(obj));
  } else {
    Email.send({
      Host: host,
      Username: username === "" ? fromEmail : username,
      Password: password,
      To: toEmail,
      From: fromEmail,
      Subject: subject,
      Body: messageBody
    })
      .then(message => {
        console.log(`Email, ${message}, sent successfully!`);
      })
      .catch(error => {
        console.log(`Some error, ${error}, occurred in sending email!`);
      });
  }
};
const sendEmailWithAttachment = (
  jsonData,
  {
    host,
    fromEmail,
    toEmail,
    username = "",
    password,
    subject,
    messageBody,
    attachments
  }
) => {
  // if (process.env.isSendEmail.toLowerCase() !== 'true') {
  if (jsonData.mailParams.isSendEmail.toLowerCase() !== "true") {
    let obj = {
      Host: host,
      Username: username === "" ? fromEmail : username,
      Password: "password",
      To: toEmail,
      From: fromEmail,
      Subject: subject,
      Body: messageBody,
      Attachments: attachments
    };
    console.log("[inside send mail with attachments]\n", JSON.stringify(obj));
  } else {
    Email.send({
      Host: host,
      Username: username === "" ? fromEmail : username,
      Password: password,
      To: toEmail,
      From: fromEmail,
      Subject: subject,
      Body: messageBody,
      Attachments: attachments
    })
      .then(message => {
        console.log(`Email, ${message}, sent successfully!`);
      })
      .catch(error => {
        console.log(`Some error, ${error}, occurred in sending email!`);
      });
  }
};
export { sendEmail, sendEmailWithAttachment };
